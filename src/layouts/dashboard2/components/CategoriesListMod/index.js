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
import { useNavigate } from "react-router-dom";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import { message, Tooltip } from "antd";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

import Collapse from "@mui/material/Collapse"; 

// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { datosRes,datosEnvolvente, valsEditar, capasElemento, valoresDatosExtra, datosDemanda, datosResDemandaCal, datosResDemandaRef, direccionVivienda, valoresDatosGenerales } from 'layouts/dashboard2/components/Recoil';
import { resistenciaVertical, resistenciaHorizontal, obtenerCoeficiente, buscarValorTransPiso } from '../DatosEnvolvente/Funciones/operaciones';
import { elements } from "chart.js";

function wattsToBTU(watts) {
  const factor = 3.412141633;
  return watts * factor;
}
function classifyHeating(heatingW) {
  if (heatingW >= 5000) {
    return {
      title: "Sistema fijo",
      detail:"Se recomienda un equipo de ~"+(((heatingW) * 1.1)/1000).toFixed(2).toString()+" kW (≈ "+wattsToBTU(heatingW).toFixed(2).toString()+" BTU/h) para cubrir el pico de " + (heatingW).toFixed(2).toString() +" kW con 10 % de holgura.",
      tone: "text-red-600",
    };
  } else if (heatingW >= 2000) {
    return {
      title: "Sistema fijo pequeño o respaldo",
      detail:
        "Se recomienda el sellado + aislamiento en las partes necesarias de la envolvente; ó considerar equipo fijo pequeño o portátiles como respaldo de ~"+(((heatingW) * 1.1)/1000).toFixed(2).toString()+" kW (≈ "+wattsToBTU(heatingW).toFixed(2).toString()+" BTU/h) para cubrir el pico de " + (heatingW).toFixed(2).toString() +" kW con 10 % de holgura.",
      tone: "text-amber-600",
    };
  }
  return {
    title: "Sin sistema fijo (en general)",
    detail: "Se recomienda el control pasivo: Cortavientos casero (segunda puerta o cortina gruesa en el ingreso), cerrrar ambientes no usados o dormir en cuartos mas pequeños, alfombras o esteras con espuma.",
    tone: "text-emerald-600",
  };
}
function classifyCooling(coolingW, latentShare) {
  if (coolingW >= 3000) {
    return {
      title: "Refrigeración activa recomendada",
      detail:"Se recomienda un equipo de ~"+(((coolingW) * 1.1)/1000).toFixed(2).toString()+" kW (≈ "+wattsToBTU(coolingW).toFixed(2).toString()+" BTU/h) para cubrir el pico de " + (coolingW).toFixed(2).toString() +" kW con 10 % de holgura.",
      tone: "text-sky-700",
    };
  } else if (coolingW >= 1500) {
    return {
      title: "Zona gris, a evaluar",
      detail:
        "Priorizar sombra E/W, techo aislado y ventilación nocturna; si persiste el desconfort se puede emplear un equipo de ~"+(((coolingW) * 1.1)/1000).toFixed(2).toString()+" kW (≈ "+wattsToBTU(coolingW).toFixed(2).toString()+" BTU/h) para cubrir el pico de " + (coolingW).toFixed(2).toString() +" kW con 10 % de holgura.",
      tone: "text-amber-600",
    };
  }
  // <1.5 kW
  const evapHint = latentShare < 0.1 ? " En clima seco, un evaporativo pequeño es viable." : "";
  return {
    title: "Sin sistema fijo (en general)",
    detail:"Se recomienda el control pasivo: Reducir radiación solar directa (con sombras y colores claros), favorecer ventilación cruzada y aprovechar la masa térmica de los materiales tradicionales (adobe/piedra) para estabilizar el confort." + evapHint,
    tone: "text-emerald-600",
  };
}


