/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";


import ArgonInput from "components/ArgonInput";
import Localizacion from "layouts/dashboard/components/ComboDireccion";
import { TextField } from '@mui/material';

// Recoil
import { useRecoilValue, useRecoilState} from 'recoil';
import { direccionVivienda, valoresDatosGenerales } from '../../dashboard2/components/Recoil';


function DatosGenerales() {
    const [valoresDatosGeneralesR, setValoresDatosGenerales] = useRecoilState(valoresDatosGenerales);

    // Datos generales
    const [superficieUtil, setSuperficieUtil] = useState(valoresDatosGeneralesR["Superficie útil habitable (m²)"]);
    const handleChangeSuperficieUtil = (event) => {
        setSuperficieUtil(event.target.value); 
    };
    const [alturaPlanta, setAlturaPlanta] = useState(valoresDatosGeneralesR["Altura libre de la planta (m)"]);
    const handleChangeAlturaPlanta = (event) => {
        setAlturaPlanta(event.target.value); 
    };
    const [nroPlantas, setNroPlantas] = useState(valoresDatosGeneralesR["Número de plantas habitables"]);
    const handleChangeNroPlantas = (event) => {
        setNroPlantas(event.target.value); 
    };
    const [ventilacion, setVentilacion] = useState(valoresDatosGeneralesR["Ventilación de la vivienda (ren/h)"]);
    const handleChangeVentilacion = (event) => {
        setVentilacion(event.target.value); 
    };
    const [caudalAire, setCaudalAire] = useState(valoresDatosGeneralesR["Caudal de aire a renovar (m³/h)"]);
    const handleChangeCaudalAire = (event) => {
        setCaudalAire(event.target.value); 
    };
    const [particiones, setParticiones] = useState(valoresDatosGeneralesR["Masas en la pariciones internas"]);
    const handleChangeParticiones = (event) => {
        setParticiones(event.target.value); 
    };
    const [nroPersonas, setNroPersonas] = useState(valoresDatosGeneralesR["Cantidad de personas en la vivienda"]);
    const handleChangeNroPersonas = (event) => {
        setNroPersonas(event.target.value); 
    };
    // ... (tus estados y handlers se mantienen igual)
    // "Definición de la vivienda" 
    const renderChart = (
      <ArgonBox p={2}>
        <Grid container spacing={3}>
          {/* Columna 1 */}
          <Grid item xs={12} md={4}>
            {/* Input 1 */}
            <ArgonBox mb={3}>
              <ArgonTypography variant="h6">Superficie útil habitable (m²)</ArgonTypography>
              <ArgonInput placeholder="Escriba aquí..."  value={superficieUtil}  onChange={handleChangeSuperficieUtil} fullWidth />
            </ArgonBox>
            
            {/* Input 2 */}
            <ArgonBox mb={3}>
              <ArgonTypography variant="h6">Ventilación de la vivienda (ren/h)</ArgonTypography>
              <ArgonInput placeholder="Escriba aquí..." value={ventilacion}  onChange={handleChangeVentilacion} fullWidth />
            </ArgonBox>
            
            {/* Input 3 */}
            <ArgonBox mb={3}>
              <ArgonTypography variant="h6">Cantidad de personas en la vivienda</ArgonTypography>
              <ArgonInput placeholder="Escriba aquí..." value={nroPersonas}  onChange={handleChangeNroPersonas} fullWidth />
            </ArgonBox>
          </Grid>
  
          {/* Columna 2 */}
          <Grid item xs={12} md={4}>
            {/* Input 1 */}
            <ArgonBox mb={3}>
              <ArgonTypography variant="h6">Altura libre de la planta (m)</ArgonTypography>
              <ArgonInput placeholder="Escriba aquí..." value={alturaPlanta}  onChange={handleChangeAlturaPlanta} fullWidth />
            </ArgonBox>
            
            {/* Input 2 */}
            <ArgonBox mb={3}>
              <ArgonTypography variant="h6">Caudal de aire a renovar (m³/h)</ArgonTypography>
              <ArgonInput placeholder="Escriba aquí..." value={caudalAire}  onChange={handleChangeCaudalAire} fullWidth />
            </ArgonBox>
            
            {/* Input 3 */}
            {/* <ArgonBox mb={3}>
              <ArgonTypography variant="h6">Masas en la pariciones internas</ArgonTypography>
              <ArgonInput placeholder="Escriba aquí..." fullWidth />
            </ArgonBox> */}
          </Grid>
  
          {/* Columna 3 */}
          <Grid item xs={12} md={4}>
            {/* Input 1 */}
            <ArgonBox mb={3}>
              <ArgonTypography variant="h6">Número de plantas habitables</ArgonTypography>
              <ArgonInput placeholder="Escriba aquí..." value={nroPlantas}  onChange={handleChangeNroPlantas} fullWidth />
            </ArgonBox>
            
            {/* Input 2 */}
            <ArgonBox mb={3}>
              <ArgonTypography variant="h6">Masas en la pariciones internas</ArgonTypography>
              <ArgonInput placeholder="Escriba aquí..." value={particiones}  onChange={handleChangeParticiones} fullWidth />
            </ArgonBox>
            
            {/* Input 3 */}
            {/* <ArgonBox mb={3}>
              <ArgonTypography variant="h6">Título Columna 3 - Input 3</ArgonTypography>
              <ArgonInput placeholder="Escriba aquí..." fullWidth />
            </ArgonBox> */}
          </Grid>
        </Grid>
      </ArgonBox>
    );
  
    return <Card>{renderChart}</Card>;
  }

  export default DatosGenerales;
