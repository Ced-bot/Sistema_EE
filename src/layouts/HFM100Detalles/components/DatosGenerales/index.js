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

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

import { Card, Grid, Typography, TextField } from '@mui/material';

// Argon Dashboard 2 MUI base styles
import { Select, Space } from 'antd';
// Graficos
import ScatterChart from "layouts/HFM100Detalles/components/Graficos/scatter";

// RECOIL

const handleChange = (value) => {
  //console.log(`selected ${value}`);
};
function DatosGenerales({datosDetalles}) {

  return (
    <Card id="delete-account">
    <ArgonBox p={1}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={8.7} >
          <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={1}>
             <Typography variant="h6">Datos térmicos del material </Typography>
          </ArgonBox>
          
          <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={1}>
              <Grid container alignItems="left" justifyContent="left" >
                  <Grid item> <Typography variant="h6">Nombre:</Typography> </Grid>
              </Grid>
              <Grid container alignItems="right" justifyContent="right" >
                  <Grid item> <TextField value={datosDetalles["nombreMuestra"]} variant="outlined"  style={{ width: 150 }} inputProps={{ style: { textAlign: "center", paddingLeft: '0px'}}} disabled/> </Grid>
              </Grid>
          </ArgonBox>
          
          <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={1}>
              <Grid container alignItems="left" justifyContent="left" >
                  <Grid item> <Typography variant="h6">Espesor (mm):</Typography> </Grid>
              </Grid>
              <Grid container alignItems="right" justifyContent="right" >
                  <Grid item> <TextField value={datosDetalles["espesor"]} variant="outlined" style={{ width: 150 }} inputProps={{ style: { textAlign: "center", paddingLeft: '0px'}}} disabled/> </Grid>
              </Grid>
          </ArgonBox>
          
          <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={1}>
              <Grid container alignItems="left" justifyContent="left" >
                  <Grid item> <Typography variant="h6">Val. Sujeción:</Typography> </Grid>
              </Grid>
              <Grid container alignItems="right" justifyContent="right" >
                  <Grid item> <TextField  value={datosDetalles["detalles"]["valSujecion"]} variant="outlined" style={{ width: 150 }} inputProps={{ style: {textAlign: "center", paddingLeft: '0px'}}} disabled/> </Grid>
              </Grid>
          </ArgonBox>


          <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={1}>
              <Grid container alignItems="left" justifyContent="left">
                  <Grid item> <Typography variant="h6">Mét. Sujeción:</Typography> </Grid>
              </Grid>
              <Grid container alignItems="right" justifyContent="right" >
                  <Grid item> <TextField value={datosDetalles["detalles"]["metSujecion"]} variant="outlined" style={{ width: 150 }} inputProps={{ style: { textAlign: "center", paddingLeft: '0px'}}} disabled/> </Grid>
              </Grid>
          </ArgonBox>

          <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={5}>
              <Grid container alignItems="left" justifyContent="left">
                  <Grid item> <Typography variant="h6">Mat. Calibración:</Typography> </Grid>
              </Grid>
              <Grid container alignItems="right" justifyContent="right" >
                  <Grid item> <TextField value={datosDetalles["detalles"]["matCalibracion"]} variant="outlined" style={{ width: 150 }} inputProps={{ style: { textAlign: "center", paddingLeft: '0px'}}} disabled/> </Grid>
              </Grid>
          </ArgonBox>
          <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={1}>
              <Grid container alignItems="left" justifyContent="left">
                  <Grid item> <Typography variant="h6">ID de material:</Typography> </Grid>
              </Grid>
              <Grid container alignItems="right" justifyContent="right" >
                  <Grid item> <TextField value={datosDetalles["detalles"]["calibracion_id"]} variant="outlined" style={{ width: 150 }} inputProps={{ style: { textAlign: "center", paddingLeft: '0px'}}} disabled/> </Grid>
              </Grid>
          </ArgonBox>
        </Grid>
        {/* Graficos de los puntos */}
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={12}> <ScatterChart datosPunto={[datosDetalles["condTermica"],datosDetalles["tempInferior"],datosDetalles["tempSuperior"]]} /> </Grid>
        </Grid>
        {/* Elementos finales del panel  */}
        <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={10} >
                <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={1}>
                    <Grid container alignItems="left" justifyContent="left">
                        <Grid item> <Typography variant="h6" style={{ marginRight: '8px', marginTop: '6px'}} >Ver. Software:</Typography> </Grid>
                        <Grid item style={{ width: "100%" }} > <Typography variant="overline" style={{ marginRight: '8px', marginTop: '6px', color: 'gray'}}>{datosDetalles["detalles"]["softVersion"]}</Typography> </Grid>
                    </Grid>
                    <Grid container alignItems="left" justifyContent="left" >
                        <Grid item> <Typography variant="h6" style={{ marginRight: '8px', marginTop: '6px'}}>Instrumento:</Typography> </Grid>
                        <Grid item style={{ width: "100%" }} > <Typography variant="overline" style={{ marginRight: '8px', marginTop: '6px', color: 'gray'}}>{datosDetalles["detalles"]["instrumento"]}</Typography></Grid>
                    </Grid>
                </ArgonBox>
                <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={1}>
                    <Grid container alignItems="left" justifyContent="left" style={{ width: "100%" }}>
                        <Grid item> <Typography variant="h6" style={{ marginRight: '8px', marginTop: '6px'}}>Ver. Firmware:</Typography> </Grid>
                        <Grid item style={{ width: "100%" }} > <Typography variant="overline" style={{ marginRight: '8px', marginTop: '6px', color: 'gray'}}>{datosDetalles["detalles"]["firmVersion"]}</Typography></Grid>
                        {/* <Grid item style={{ width: "100%" }} > <TextField label="" variant="outlined" style={{ width: "100%" }} inputProps={{ style: { textAlign: "center", paddingLeft: '0px'}}} disabled/> </Grid> */}
                    </Grid>
                </ArgonBox>
            </Grid>
        </Grid>

        </Grid>
      
    </ArgonBox>
    </Card>
  );
}
// Setting default values for the props of GradientLineChart
DatosGenerales.defaultProps = {
};
// Typechecking props for the CategoriesList
DatosGenerales.propTypes = {
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

export default DatosGenerales;
