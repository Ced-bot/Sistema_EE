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
  // Generar la lista de los valores que se deben mostrar
  let newArray;
  if (indicador === "Transmitancia térmica máxima") {
    newArray = Array(1).fill(1);
  } else if (indicador === "Infiltraciones") {
    let arrCumplen = []
    let arrNoCumplen = []
    resultados["resultadosInfiltraciones"][0].forEach(dictionary => {
      for (const key in dictionary) {
        if (dictionary[key] === "Si cumple") {
          arrCumplen.push(datosEnv["inf"][key]) //////////////////
        }
      }
    });
    let arrPuertas = resultados["resultadosInfiltraciones"][1].every(element =>  Object.values(element)[0] === "Si cumple");
    newArray = Array(2).fill(2);

  } else if (indicador === "Condensación") {
    newArray = Array(2).fill(3);
  } else if (indicador === "Incidencias") {
    newArray = Array(2).fill(4);
  } else {
    newArray = []; // Valor por defecto si ASD no es igual a "ss2" ni "ss5"
  }

  // Resultados de la TTM
  
  //console.log("ssd");
  //console.log(datosEnv);
  return (
    <Card sx={{ height: "100%" }}>
      <ArgonBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Detalles
        </ArgonTypography>
        <ArgonBox display="flex" alignItems="flex-start">
          <ArgonBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </ArgonBox>
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            23 - 30 March 2020
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
          {newArray.map((item, index) => (
              <Transaction
              key={index}
              color="error"
              icon="arrow_downward"
              name={item}
              description="27 March 2020, at 12:30 PM"
              value="- $ 2,500"
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
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Stripe"
            description="26 March 2020, at 13:45 PM"
            value="+ $ 750"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="HubSpot"
            description="26 March 2020, at 12:30 PM"
            value="+ $ 1,000"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Creative Tim"
            description="26 March 2020, at 08:30 AM"
            value="+ $ 2,500"
          />
          <Transaction
            color="dark"
            icon="priority_high"
            name="Webflow"
            description="26 March 2020, at 05:00 AM"
            value="Pending"
          />
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Detalles;