function CategoriesListMod({ title, Elementos, setEstadoElementos, setDatosEnvolventeR }) {
  const navigate = useNavigate();
  // RECOIL
  
  const valoresDatosGeneralesR = useRecoilValue(valoresDatosGenerales);
  const direccionViviendaR = useRecoilValue(direccionVivienda);
  const valoresDatosDemandaR = useRecoilValue(datosDemanda);
  const valoresDatosExtraR = useRecoilValue(valoresDatosExtra);
  const [resultados, setResultados] = useRecoilState(datosRes);
  const [datosEnv, setdatosEnv] = useRecoilState(datosEnvolvente);
  const [valsEditarR, setValsEditarR] = useRecoilState(valsEditar);
  const [capasElementoR, setCapasElemento] = useRecoilState(capasElemento);
  const [datosResDemandaCalR, setDatosResDemandaCalR] = useRecoilState(datosResDemandaCal);
  const [datosResDemandaRefR, setDatosResDemandaRefR] = useRecoilState(datosResDemandaRef);

  const [eliminarCapas, setEliminarCapas] = useState(false);
  //////////////////////////////////////////////////////////////////////
  const eliminarElemento = (id) => {
    setEstadoElementos(Elementos.filter(Elemento => Elemento.id !== id));
    setDatosEnvolventeR(Elementos.filter(Elemento => Elemento.id !== id));
  }
  const eliminarElementoCapa = (ids) => {
    const resultado = Elementos.map((item) => {
      if (item.id === ids[0] && Array.isArray(item.capas)) {
        return { ...item, capas: item.capas.filter((_, idx) => idx !== ids[1]) };
      }
      return item;
    });

    setEstadoElementos(resultado);
    setDatosEnvolventeR(resultado);
  }

  const modificarElemento = (id) => {
    const elementoMmd = Elementos.find(item => item.id === id);
    if(elementoMmd){
      const capasEl = elementoMmd.capas;
      setValsEditarR({
        area: elementoMmd.area,
        transmitancia: elementoMmd.transmitancia,
        name: elementoMmd.name,
        orientacion: elementoMmd.otros? elementoMmd.otros.Orientacion: "--",
        otros: elementoMmd.otros? elementoMmd.otros: {},
        familia: elementoMmd.familia,
        tipo: elementoMmd.tipo
      });
      setCapasElemento(capasEl);
      // Activar eliminacion de capas
      setEliminarCapas(true);
    }
  }
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const procesarDatos = async () => {

    let datosFinales = null;
    let nuevosDatosDemanda = {};
    if(true){

      const areaExterior = Elementos.reduce((acc, obj) => {
                                                    if (obj.capas && obj.capas.length > 0 && obj.familia === "Techo" && obj.tipo.includes("contacto con el aire")) {
                                                      const areaTot = obj.capas.reduce((acc, item) => acc + (item.anchura * item.longitud), 0);
                                                      return acc + areaTot;
                                                    }
                                                    return acc;
                                                  }, 0);
      const areaENH = Elementos.reduce((acc, obj) => {
                                                    if (obj.capas && obj.capas.length > 0 && obj.familia === "Techo" && obj.tipo.includes("contacto con ANH")) {
                                                      const areaTot = obj.capas.reduce((acc, item) => acc + (item.anchura * item.longitud), 0);
                                                      return acc + areaTot;
                                                    }
                                                    return acc;
                                                  }, 0);
      
      const nuevosElementos = Elementos.map(elem => {

        if(elem.capas && elem.capas.length > 0 || elem.familia === "Piso"){
          const areaTotal = elem.capas.reduce((acc, item) => acc + (item.anchura * item.longitud), 0);
          let transTermica = null;
          if(elem.familia === "Piso" && ("otros" in elem && "resistencia_aislante" in elem.otros && "ancho_aislante" in elem.otros)){

            const perimetro = 2*(elem.longitud + elem.anchura);
            const constB = (areaTotal === 0? elem.area : areaTotal)  / (0.5*perimetro);
            //console.log("constB, elem.otros.resistencia_aislante, elem.otros.ancho_aislante")
            //console.log(constB, elem.otros.resistencia_aislante, elem.otros.ancho_aislante)

            transTermica = buscarValorTransPiso(constB, elem.otros.resistencia_aislante, elem.otros.ancho_aislante);

          }

          if(transTermica === null){
            let minElementos = Math.min(...elem.capas.map(item => item.elementos.length));
            if (!isFinite(minElementos)) {
              minElementos = 0;
            }

            const resistenciHorizontal = resistenciaHorizontal(elem.capas, areaTotal, elem.tipo.includes("con el aire"), elem.familia);
            const resistenciVertical = resistenciaVertical(elem.capas, minElementos, elem.tipo.includes("con el aire"), elem.familia);

            let coefRedduccion = 1;
            if(elem.familia === "Techo" && elem.tipo.includes("contacto con ANH") && ("otros" in elem && "estanqueidad" in elem.otros && "aislante" in elem.otros)){
              coefRedduccion = obtenerCoeficiente(areaENH/areaExterior, elem.otros.aislante, elem.otros.estanqueidad);
              //console.log("aislanteaislanteaislanteaislante", coefRedduccion, areaENH/areaExterior, elem.otros.aislante, elem.otros.estanqueidad)
            }

            transTermica = (1*coefRedduccion / ((resistenciVertical + resistenciHorizontal) / 2));
            //console.log(elem.name)
            //console.log(resistenciVertical, resistenciHorizontal,parseFloat(transTermica), parseFloat(areaTotal))
          }
          return {
            ...elem,
            transmitancia: parseFloat(transTermica.toFixed(4)),
            area: parseFloat((areaTotal === 0? elem.area : areaTotal).toFixed(3))
          };
        }
        else{
          return {
            ...elem,
            area: parseFloat(elem.area)
          };
        }
      });

      setEstadoElementos(nuevosElementos);
      datosFinales = nuevosElementos;
      //console.log(JSON.stringify(datosFinales))
      // DATOS PARA LA DEMANDA DE CALEFACCION Y REFRIGERACION
      const envelopeHeat = {"walls":[], "roofs": [], "floors": [], "doors": []};
      const envelopeCool = {"walls":[], "roofs": [], "floors": [], "doors": []};
      for(const regs of datosFinales){
        if(regs.name.includes("Muro")){
          const hetRec = {
            "K": regs.transmitancia, 
            "A": regs.area, 
            "ori": regs.otros.Orientacion === "Sur"? "S" : regs.otros.Orientacion === "Norte"? "N" : regs.otros.Orientacion === "Oeste"? "W" : "E",
          }
          const colRec = {
            "K": regs.transmitancia, 
            "A": regs.area, 
            "ori": regs.otros.Orientacion === "Sur"? "S" : regs.otros.Orientacion === "Norte"? "N" : regs.otros.Orientacion === "Oeste"? "W" : "E",
          }
          if (regs.otros.Orientacion === "Oeste"){
            hetRec["Te_eff"] =  -2.27 + 7
            colRec["Te_eff"] =  28 + 7
          }
          else if ( regs.otros.Orientacion ==="Este"){
            hetRec["Te_eff"] = -2.27 + 5
            colRec["Te_eff"] = 28 + 5
          }
          else if ( regs.otros.Orientacion ==="Norte"){
            hetRec["Te_eff"] = -2.27 + 8
            colRec["Te_eff"] = 28 + 8
          }
          else if ( regs.otros.Orientacion ==="Sur"){
            hetRec["Te_eff"] = -2.27 + 2
            colRec["Te_eff"] = 28 + 2
          }
          envelopeHeat["walls"].push(hetRec);
          envelopeCool["walls"].push(colRec);
        }

        else if(regs.name.includes("Techo")){
          
          const hetRec = {
            "K": regs.transmitancia, 
            "A": regs.area, 
            "ori": regs.otros.Orientacion === "Sur"? "S" : regs.otros.Orientacion === "Norte"? "N" : regs.otros.Orientacion === "Oeste"? "W" : "E",
          }
          const colRec = {
            "K": regs.transmitancia, 
            "A": regs.area, 
            "ori": regs.otros.Orientacion === "Sur"? "S" : regs.otros.Orientacion === "Norte"? "N" : regs.otros.Orientacion === "Oeste"? "W" : "E",
          }
          if (regs.otros.Orientacion === "Oeste"){
            hetRec["Te_eff"] =  -2.27 + 12
            colRec["Te_eff"] =  28 + 12
          }
          else if ( regs.otros.Orientacion ==="Este"){
            hetRec["Te_eff"] = -2.27 + 10
            colRec["Te_eff"] = 28 + 10
          }
          envelopeHeat["roofs"].push(hetRec);
          envelopeCool["roofs"].push(colRec);
        }
        
        else if(regs.name.includes("Piso")){
          envelopeHeat["floors"].push({
            "K": regs.transmitancia, 
            "A": regs.area, 
            "ori": regs.otros.Orientacion === "Sur"? "S" : regs.otros.Orientacion === "Norte"? "N" : regs.otros.Orientacion === "Oeste"? "W" : "E",
            "Te_eff": 12
          });
          envelopeCool["floors"].push({
            "K": regs.transmitancia, 
            "A": regs.area, 
            "ori": regs.otros.Orientacion === "Sur"? "S" : regs.otros.Orientacion === "Norte"? "N" : regs.otros.Orientacion === "Oeste"? "W" : "E",
            "Te_eff": 12
          });
        }
      }
      nuevosDatosDemanda = {
        ...valoresDatosDemandaR,               // copia el estado actual
        cooling: {
          ...valoresDatosDemandaR.cooling,         // copia lo que hay en mmd
          envelope: envelopeCool,       // modifica solo asd
          people:{
            N: valoresDatosGeneralesR["Cantidad de personas en la vivienda"],
            Ms:valoresDatosDemandaR.cooling.people.Ms,
            Ml:valoresDatosDemandaR.cooling.people.Ml
          },
          alt_m: direccionViviendaR.altitud
        },             
        heating: {
          ...valoresDatosDemandaR.heating,         // copia lo que hay en mmd
          envelope: envelopeHeat,       // modifica solo asd
          people:{
            N: valoresDatosGeneralesR["Cantidad de personas en la vivienda"],
            Ms:valoresDatosDemandaR.heating.people.Ms,
            Ml:valoresDatosDemandaR.heating.people.Ml
          },
          alt_m: direccionViviendaR.altitud
        }
      };
      //console.log(JSON.stringify(nuevosDatosDemanda));
      /* valoresDatosDemandaR.cooling.envelope = envelopeCool;
      valoresDatosDemandaR.heating.envelope = envelopeHeat; */
      //console.log("Los datos se enviaron", nuevaVariable );
    }



    try {
      const loadingMsg = message.loading("Procesando datos...", 0);
      const [resNorma, resDemanda] = await Promise.all([
        axios.post(
          "https://c370x9jte2.execute-api.sa-east-1.amazonaws.com/ejecucion/EvaluacionNormaEM110",
          {
            Cerramientos: datosFinales,
            valoresDatosExtra: valoresDatosExtraR
          }
        ),
        axios.post(
          "https://t5ftjz71a0.execute-api.sa-east-1.amazonaws.com/default/DemandaClimatizacion",
          nuevosDatosDemanda
        )
      ]);

      /* ================= NORMA EM110 ================= */
      setResultados(resNorma.data);
      //console.log(resNorma.data)
      setdatosEnv(Elementos);

      /* ================= DEMANDA ================= */
      const data = resDemanda.data;

      if ("heating" in data && "cooling" in data) {
        const perTot =
          data.heating.Qc +
          data.heating.Qr_infil +
          data.heating.Qa;

        const ganTot =
          data.heating.Qo_sensible +
          data.heating.Qs;

        const sensTot =
          data.cooling.Qc +
          data.cooling.Qs +
          data.cooling.Qo_sensible +
          data.cooling.Qa_sensible;

        const latTot =
          data.cooling.Qo_latente +
          data.cooling.Qa_latente;

        const latentShare = data.cooling.QR_total
          ? data.cooling.QR_latente / data.cooling.QR_total
          : 0;

        const repSummHot = classifyHeating(perTot - ganTot);
        const repSummCool = classifyCooling(sensTot + latTot, latentShare);

        setDatosResDemandaCalR({
          "Pérdidas térmicas de la envolvente": `${data.heating.Qc.toFixed(2)} W`,
          "Pérdidas por infiltración": `${data.heating.Qr_infil.toFixed(2)} W`,
          "Pérdidas por ventilación": `${data.heating.Qa.toFixed(2)} W`,
          "Ganancias internas": `${data.heating.Qo_sensible.toFixed(2)} W`,
          "Ganancias solares": `${data.heating.Qs.toFixed(2)} W`,
          "Perdidas totales": `${perTot.toFixed(2)} W`,
          "Ganancias totales": `${ganTot.toFixed(2)} W`,
          "Pérdidas y ganancias térmicas para un día típico de la estación fria en W":
            `${(perTot - ganTot).toFixed(2)} W`,
          "Potencia requerida":
            `${(perTot - ganTot).toFixed(2)} W ≈ ${wattsToBTU(perTot - ganTot).toFixed(2)} BTU/h`,
          "Título": repSummHot.title,
          "Conclusión": repSummHot.detail
        });

        setDatosResDemandaRefR({
          "Carga sensible de la envolvente": `${data.cooling.Qc.toFixed(2)} W`,
          "Carga sensible del sol en ventanas": `${data.cooling.Qs.toFixed(2)} W`,
          "Carga sensible interna": `${data.cooling.Qo_sensible.toFixed(2)} W`,
          "Carga sensible por ventilación": `${data.cooling.Qa_sensible.toFixed(2)} W`,
          "Carga latente interna": `${data.cooling.Qo_latente.toFixed(2)} W`,
          "Carga latente por ventilación": `${data.cooling.Qa_latente.toFixed(2)} W`,
          "Carga sensible total": `${sensTot.toFixed(2)} W`,
          "Carga latente total": `${latTot.toFixed(2)} W`,
          "Parte sensible y latente para un día típico de la estación más calida en W":
            `${(sensTot + latTot).toFixed(2)} W`,
          "Potencia requerida":
            `${(sensTot + latTot).toFixed(2)} W ≈ ${wattsToBTU(sensTot + latTot).toFixed(2)} BTU/h`,
          "Título": repSummCool.title,
          "Conclusión": repSummCool.detail
        });
      }

      /* ================= FINAL ================= */
      loadingMsg();
      message.success("Datos procesados exitosamente");

      // 🔥 REDIRECCIÓN
      //window.open("/resultados", "_blank");
      navigate("/Resultados");
      // o: window.location.href = "/resultados";

    } catch (error) {
      loadingMsg();
      message.error("Error al procesar los datos");
      console.error("Error:", error);
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
                  <ArgonBox display="flex" alignItems="center" justifyContent="space-between" flexWrap="nowrap">
                    <ArgonTypography
                      variant="caption"
                      color="primary"
                      fontWeight="bold"
                      mb={0.5}
                      style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                    >
                      {capa.nombre} (Largo: {capa.anchura} m, Alto: {capa.longitud} m)
                    </ArgonTypography>

                    <ArgonButton
                      variant="text"
                      color="error"
                      onClick={(e) => {
                        e.stopPropagation();
                        eliminarElementoCapa([id,idx]);
                      }}
                      style={{ flexShrink: 0 }} // evita que se reduzca
                    >
                      <Icon>delete</Icon>&nbsp;Elim.
                    </ArgonButton>
                  </ArgonBox>

                  {capa.elementos.map((elemento, jdx) => (
                    <ArgonBox
                      key={`${id}-capa-${idx}-elemento-${jdx}`}
                      display="flex"
                      flexDirection="column"
                      py={0.25}
                      px={1}
                      ml={2}
                    >
                      <Tooltip title={elemento.name}>
                        <ArgonBox display="flex" alignItems="center">
                          <ArgonTypography
                            variant="caption"
                            color="text"
                            fontWeight="bold"
                            mr={0.5}
                          >
                            {elemento.name.substring(0, 2)}:
                          </ArgonTypography>
                          <ArgonTypography variant="caption" color="text">
                            Resistencia {elemento.resistencia} m²K/W, Espesor {elemento.espesor} m
                          </ArgonTypography>

                        </ArgonBox>
                      </Tooltip>
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
