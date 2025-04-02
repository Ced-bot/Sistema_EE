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

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";


import ArgonInput from "components/ArgonInput";
import Localizacion from "layouts/dashboard/components/ComboDireccion";
import { TextField } from '@mui/material';

// Recoil
import { useRecoilValue, useRecoilState} from 'recoil';
import { direccionVivienda, valoresDatosGenerales } from '../../dashboard2/components/Recoil';

function DatosGenericos({ title, description}) {
  const ubicacionVivienda = useRecoilValue(direccionVivienda);
  const [valoresDatosGeneralesR, setValoresDatosGenerales] = useRecoilState(valoresDatosGenerales);
  // Datos generales
  const [nombre, setNombre] = useState(valoresDatosGeneralesR["Nombre de proyecto"]);
  const handleChangeNombre = (event) => {
    setNombre(event.target.value); 
  };
  const [tipoVivienda, setTipoVivienda] = useState(valoresDatosGeneralesR["Tipo de vivienda"]);
  const handleChangeTipoVivienda = (event) => {
    setTipoVivienda(event.target.value); 
  };
  const [dirReferencia, setDirReferencia] = useState(valoresDatosGeneralesR["Dirección o Dirección de referencia"]);
  const handleChangeDirReferencia = (event) => {
    setDirReferencia(event.target.value); 
  };
  const [alturaMar, setAlturaMar] = useState(valoresDatosGeneralesR["Altura sobre el nivel del mar (m)"]);
  const handleChangeAlturaMar = (event) => {
    setAlturaMar(event.target.value); 
  };

  //console.log(valoresDatosGeneralesR)
  // Editar los valores en recoil
  useEffect(() => {
    /* setValoresDatosGenerales((prev) => ({
      ...prev,
      nombreProyecto: nombre,
      tipoVivienda: tipoVivienda,
      dirReferencia: dirReferencia,
      altura: alturaMar,
    })); */
  }, [nombre, tipoVivienda, dirReferencia, alturaMar]);
  useEffect(() => {
    setDirReferencia(("direccion" in ubicacionVivienda && ubicacionVivienda["direccion"] !== "")? ubicacionVivienda["direccion"]:"Escriba aquí..."); 
    setAlturaMar(("altitud" in ubicacionVivienda && ubicacionVivienda["altitud"] !== 0)?ubicacionVivienda["altitud"]: 0); 
  }, [ubicacionVivienda]);


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
          <ArgonInput placeholder="Escriba aquí..."  value={nombre}  onChange={handleChangeNombre} />
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
          <ArgonInput placeholder="Escriba aquí..."  value={tipoVivienda}  onChange={handleChangeTipoVivienda} />
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
          <Localizacion  ubicacionVivienda = {ubicacionVivienda}/>
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
          <ArgonInput onChange={handleChangeDirReferencia} value={dirReferencia}/>
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
          <TextField onChange={handleChangeAlturaMar} value={alturaMar} type="number" />
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
