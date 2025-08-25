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
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 MUI contexts
import { useArgonController } from "context";

// Recoil
import { useRecoilState } from 'recoil';
import { resIndicador } from 'layouts/resultados/components/Recoil';

function IndicadorDemanda({ tittle,perEnvolvente,perInfiltraciones,perVentilaciones,ganInternas,ganSolares, latenteVent,perTotales,ganTotales,perGanTotales,energia,titulo,demanda }) {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  const invierno = tittle === "Estación fria";
  // Variables
  const palabra = invierno ? 'Si se cumple' :'No se cumple';
  const color = invierno ? 'green' :'red';
  // Funciones
  const handleClick = () => {
    //setRes("name");
  };
  return (
    <ArgonBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      borderRadius="lg"
      p={3}
      mb={1}
      mt={2}
      sx={({ palette: { grey, background } }) => ({
        backgroundColor: darkMode ? background.default :invierno? "#f2fbff":"#fff8f2",
      })}
    >
      <ArgonBox width="100%" display="flex" flexDirection="column"
        component={Link}
        color={"dark"}
        to={""}
        onClick={handleClick}
        sx={{
            lineHeight: 0,
            transition: "all 0.2s cubic-bezier(.34,1.61,.7,1.3)",
            p: 0.5,
            "&:hover, &:focus": {
            transform: "translateX(5px)",
            },
        }}
        >
        {/* Titulo */}
        <ArgonBox mb={1} lineHeight={0} style= {{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
          <ArgonTypography variant="body2" fontWeight="bold" >
            <span style={{ color: 'black' }}>{tittle} </span> {/* <span style={{ color: color }}>({palabra})</span> */}
          </ArgonTypography>
        </ArgonBox>
        {/* Detalles */}
        <ArgonBox mb={0} lineHeight={0} style= {{ display: 'flex', marginLeft: '15%' }}>
            <ArgonTypography variant="body2" fontWeight="bold">
                Detalles:
            </ArgonTypography>
        </ArgonBox>

        <ArgonBox mb={0} lineHeight={0} style= {{ display: 'flex', marginLeft: '20%' }}>
            <ArgonTypography variant="button" fontWeight="medium">
                {perEnvolvente}
            </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={0} lineHeight={0}  style= {{ display: 'flex', marginLeft: '20%' }}>
            <ArgonTypography variant="button" fontWeight="medium">
                {perInfiltraciones}
            </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={0} lineHeight={0}  style= {{ display: 'flex', marginLeft: '20%' }}>
            <ArgonTypography variant="button" fontWeight="medium">
                {perVentilaciones}
            </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={0} lineHeight={0}  style= {{ display: 'flex', marginLeft: '20%' }}>
            <ArgonTypography variant="button" fontWeight="medium">
                {ganInternas}
            </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={0} lineHeight={0}  style= {{ display: 'flex', marginLeft: '20%' }}>
            <ArgonTypography variant="button" fontWeight="medium">
                {ganSolares}
            </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={4} lineHeight={0}  style= {{ display: 'flex', marginLeft: '20%' }}>
            <ArgonTypography variant="button" fontWeight="medium">
                {latenteVent}
            </ArgonTypography>
        </ArgonBox>
        
        {/* Resultados */}
        <ArgonBox mb={0} lineHeight={0} style= {{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
            <ArgonTypography variant="button" fontWeight="medium">
                {perTotales}
            </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={2} lineHeight={0} style= {{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
            <ArgonTypography variant="button" fontWeight="medium">
                {ganTotales}
            </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={0} lineHeight={0} style= {{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
            <ArgonTypography variant="button" fontWeight="medium">
                {perGanTotales}
            </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={2} lineHeight={0} style= {{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
            <ArgonTypography variant="button" fontWeight="medium">
                {energia}
            </ArgonTypography>
        </ArgonBox>
        {/* Resultado final */}

        <ArgonBox mb={0} lineHeight={0} style= {{ display: 'flex', marginLeft: '20%' }} >
            <ArgonTypography variant="button" fontWeight="medium">
                {titulo}
            </ArgonTypography>
        </ArgonBox>
        <ArgonBox
            mb={0}
            lineHeight={0}
            style={{
                width: "80%",                 // 🔹 solo ocupa el 80% del ancho
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto"              // 🔹 centra el contenedor
            }}
            >
            <ArgonTypography variant="button" fontWeight="medium">
                {demanda}
            </ArgonTypography>
        </ArgonBox>


      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default values for the props of Bill
IndicadorDemanda.defaultProps = {
};

// Typechecking props for the Bill
IndicadorDemanda.propTypes = {
  tittle: PropTypes.string.isRequired,
  perEnvolvente: PropTypes.string,
  perInfiltraciones: PropTypes.string,
  perVentilaciones: PropTypes.string,
  ganInternas: PropTypes.string,
  ganSolares: PropTypes.string,
  latenteVent: PropTypes.string,
  perTotales: PropTypes.string,
  ganTotales: PropTypes.string,
  perGanTotales: PropTypes.string,
  energia: PropTypes.string,
  titulo: PropTypes.string,
  demanda: PropTypes.string,
};

export default IndicadorDemanda;
