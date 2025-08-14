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
import IndicadorEM110 from "layouts/resultados/components/Indicador/envolvente";
import { Grid, TextField, Typography, Box } from '@mui/material';

// RECOIL
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { datosRes } from 'layouts/dashboard2/components/Recoil';
function IndicadoresEM110() {
  // Recoil
  const resultados = useRecoilValue(datosRes);
  //console.log(resultados);
  /////////////////////////////
  // Resultados de la TTM
  const respTtmPiso = resultados["resultadosTTM"][0]["Piso"][0] === "Si cumple"? "Si cumple con lo indicado en la norma EM 110":resultados["resultadosTTM"][0]["Piso"][0];
  const respTtmMuro= resultados["resultadosTTM"][1]["Muro"][0] === "Si cumple"? "Si cumple con lo indicado en la norma EM 110":resultados["resultadosTTM"][1]["Muro"][0];
  const respTtmTecho= resultados["resultadosTTM"][2]["Techo"][0] === "Si cumple"? "Si cumple con lo indicado en la norma EM 110":resultados["resultadosTTM"][2]["Techo"][0];
  //const conclusionTTM = [respTtmPiso,respTtmMuro,respTtmTecho].every(element =>  Object.values(element)[0] === "Si cumple con lo indicado en la norma EM 110");
  const conclusionTTM = [respTtmPiso,respTtmMuro,respTtmTecho].every((variable) => variable === "Si cumplen");
  console.log([respTtmPiso,respTtmMuro,respTtmTecho]);

  // Resultados de las infitraciones 
  const infVentanas = resultados["resultadosInfiltraciones"][0].every(element =>  Object.values(element)[0] === "Si cumple"); // Ni yo lo entiendo xD
  const respVentanas = infVentanas ? "Si cumplen con lo indicado en la norma EM 110" : ((resultados["resultadosInfiltraciones"][0][0]["msg"] === "Si cumple")? "No cumplen" : resultados["resultadosInfiltraciones"][0][0]["msg"]);
  const infPuertas = resultados["resultadosInfiltraciones"][1].every(element =>  Object.values(element)[0] === "Si cumple");
  const respPuertas = infPuertas ? "Si cumplen con lo indicado en la norma EM 110" : ((resultados["resultadosInfiltraciones"][1][0]["msg"] === "Si cumple")? "No cumplen" : resultados["resultadosInfiltraciones"][1][0]["msg"]);
  //const conclusionInf = [respVentanas,respPuertas].every(element =>  Object.values(element)[0] === "Si cumplen con lo indicado en la norma EM 110");
  const conclusionInf = respVentanas === "Si cumplen con lo indicado en la norma EM 110" && respPuertas === "Si cumplen con lo indicado en la norma EM 110";

  // Resultados de la condensación
  const infCondensacion = resultados["resultadosCondensacion"].every(element =>  Object.values(element)[0][0] === "Si cumple");
  const respCondensacion = infCondensacion ? "Si cumplen con lo indicado en la norma EM 110" : ((resultados["resultadosCondensacion"][0]["msg"][0] === "Si cumple")? "No cumplen" : resultados["resultadosCondensacion"][0]["msg"][0]);
  const conclusionCerr = (respCondensacion === "Si cumplen con lo indicado en la norma EM 110");

  // Resultados de la incidencia
  const infIncidencia = resultados["resultadosIncidencia"].every(element =>  Object.values(element)[0][0] === "Si cumple");
  const respIncidencia = infIncidencia ? "Si cumplen con lo indicado en la norma EM 110" : ((resultados["resultadosIncidencia"][0]["msg"][0] === "Si cumple")? "No cumplen" : resultados["resultadosIncidencia"][0]["msg"][0]);
  const conclusionInc = (respIncidencia === "Si cumplen con lo indicado en la norma EM 110");


  return (
    <Card id="delete-account">
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Indicadores de la norma EM. 110
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <IndicadorEM110
            name="Transmitancia térmica máxima"
            conclusion = {conclusionTTM}
            titulos = {["Pisos","Muros","Techos"]}
            elementos = {[respTtmPiso,respTtmMuro,respTtmTecho]}
            noGutter
          />
          <IndicadorEM110
            name="Infiltraciones"
            conclusion = {conclusionInf}
            titulos = {["Ventanas","Puertas"]}
            elementos = {[respVentanas,respPuertas]}
          />
          <IndicadorEM110
            name="Condensación"
            conclusion = {conclusionCerr}
            titulos = {["Cerramientos"]}
            elementos = {[respCondensacion]}
          />
          <IndicadorEM110
            name="Incidencias"
            conclusion = {conclusionInc}
            titulos = {["Vanos"]}
            elementos = {[respIncidencia]}
          />
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}
// Setting default values for the props of GradientLineChart
IndicadoresEM110.defaultProps = {
};
// Typechecking props for the CategoriesList
IndicadoresEM110.propTypes = {
};

export default IndicadoresEM110;
