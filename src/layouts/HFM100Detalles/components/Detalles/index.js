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
import React, { useState, useEffect } from 'react';
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";
// @mui material components
import { Box, Tabs, Tab, Card, Grid, Typography, TextField } from '@mui/material';
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/system';

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI base styles
import { Select, Space } from 'antd';
// import ArgonButton from "components/ArgonButton";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";
// Argon Dashboard 2 MUI Examples
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";

// Elementos propios
import Tabla from "layouts/HFM100Detalles/components/Detalles/TablaBloque";

// RECOIL
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { datosEnvolvente,datosRes } from 'layouts/dashboard2/components/Recoil';
import { resIndicador } from 'layouts/resultados/components/Recoil';

const handleChange = (value) => {
  //console.log(`selected ${value}`);
};
const StyledFormControlLabel = styled(FormControlLabel)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const TwoLineLabel = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
function Detalles({datosDetalles}) {
  // Recoil
  const datosEnv = useRecoilValue(datosEnvolvente);
  const resultados = useRecoilValue(datosRes);
  const indicador = useRecoilValue(resIndicador);

  // Variables de los componentes de la pantalla


   // Evento de cambio de los radioButtons
  const [value, setValue] = useState('1');
  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };

  //console.log(datosEnv);
  return (
    <Card id="detalles-HFM100" sx={{ height: "100%" }}>
    <ArgonBox p={1}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={11} >
          <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={1}>
             <Typography variant="h6">Detalles </Typography>
          </ArgonBox>
          {/* <ArgonBox display="flex" justifyContent="center" alignItems="center">
            <Space wrap>
              <Select
                defaultValue="Acero"
                style={{  width: 380, }}
                onChange={handleChange}
                options={[
                  { value: 'Acero', label: 'Acero',},
                  { value: 'Aluminio', label: 'Aluminio',},
                  { value: 'Cobre', label: 'Cobre',},
                  { value: 'Cromo', label: 'Cromo', disabled: true,},]}
              />
            </Space>
          </ArgonBox> */}
          {/* Tiempos de inicio y final  */}
          <Grid container spacing={2} alignItems="center" pt={1}>
              <Grid item xs={12} md={5.4}>
                  <Box mb={2}>
                  <Grid container alignItems="center" justifyContent="left" spacing={2.03}>
                      <Grid item> <Typography variant="h6">Temp. Superior (°C):</Typography> </Grid>
                      <Grid item> <TextField value={datosDetalles["tempSuperior"]}  variant="outlined" type="number" style={{ width: 100 }} inputProps={{ min: "1", style: { textAlign: "center"}}} disabled/> </Grid>
                  </Grid>
                  </Box>
                  <Box mb={2}>
                  <Grid container alignItems="center" justifyContent="left"  spacing={1.63}>
                      <Grid item> <Typography variant="h6">Temp. Inferior (°C):</Typography> </Grid>
                      <Grid item> <TextField value={datosDetalles["tempInferior"]} variant="outlined" type="number" style={{ marginLeft: '11.4px',width: 100 }} inputProps={{ min: "1",  style: { textAlign: "center"}}} disabled/> </Grid>
                  </Grid>
                  </Box>
                  <Box mb={2}>
                  <Grid container alignItems="center" justifyContent="left"  spacing={1}>
                      <Grid item> <Typography variant="h6">Temp. Promedio (°C):</Typography> </Grid>
                      <Grid item> <TextField value={(parseFloat(datosDetalles["tempSuperior"])+parseFloat(datosDetalles["tempInferior"]))/2} variant="outlined" type="number" style={{ width: 100 }} inputProps={{ min: "1", style: { textAlign: "center"}}} disabled/> </Grid>
                  </Grid>
                  </Box>
                  <Box mb={2}>
                  <Grid container alignItems="center" justifyContent="left"  spacing={1}>
                      <Grid item> <Typography variant="h6">Fact. Calibración:</Typography> </Grid>
                      <Grid item> <TextField value={datosDetalles["detalles"]["facCalibracion"]} variant="outlined" type="number" style={{ marginLeft: '31px', width: 100 }} inputProps={{ min: "1", style: { textAlign: "center"}}} disabled/> </Grid>
                  </Grid>
                  </Box>
              </Grid>

              <Grid item xs={12} md={6.6}>
                  <Box mb={2}>
                  <Tabla condTermica={datosDetalles["bloques"]["condTermica"]} flujoCalor={datosDetalles["bloques"]["flujoCalor"]} tempInf={datosDetalles["bloques"]["tempInf"]} tempSup={datosDetalles["bloques"]["tempSup"]} />
                  </Box>
              </Grid>
          </Grid>
          
          <ArgonBox display="flex" justifyContent="center" alignItems="center">
            <RadioGroup
                row
                aria-labelledby="demo-form-control-label-placement"
                defaultValue="1"
                name="position"
                value={value}
                onChange={handleChangeRadio}
            >
                <StyledFormControlLabel value="1" control={<Radio />} label={
                    <span style={{ marginRight: '0px' }}>Temperatura (°C)</span>
                } labelPlacement="start" />
                <StyledFormControlLabel value="2" control={<Radio />} label={
                    <span style={{ marginRight: '0px' }}>Flujo (W/m²)</span>
                } labelPlacement="start" />
            </RadioGroup>
          </ArgonBox>
          {/* Graficos de lineas sonbre la evolucion de los datos */}
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={12}>
            {value === '1' && <DefaultLineChart
                title=""
                chart={{
                  labels: datosDetalles["tablas"]["tiempo"],
                  datasets: [
                    {
                      label: "Temp. superior",
                      color: "info",
                      data: datosDetalles["tablas"]["tempSuperior"],
                    },
                    {
                      label: "Temp. inferior",
                      color: "dark",
                      data: datosDetalles["tablas"]["tempInferior"],
                    },
                  ],
                }}
              />} 
            {value === '2' && <DefaultLineChart
                  title=""
                  chart={{
                    labels: datosDetalles["tablas"]["tiempo"],
                    datasets: [
                      {
                        label: "Flujo",
                        color: "info",
                        data: datosDetalles["tablas"]["flujo"],
                      },
                    ],
                  }}
                />} 
            </Grid>
          </Grid>
          {/* Graficos de lineas sonbre la evolucion de los datos */}
          <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={7}>
                    <Box mb={2}>
                    <Grid container alignItems="center" justifyContent="left" spacing={2.03}>
                        <Grid item> <Typography variant="h6">Cond. Térmica (W/mK):</Typography> </Grid>
                        <Grid item> <TextField value={datosDetalles["condTermica"]}  variant="outlined" type="number" style={{ width: 100 }} inputProps={{ min: "1", style: { textAlign: "center"}}} disabled/> </Grid>
                    </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box mb={2}>
                  <Grid container alignItems="center" justifyContent="left"  spacing={1.63}>
                      <Grid item> <Typography variant="h6">R (m²K/W):</Typography> </Grid>
                      <Grid item> <TextField value={datosDetalles["espesor"]/(1000*datosDetalles["condTermica"])}  variant="outlined" type="number" style={{ width: 100 }} inputProps={{ min: "1",  style: { textAlign: "center"}}} disabled/> </Grid>
                  </Grid>
                  </Box>
                </Grid>
            </Grid>
          <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={12}>
                  <Box mb={2}>
                  <Grid container alignItems="center" justifyContent="center"  spacing={1.63}>
                      <Grid item> <Typography variant="h6">Q avg (W/m²):</Typography> </Grid>
                      <Grid item> <TextField value={datosDetalles["bloques"]["flujoCalor"][datosDetalles["bloques"]["flujoCalor"].length-1]}  variant="outlined" type="number" style={{ width: 150 }} inputProps={{ min: "1",  style: { textAlign: "center"}}} disabled/> </Grid>
                  </Grid>
                  </Box>
                </Grid>
            </Grid>
        

        </Grid>
      </Grid>
      
    </ArgonBox>
    </Card>
  );
}
// Setting default values for the props of GradientLineChart
Detalles.defaultProps = {
};
// Typechecking props for the CategoriesList
Detalles.propTypes = {
    datosDetalles: PropTypes.shape({
        detalles_id: PropTypes.string,
        detalles: PropTypes.shape(
            {calibracion_id : PropTypes.string,
            facCalibracion: PropTypes.string,
            firmVersion: PropTypes.string,
            instrumento: PropTypes.string,
            matCalibracion: PropTypes.string,
            metSujecion: PropTypes.string,
            softVersion: PropTypes.string,
            valSujecion: PropTypes.string,
        }),
        bloques: PropTypes.shape({
            condTermica: PropTypes.array,
            flujoCalor: PropTypes.array,
            tempInf: PropTypes.array,
            tempSup: PropTypes.array,
        }),
        tablas: PropTypes.shape({
            flujo: PropTypes.array,
            tempInferior: PropTypes.array,
            tempSuperior: PropTypes.array,
            tiempo: PropTypes.array,
        }),
        
        registro_id: PropTypes.string,
        condTermica: PropTypes.string,
        duracion: PropTypes.string,
        espesor: PropTypes.string,
        fechaFin: PropTypes.string,
        fechaInicio: PropTypes.string,
        nombreMuestra: PropTypes.string,
        tempInferior: PropTypes.string,
        tempSuperior: PropTypes.string,
    }),
};

export default Detalles;
