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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

// Recoil
import { useRecoilState } from 'recoil';
import { datosRes,datosEnvolvente } from 'layouts/dashboard2/components/Recoil';

function CategoriesListMod({ title, Elementos,setEstadoElementos }) {
  // RECOIL
  const [resultados, setResultados] = useRecoilState(datosRes);
  const [datosEnv, setdatosEnv] = useRecoilState(datosEnvolvente);
  //////////////////////////////////////////////////////////////////////
  const eliminarElemento = (id) => {
    setEstadoElementos(Elementos.filter(Elemento => Elemento.id !== id));
  }
  const modificarElemento = (id) => {
    setEstadoElementos(EstadoElementos.filter(Elemento => Elemento.id !== id));
  }
  const procesarDatos = () => {
    try {
      console.log("Los datos se enviaron",Elementos);
      axios.post('https://c370x9jte2.execute-api.sa-east-1.amazonaws.com/ejecucion/EvaluacionNormaEM110', {
        Cerramientos: Elementos,
      },
      // Headers
      {})
      .then((response) => {
        // La respuesta de la función Lambda se guarda en el estado 'data'
        //setData(response.data);
        console.log("Los datos se procesaron");
        console.log(response.data);
        setResultados(response.data);
        setdatosEnv(Elementos);
      })
      .catch((error) => {
        console.error("Hubo un error al enviar los datos a Lambda:", error);
      });
    } catch (error) {
      console.error(error);
    }
  }

  const renderItems = Elementos.map(({ id, color, icon, name, area, transmitancia }, key) => (
    <ArgonBox
      key={id}
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="lg"
      py={1}
      pr={2}
      mb={Elementos.length - 1 === key ? 0 : 1}
    >
      <ArgonBox display="flex" alignItems="center">
        <ArgonBox
          display="grid"
          alignItems="center"
          justifyContent="center"
          bgColor={color}
          borderRadius="lg"
          shadow="md"
          color="white"
          width="2rem"
          height="2rem"
          mr={2}
          variant="gradient"
        >
          <Icon
            sx={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <i className={icon} style={{ fontSize: "12px" }} />
          </Icon>
        </ArgonBox>
        <ArgonBox display="flex" flexDirection="column">
          <ArgonTypography variant="button" color={color} fontWeight="medium" gutterBottom>
            {name}
          </ArgonTypography>
          <ArgonTypography variant="caption" color="text">
            Area {area} m2,{" "}
            <ArgonTypography variant="caption" color="text" fontWeight="medium">
            Transmitancia {transmitancia} W/m2K
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox display="flex">
        <ArgonButton variant="text" color="dark">
          <Icon>edit</Icon>&nbsp;Edit.
        </ArgonButton>
        <ArgonButton variant="text" color="error" onClick={() => eliminarElemento(id)}>
          <Icon>delete</Icon>&nbsp;Elim.
        </ArgonButton>
      </ArgonBox>
    </ArgonBox>
  ));

  return (
    <Card>
      <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={2} px={2}>
        <ArgonTypography variant="h6" fontWeight="medium" >
          {title}
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox p={2} style={{ minHeight: '784.75px', maxHeight: '784.75px', overflow: 'auto',marginBottom: '10px' }}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderItems}
        </ArgonBox>
      </ArgonBox>
      <div style={{display: "flex", justifyContent: "center",marginBottom: '23px'}}>
        <ArgonButton onClick={procesarDatos} style={{width: "150px"}} variant="gradient" color="info" > Procesar&nbsp; <SendIcon fontSize="large" /></ArgonButton>
      </div>
    </Card>
  );
}

// Typechecking props for the CategoriesList
CategoriesListMod.propTypes = {
  title: PropTypes.string.isRequired,
  Elementos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setEstadoElementos: PropTypes.func
};

export default CategoriesListMod;
