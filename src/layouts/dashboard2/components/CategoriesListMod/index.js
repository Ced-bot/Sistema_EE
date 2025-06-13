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
import React, { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import { message } from "antd";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

import Collapse from "@mui/material/Collapse"; 

// Recoil
import { useRecoilState} from 'recoil';
import { datosRes,datosEnvolvente, valsEditar, capasElemento } from 'layouts/dashboard2/components/Recoil';

function CategoriesListMod({ title, Elementos, setEstadoElementos, setDatosEnvolventeR }) {
  // RECOIL
  const [resultados, setResultados] = useRecoilState(datosRes);
  const [datosEnv, setdatosEnv] = useRecoilState(datosEnvolvente);
  const [valsEditarR, setValsEditarR] = useRecoilState(valsEditar);
  const [capasElementoR, setCapasElemento] = useRecoilState(capasElemento);
  //////////////////////////////////////////////////////////////////////
  const eliminarElemento = (id) => {
    setEstadoElementos(Elementos.filter(Elemento => Elemento.id !== id));
    setDatosEnvolventeR(Elementos.filter(Elemento => Elemento.id !== id));
  }
  const modificarElemento = (id) => {
    const elementoMmd = Elementos.find(item => item.id === id);
    if(elementoMmd){
      const capasEl = elementoMmd.capas;
      setValsEditarR({
        anchura: elementoMmd.anchura,
        longitud: elementoMmd.longitud,
        transmitancia: elementoMmd.transmitancia,
        name: elementoMmd.name
      });
      setCapasElemento(capasEl);
    }
  }
  const procesarDatos = () => {
    try {
      const loadingMsg = message.loading("Procesando datos...", 0); // Muestra el mensaje de carga
  
      console.log("Los datos se enviaron", Elementos);
      axios
        .post(
          "https://c370x9jte2.execute-api.sa-east-1.amazonaws.com/ejecucion/EvaluacionNormaEM110",
          { Cerramientos: Elementos }
        )
        .then((response) => {
          console.log("Los datos se procesaron");
          console.log(response.data);
          setResultados(response.data);
          setdatosEnv(Elementos);
  
          loadingMsg(); // Cierra el mensaje de carga
          message.success("Datos procesados exitosamente"); // Muestra éxito
        })
        .catch((error) => {
          loadingMsg(); // Cierra el mensaje de carga
          message.error("Error al procesar los datos"); // Muestra error
          console.error("Hubo un error al enviar los datos a Lambda:", error);
        });
    } catch (error) {
      console.error(error);
    }
  };
  // ===================================================================== // ====================================================== //
  // Renderizado de elementos de la envolvente
  const [openId, setOpenId] = useState(null);
  const handleToggle = (id) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const renderItems = Elementos.map(({ id, color, icon, name, area, transmitancia, capas }, key) => {
    const handleClick = (e) => {
      if (
        e.target.closest("button") ||
        e.target.closest("svg")
      ) {
        return;
      }
      handleToggle(id);
    };

    return (
      <ArgonBox
        key={id}
        component="li"
        display="flex"
        flexDirection="column"
        borderRadius="lg"
        py={1}
        pr={2}
        mb={Elementos.length - 1 === key ? 0 : 1}
        onClick={handleClick}
        style={{
          cursor: "pointer",
          width: "100%",
          maxWidth: "600px"
        }}
      >
        <ArgonBox display="flex" justifyContent="space-between" alignItems="center">
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
              <Icon sx={{ display: "grid", placeItems: "center" }}>
                <i className={icon} style={{ fontSize: "12px" }} />
              </Icon>
            </ArgonBox>
            <ArgonBox display="flex" flexDirection="column">
              <ArgonTypography variant="button" color={color} fontWeight="medium" gutterBottom>
                {name}
              </ArgonTypography>
              <ArgonTypography variant="caption" color="text">
                Area {area} m²,{" "}
                <ArgonTypography variant="caption" color="text" fontWeight="medium">
                  Transmitancia {transmitancia} W/m²K
                </ArgonTypography>
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
          <ArgonBox display="flex">
            <ArgonButton
              variant="text"
              color="dark"
              onClick={(e) => {
                e.stopPropagation();
                // Acción editar
                modificarElemento(id);
              }}
            >
              <Icon>edit</Icon>&nbsp;Edit.
            </ArgonButton>
            <ArgonButton
              variant="text"
              color="error"
              onClick={(e) => {
                e.stopPropagation();
                eliminarElemento(id);
              }}
            >
              <Icon>delete</Icon>&nbsp;Elim.
            </ArgonButton>
          </ArgonBox>
        </ArgonBox>

        {capas && capas.length > 0 && (
          <Collapse in={openId === id} timeout="auto" unmountOnExit>
            <ArgonBox mt={1} mb={1}>
              {capas.map((capa, idx) => (
                <ArgonBox key={`${id}-capa-${idx}`} mb={0.5}>
                  <ArgonTypography variant="caption" color="primary" fontWeight="bold" mb={0.5}>
                    {capa.nombre} (Largo: {capa.anchura} m, Alto: {capa.longitud} m)
                  </ArgonTypography>
                  {capa.elementos.map((elemento, jdx) => (
                    <ArgonBox
                      key={`${id}-capa-${idx}-elemento-${jdx}`}
                      display="flex"
                      flexDirection="column"
                      py={0.25}
                      px={1}
                      ml={2}
                    >
                      <ArgonBox display="flex" alignItems="center">
                        <ArgonTypography variant="caption" color="text" fontWeight="bold" mr={0.5}>
                          {elemento.name}
                        </ArgonTypography>
                        <ArgonTypography variant="caption" color="text">
                          Resistencia {elemento.resistencia} m²K/W, Espesor {elemento.espesor} m
                        </ArgonTypography>
                      </ArgonBox>
                    </ArgonBox>
                  ))}
                </ArgonBox>
              ))}
            </ArgonBox>
          </Collapse>
        )}
      </ArgonBox>
    );
  });

// Contenedor padre para centrar la lista
<ArgonBox
  component="ul"
  display="flex"
  flexDirection="column"
  alignItems="center"
  style={{ listStyle: "none", padding: 0, margin: 0 }}
>
  {renderItems}
</ArgonBox>


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
  setEstadoElementos: PropTypes.func,
  setDatosEnvolventeR: PropTypes.func
};

export default CategoriesListMod;
