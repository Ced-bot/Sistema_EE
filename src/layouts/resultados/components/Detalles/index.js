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
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
// import ArgonButton from "components/ArgonButton";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";

// RECOIL
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { datosEnvolvente,datosRes } from 'layouts/dashboard2/components/Recoil';
import { resIndicador } from 'layouts/resultados/components/Recoil';
function Detalles() {
  // Recoil
  const datosEnv = useRecoilValue(datosEnvolvente);
  const resultados = useRecoilValue(datosRes);
  const indicador = useRecoilValue(resIndicador);

  let arrCumplen = []
  let arrNoCumplen = []
  let arrStrRes = ""
  // Generar la lista de los valores que se deben mostrar
  if (indicador === "Transmitancia térmica máxima") {
    arrStrRes = "Transmitancia térmica máxima";
    resultados["resultadosTTM"].forEach(dictionary => {
      for (const key in dictionary) {
        let Nombre = key, ext1 = "Valor de TTM: "+ (dictionary[key][1] === "Nulo"? "No hay datos": (dictionary[key][1]+ " W/m²K"));
        if (dictionary[key][0] === "Si cumplen") { arrCumplen.push([Nombre,ext1]); }
        else if (dictionary[key][0] != "Todavía no se procesaron datos"){ arrNoCumplen.push([Nombre,ext1]); }
      }
    });
  } else if (indicador === "Infiltraciones") {
    arrStrRes = "Infiltraciones no deseadas de aire";
    // Revisar que elementos cumplen o no con la norma 
    const ventPuer = [...resultados["resultadosInfiltraciones"][0], ...resultados["resultadosInfiltraciones"][1]];
    ventPuer.forEach(dictionary => {
      for (const key in dictionary) {
        // Obtener los datos adicionales de los elementos
        let Nombre = "--", ext1 = "";
        datosEnv.forEach(cerr => {
          if (cerr["id"].toString() === key) {
            Nombre = cerr["name"];
            let otros = cerr["otros"];
            if (cerr["tipo"] === "Ventana"){ext1 = (otros["es_proyectante"]? "Es proyectante: Si":"Es proyectante: No") +", "+ (otros["es_hermetico"]? "Es hermética: Si":"Es hermética: No");}
            else{ext1 = (otros["es_silicona"]? "Sellado de silicona: Si":"Sellado de silicona: No") +", "+ (otros["es_burletes"]? "Tiene burletes: Si":"Tiene burletes: No");}
          }
        });
        // Colocar los datos donde corresponden
        if (dictionary[key] === "Si cumple" & key != "msg") { arrCumplen.push([Nombre,ext1]); }
        else if (key != "msg"){ arrNoCumplen.push([Nombre,ext1]); }
      }
    });
  } else if (indicador === "Condensación") {
    arrStrRes = "Riesgo de condensación superficial";
    /* resultados["resultadosCondensacion"].forEach(dictionary => {
      for (const key in dictionary) {
        let Nombre = "--",  ext1 = dictionary[key][1];
        datosEnv.forEach(cerr => {
          if (cerr["id"].toString() === key) { Nombre = cerr["name"]; }
        });
        // Colocar los datos donde corresponden
        if (dictionary[key][0] === "Si cumple" & key != "msg") { arrCumplen.push([Nombre,ext1]); }
        else if (key != "msg"){ arrNoCumplen.push([Nombre,ext1]); }
      }
    }); */
    resultados["resultadosCondensacion"].forEach(dictionary => {
      for (const key in dictionary) {
        let Nombre = dictionary[key][2],  
        ext1 = dictionary[key][1];
        // Colocar los datos donde corresponden
        if (dictionary[key][0] === "Si cumple" & key != "msg") { arrCumplen.push([Nombre,ext1]); }
        else if (key != "msg"){ arrNoCumplen.push([Nombre,ext1]); }
      }
    });
  } else if (indicador === "Incidencias") {
    arrStrRes = "Incidencias solares";
    resultados["resultadosIncidencia"].forEach(dictionary => {
      for (const key in dictionary) {
        let Nombre = "--",  ext1 = dictionary[key][1];
        datosEnv.forEach(cerr => {
          if (cerr["id"].toString() === key) { Nombre = cerr["name"]; }
        });
        // Colocar los datos donde corresponden
        if (dictionary[key][0] === "Si cumple" & key != "msg") { arrCumplen.push([Nombre,ext1]); }
        else if (key != "msg"){ arrNoCumplen.push([Nombre,ext1]); }
      }
    });
  } else {
    //newArray = []; // Valor por defecto si ASD no es igual a "ss2" ni "ss5"
  }

  // Resultados de la TTM
  const today = new Date().toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  //console.log("ssd");
  //console.log(datosEnv);
  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Detalles: {arrStrRes}
        </ArgonTypography>
        <ArgonBox display="flex" alignItems="flex-start">
          <ArgonBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </ArgonBox>
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            {today}
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox pt={3} pb={2} px={2}>
        <ArgonBox mb={2}>
          <ArgonTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            Cumplen
          </ArgonTypography>
        </ArgonBox>

        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          {arrCumplen.map((item, index) => (
              <Transaction
              key={index}
              color="success"
              icon="done"
              name={item[0]}
              description={item[1]}
              value="Editar"
            />
          ))}
        </ArgonBox>
        
        <ArgonBox mt={1} mb={2}>
          <ArgonTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            No cumplen
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
        {arrNoCumplen.map((item, index) => (
          <Transaction
            key={index}
            color="error"
            icon="close"
            name={item[0]}
            description={item[1]}
            value="Editar"
          />
        ))}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Detalles;
