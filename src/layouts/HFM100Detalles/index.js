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

import { useState, useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// HFM100Detalles page components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import BaseLayout from "layouts/HFM100Detalles/components/BaseLayout";
import Volver from "layouts/HFM100Detalles/components/Volver";
import DatosGenerales from "layouts/HFM100Detalles/components/DatosGenerales";
import Detalles from "layouts/HFM100Detalles/components/Detalles";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import { Spin } from 'antd';
// react-router components
import { useLocation } from "react-router-dom";
//
import axios from 'axios';

function HFM100Detalles() {
  const [opcionDif, setOpcionDif] = useState(0);
  const [cargando, setCargando] = useState(true);

  const dat_route = useLocation().pathname.split("/").slice(1);
  // Valores de los textfields
  const [datosDetalles, setDatosDetalles] = useState({
      detalles_id: "",
      detalles: {calibracion_id : "",facCalibracion: "",firmVersion: "",instrumento: "",matCalibracion: "",metSujecion: "",softVersion: "",valSujecion: ""},
      bloques: {condTermica: [0],flujoCalor: [0],tempInf: [0],tempSup: [0]},
      tablas: {flujo:[0], tempInferior:[0], tempSuperior:[0], tiempo:[0]},

      registro_id: "",
      condTermica: "1",
      duracion: "",
      espesor: "0",
      fechaFin: "",
      fechaInicio: "",
      nombreMuestra: "",
      tempInferior: "0",
      tempSuperior: "0",

  });
  // Traer los datos de los detalles de la prueba
  useEffect(() => {
    // Tu código para activar un evento cuando el componente se carga
  
    // Extrae la cadena del estado si está presente
    console.log("Registro:",decodeURIComponent(dat_route[1]));
    try {
      axios.post('https://y54s321dg9.execute-api.sa-east-1.amazonaws.com/default/LeerDetallesHFM100', {
        reg_id: decodeURIComponent(dat_route[1])
      },
      // Headers
      {})
      .then((response) => {
        // La respuesta de la función Lambda se guarda en el estado 'data'
        //setData(response.data);
        console.log(response.data);
        setDatosDetalles(response.data.data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Hubo un error en la lectura de los datos:", error);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <ArgonBox mt={0}>

        {!cargando ? (
          <ArgonBox mb={3}>
            {/* Información de los materiales analizados */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={4.5} mb={3}>
                {/* Datos generales del elemento */}
                <ArgonBox mb={2} >
                  <DatosGenerales datosDetalles={datosDetalles} />
                </ArgonBox>
                {/* Volver*/}
                <ArgonBox >
                  <Volver  />
                </ArgonBox>
              </Grid>
              
              {/* Información de los puntos del material */}
              <Grid item xs={12} md={7.5}>
                <Detalles datosDetalles={datosDetalles}/>
              </Grid>
            </Grid>
          </ArgonBox>
        ):(
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Spin size="large" tip="Cargando..." ><p style={{color: 'gray', fontSize: '28px', opacity: '0.5', fontStyle: 'italic' }}>CED</p></Spin> {/* spinning={cargando}  */}
          </div>
        )}

      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default HFM100Detalles;
