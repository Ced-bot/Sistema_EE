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

// @mui material components
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";


import ArgonInput from "components/ArgonInput";
import Localizacion from "layouts/dashboard/components/ComboDireccion";
import { TextField } from '@mui/material';

function DatosGenericos({ title, description}) {
  const renderChart = (
    <ArgonBox p={2}>
      {/* Nombre del proyecto */}
      <ArgonBox px={description ? 1 : 0} pt={description ? 1 : 0}>
        {title[0] && (
          <ArgonBox mb={1}>
            <ArgonTypography variant="h6">{title[0]}</ArgonTypography>
          </ArgonBox>
        )}
        <ArgonBox mb={2}>
          <ArgonInput placeholder="Escriba aquí..." />
        </ArgonBox>
      </ArgonBox>

      {/* Tipo de vivienda */}
      <ArgonBox px={description ? 1 : 0} pt={description ? 1 : 0}>
        {title[1] && (
          <ArgonBox mb={1}>
            <ArgonTypography variant="h6">{title[1]}</ArgonTypography>
          </ArgonBox>
        )}
        <ArgonBox mb={2}>
          <ArgonInput placeholder="Escriba aquí..." />
        </ArgonBox>
      </ArgonBox>
      {/* Departamentos, provincias y distritos */}
      <ArgonBox px={description ? 1 : 0} pt={description ? 1 : 0}>
        {title[2] && (
          <ArgonBox mb={1}>
            <ArgonTypography variant="h6">{title[2]}</ArgonTypography>
          </ArgonBox>
        )}
        <ArgonBox mb={2}>
          <Localizacion  />
        </ArgonBox>
      </ArgonBox>
      {/* Direccion o direccion de referencia */}
      <ArgonBox px={description ? 1 : 0} pt={description ? 1 : 0}>
        {title[3] && (
          <ArgonBox mb={1}>
            <ArgonTypography variant="h6">{title[3]}</ArgonTypography>
          </ArgonBox>
        )}
        <ArgonBox mb={2}>
          <ArgonInput placeholder="Escriba aquí..." />
        </ArgonBox>
      </ArgonBox>

      {/* Altura sobre el nivel del mar */}
      <ArgonBox px={description ? 1 : 0} pt={description ? 1 : 0}>
        {title[4] && (
          <ArgonBox mb={1}>
            <ArgonTypography variant="h6">{title[4]}</ArgonTypography>
          </ArgonBox>
        )}
        <ArgonBox mb={2}>
          <TextField label="" type="number" />
        </ArgonBox>
      </ArgonBox>
      
    </ArgonBox>
    
  );

  return <Card>{renderChart}</Card>;
}

// Setting default values for the props of GradientLineChart
DatosGenericos.defaultProps = {
  title: ["","",""],
  description: "",
};

// Typechecking props for the GradientLineChart
DatosGenericos.propTypes = {
  title: PropTypes.array,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default DatosGenericos;
