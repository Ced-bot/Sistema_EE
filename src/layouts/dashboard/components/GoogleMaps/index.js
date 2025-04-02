import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";
// Recoil
import { useRecoilState} from 'recoil';
import { direccionVivienda } from '../../../dashboard2/components/Recoil';

// Icono personalizado
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const GoogleMaps = () => {
  const [position, setPosition] = useState(null);
  const [locationInfo, setLocationInfo] = useState({
    departamento: "",
    provincia: "",
    distrito: "",
    altitud: "Desconocida",
  });
  // RECOIL
  const [ubicacion, setUbicacion] = useRecoilState(direccionVivienda);

  const LocationMarker = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setPosition({ lat, lng });

        try {
          // Obtener datos de ubicación
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
          );
          const { address } = response.data;

          // Obtener altitud
          const elevationResponse = await axios.get(
            `https://api.open-elevation.com/api/v1/lookup?locations=${lat},${lng}`
          );
          const altitud = elevationResponse.data.results[0].elevation;

          setLocationInfo({
            departamento: address.state || "No disponible",
            provincia: address.region || "No disponible",
            distrito: address.city || address.tourism || address.village || address.town ||  "No disponible",
            altitud: altitud,
            direccion: "..., Provincia de "+address.region+", "+address.state+", "+address.country 
          });

          setUbicacion({
            departamento: address.state || "No disponible",
            provincia: address.region || "No disponible",
            distrito: address.city || address.tourism || address.village || address.town ||  "No disponible",
            altitud: altitud,
            direccion: "..., Provincia de "+address.region+", "+address.state+", "+address.country 
          });
          //console.log(address)

        } catch (error) {
          console.error("Error obteniendo la ubicación o altitud:", error);
        }
      },
    });

    return position ? (
      <Marker position={position} icon={customIcon}>
        <Popup>
          <b>Departamento:</b> {locationInfo.departamento} <br />
          <b>Provincia:</b> {locationInfo.provincia} <br />
          <b>Distrito:</b> {locationInfo.distrito} <br />
          <b>Altitud:</b> {locationInfo.altitud}
        </Popup>
      </Marker>
    ) : null;
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <MapContainer center={[-13.53195, -71.96746]} zoom={12} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};


export default GoogleMaps;
