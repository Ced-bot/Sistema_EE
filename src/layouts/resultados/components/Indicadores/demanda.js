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

// @mui material components
import Card from "@mui/material/Card";
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Billing page components
import IndicadorDemanda from "layouts/resultados/components/Indicador/demanda";
import { Grid, TextField, Typography, Box } from '@mui/material';

// RECOIL
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { datosRes, datosResDemandaCal, datosResDemandaRef } from 'layouts/dashboard2/components/Recoil';

function IndicadoresDemanda() {
  // Recoil
  const datosResDemandaCalR = useRecoilValue(datosResDemandaCal);
  const datosResDemandaRefR = useRecoilValue(datosResDemandaRef);
  //console.log(datosResDemandaR);
  /////////////////////////////
  // Resultados dia tipico de invierno
  const perEnvolvente = "Pérdidas térmicas de la envolvente: " + datosResDemandaCalR["Pérdidas térmicas de la envolvente"];
  const perInfiltraciones = "Pérdidas por infiltración: " + datosResDemandaCalR["Pérdidas por infiltración"];
  const perVentilaciones = "Pérdidas por ventilación:" + datosResDemandaCalR["Pérdidas por ventilación"];
  const ganInternas = "Ganancias internas:" + datosResDemandaCalR["Ganancias internas"];
  const ganSolares = "Ganancias solares:" + datosResDemandaCalR["Ganancias solares"];

  const perTotales = "Perdidas totales: " + datosResDemandaCalR["Perdidas totales"];
  const ganTotales = "Ganancias totales: " + datosResDemandaCalR["Ganancias totales"];
  const perGanTotales = "Pérdidas y ganancias térmicas para un día típico de invierno en W: " + datosResDemandaCalR["Pérdidas y ganancias térmicas para un día típico de invierno en W"];
  const energia = "Potencia requerida: " + datosResDemandaCalR["Potencia requerida"];
  const demanda = "Conclusión: " + datosResDemandaCalR["Conclusión"];
 
  // Resultados dia tipico de verano
  const perEnvolventeB = "Pérdidas térmicas de la envolvente:" + datosResDemandaRefR["Pérdidas térmicas de la envolvente"];
  //const perInfiltracionesB = "Pérdidas por infiltración: 500 W";
  const perVentilacionesB = "Pérdidas por ventilación:" + datosResDemandaRefR["Pérdidas por ventilación"];
  const ganInternasB = "Ganancias internas: " + datosResDemandaRefR["Ganancias internas"];
  const ganSolaresB = "Ganancias solares:" + datosResDemandaRefR["Ganancias solares"];
  
  const perTotalesB = "Perdidas totales: " + datosResDemandaRefR["Perdidas totales"];
  const ganTotalesB = "Ganancias totales: " + datosResDemandaRefR["Ganancias totales"];
  const perGanTotalesB = "Pérdidas y ganancias térmicas para un día típico de invierno en W: " + datosResDemandaRefR["Pérdidas y ganancias térmicas para un día típico de invierno en W"];
  const energiaB = "Potencia requerida: " + datosResDemandaRefR["Potencia requerida"];
  const demandaB = "Conclusión: " + datosResDemandaRefR["Conclusión"];

  return (
    <Card id="delete-account">
      {/* <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Indicadores
        </ArgonTypography>
      </ArgonBox> */}
      <ArgonBox pt={1} pb={2} px={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <IndicadorDemanda
            tittle="Estación seca"
            perEnvolvente = {perEnvolvente}
            perInfiltraciones = {perInfiltraciones}
            perVentilaciones = {perVentilaciones}
            ganInternas = {ganInternas}
            ganSolares = {ganSolares}

            perTotales = {perTotales}
            ganTotales = {ganTotales}
            perGanTotales = {perGanTotales}
            energia = {energia}
            demanda = {demanda}
          />
          <IndicadorDemanda
            tittle="Estación húmeda"
            perEnvolvente = {perEnvolventeB}
            perInfiltraciones = {""}
            perVentilaciones = {perVentilacionesB}
            ganInternas = {ganInternasB}
            ganSolares = {ganSolaresB}

            perTotales = {perTotalesB}
            ganTotales = {ganTotalesB}
            perGanTotales = {perGanTotalesB}
            energia = {energiaB}
            demanda = {demandaB}
          />
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}
// Setting default values for the props of GradientLineChart
IndicadoresDemanda.defaultProps = {
};
// Typechecking props for the CategoriesList
IndicadoresDemanda.propTypes = {
};

export default IndicadoresDemanda;
