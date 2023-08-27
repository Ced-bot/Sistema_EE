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
import Indicador from "layouts/resultados/components/Indicador";
import { Grid, TextField, Typography, Box } from '@mui/material';

// RECOIL
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { datosRes } from 'layouts/dashboard2/components/Recoil';
function Indicadores({opcionDif}) {
  // Recoil
  const resultados = useRecoilValue(datosRes);
  //console.log(resultados);
  /////////////////////////////
  // Resultados de la TTM
  const respTtmPiso = resultados["resultadosTTM"][0]["Piso"] === "Si cumple"? "Si se cumple con lo indicado en la norma EM 110":resultados["resultadosTTM"][0]["Piso"];
  const respTtmMuro= resultados["resultadosTTM"][1]["Muro"] === "Si cumple"? "Si se cumple con lo indicado en la norma EM 110":resultados["resultadosTTM"][1]["Muro"];
  const respTtmTecho= resultados["resultadosTTM"][2]["Techo"] === "Si cumple"? "Si se cumple con lo indicado en la norma EM 110":resultados["resultadosTTM"][2]["Techo"];
  const conclusionTTM = [respTtmPiso,respTtmMuro,respTtmTecho].every(element =>  Object.values(element)[0] === "Si se cumple con lo indicado en la norma EM 110");
  // Resultados de las infitraciones 
  const infVentanas = resultados["resultadosInfiltraciones"][0].every(element =>  Object.values(element)[0] === "Si cumple"); // Ni yo lo entiendo xD
  const respVentanas = infVentanas ? "Si se cumple con lo indicado en la norma EM 110" : ((resultados["resultadosInfiltraciones"][0][0]["-1"] === "Si cumple")? "No cumple" : resultados["resultadosInfiltraciones"][0][0]["-1"]);
  const infPuertas = resultados["resultadosInfiltraciones"][1].every(element =>  Object.values(element)[0] === "Si cumple");
  const respPuertas = infPuertas ? "Si se cumple con lo indicado en la norma EM 110" : ((resultados["resultadosInfiltraciones"][1][0]["-1"] === "Si cumple")? "No cumple" : resultados["resultadosInfiltraciones"][1][0]["-1"]);
  const conclusionInf = [respVentanas,respPuertas].every(element =>  Object.values(element)[0] === "Si se cumple con lo indicado en la norma EM 110");

  const Envolvente = () => (
    < >
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Indicador
            name="Transmitancia térmica máxima"
            conclusion = {conclusionTTM}
            titulos = {["Pisos","Muros","Techos"]}
            elementos = {[respTtmPiso,respTtmMuro,respTtmTecho]}
            noGutter
          />
          <Indicador
            name="Infiltraciones"
            conclusion = {conclusionInf}
            titulos = {["Ventanas","Puertas"]}
            elementos = {[respVentanas,respPuertas]}
          />
          <Indicador
            name="Condensación"
            conclusion = {conclusionTTM}
            titulos = {["Ventanas","Puertas"]}
            elementos = {[respVentanas,respPuertas]}
          />
          <Indicador
            name="Incidencias"
            conclusion = {conclusionTTM}
            titulos = {["Ventanas","Puertas"]}
            elementos = {[respVentanas,respPuertas]}
          />
        </ArgonBox>
    </>
  );
  const Demanda = () => (
    < >
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Indicador
            name="oliver liam"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
        </ArgonBox>
    </>
  );
  const Mejoras = () => (
    < >
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Indicador
            name="oliver liam"
            company="viking burrito"
            email="oliver@burrito.com"
            vat="FRB1235476"
          />
        </ArgonBox>
    </>
  );

  return (
    <Card id="delete-account">
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Indicadores
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2}>
        {opcionDif === 0 && <Envolvente />}
        {opcionDif === 1 && <Demanda /> }   
        {opcionDif === 2 && <Mejoras />}   

      </ArgonBox>
    </Card>
  );
}
// Setting default values for the props of GradientLineChart
Indicadores.defaultProps = {
};
// Typechecking props for the CategoriesList
Indicadores.propTypes = {
  opcionDif: PropTypes.number,
};

export default Indicadores;
