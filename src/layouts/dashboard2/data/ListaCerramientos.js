import React, { useState, useEffect  } from 'react';
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";
import { Box, AppBar, Tabs, Tab, Card, Grid, Typography, TextField } from '@mui/material';
import Icon from "@mui/material/Icon";
// Argon Dashboard 2 MUI base styles
import breakpoints from "assets/theme/base/breakpoints";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import ArgonButton from "components/ArgonButton";
import { Select, Space } from 'antd';
import { Modal, Input, Form } from "antd";

// Recoil
import { useRecoilState, useRecoilValue} from 'recoil';
import { transmCerramiento, activarCapas, capasElemento} from 'layouts/dashboard2/components/Recoil';

// Colores predefinidos para cada capa
const colors = [
  "rgba(252, 150, 150, 0.8)", // Gris claro
  "rgba(248, 192, 127, 0.8)", // Naranja pastel
  "rgba(199, 199, 98, 0.8)", // Amarillo pastel
  "rgba(248, 123, 136, 0.8)", // Rosa pastel
  "rgba(250, 97, 171, 0.8)", // Rosa claro
  "rgba(145, 118, 250, 0.8)", // Morado pastel
  "rgba(98, 247, 130, 0.8)", // Verde pastel
  "rgba(92, 178, 243, 0.8)", // Azul pastel
  "rgba(145, 118, 250, 0.8)", // Morado pastel
];

const ListaCerramientos = ({elementosEnvol}) => {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const [totalEspesor, setTotalEspesor] = useState(0);
  const [totalResitencia, setTotalResitencia] = useState(0);

  // Recoil
  const [transmitanciaVal, setTransmitanciaVal] = useRecoilState(transmCerramiento);
  const [capasElementoR, setCapasElementoR] = useRecoilState(capasElemento);
  const activarCapasR = useRecoilValue(activarCapas);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  // Eventos cuando se agregan nuevos elementos
  useEffect(() => {
    // Calcular el total de espesor
    const totEsp = elementosEnvol.reduce((sum, item) => sum + Number(item.espesor), 0);
    //console.log("RATATA 2", elementosEnvol, totEsp)
    setTotalEspesor(totEsp);
     
    // Convertir valores a números y calcular R_total
    const R_total = elementosEnvol.reduce((sum, capa) => {
      //return sum + (Number(capa.espesor) / parseFloat(capa.transmitancia));
      return sum + parseFloat(capa.resistencia);
    }, 0);
    setTotalResitencia((R_total > 0 ? 1 / R_total : 0).toFixed(4))
    setTransmitanciaVal((R_total > 0 ? 1 / R_total : 0).toFixed(4))
  }, [elementosEnvol]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  // =============================================== // =================================================== //
  // Estado para el modal y los valores del formulario
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [inputAnchura, setInputAnchura] = useState(0);
  const [inputLongitud, setInputLongitud] = useState(0);
  const [nombre, setNombre] = useState("");
  // Enventos de cambio de los textfields
  const handleAnchuraChange = (event) => {
    setInputAnchura(event.target.value);
  };
  const handleLongitudChange = (event) => {
    setInputLongitud(event.target.value);
  };
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };
  // Abre el modal
  const openModal = () => setIsModalOpen(true);
  // Cierra el modal
  const closeModal = () => setIsModalOpen(false);
  // Maneja el OK
  const handleOk = () => {
    // Agregar la lista de capas
    // elementosEnvol -- Es un arreglo de diccionarios
    const novoElem = {
      "nombre": nombre,
      "anchura": inputAnchura,
      "longitud": inputLongitud,
      "elementos": elementosEnvol
    };
    setCapasElementoR((prev) => [...prev, novoElem]);

    // Cierra el modal
    setIsModalOpen(false);
    setInputAnchura(0);
    setInputLongitud(0);
    setNombre("");

  };


  const renderItems = elementosEnvol.map(({ id, name, transmitancia, resistencia }, key) => (
    <ArgonBox
      key={id}
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="lg"
      py={0.5} 
      pr={1}   
      mb={0}   
    >
      <ArgonBox display="flex" alignItems="center">
        <ArgonBox display="flex" flexDirection="column">
          <ArgonTypography variant="button" color="dark" fontWeight="medium" gutterBottom sx={{ fontSize: '0.75rem' }}>
            {`C${key + 1}: ${name}`} {/* Reduce el tamaño de fuente */}
          </ArgonTypography>
          {/* <ArgonTypography variant="caption" color="dark" sx={{ fontSize: '0.75rem' }}>
            Transmitancia {transmitancia} W/m²K 
          </ArgonTypography> */}
          <ArgonTypography variant="caption" color="dark" sx={{ fontSize: '0.75rem' }}>
            Resistencia {resistencia} m²K/W {/* Reduce el tamaño de fuente */}
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
      <ArgonBox display="flex">
        <ArgonButton variant="text" color="dark" sx={{ fontSize: '0.85rem', minWidth: 'auto', padding: 0 }}>
          <Icon sx={{ fontSize: '1rem' }}>edit</Icon>&nbsp;Edit.
        </ArgonButton>
        <ArgonButton variant="text" color="error" onClick={() => eliminarElemento(id)} sx={{ fontSize: '0.85rem', minWidth: 'auto', padding: 0 }}>
          <Icon sx={{ fontSize: '1rem' }}>delete</Icon>&nbsp;Elim.
        </ArgonButton>
      </ArgonBox>
    </ArgonBox>
  ));
    


  // Setting default values for the props 
  ListaCerramientos.defaultProps = {elementosEnvol:[]};
  // Typechecking props for the CategoriesList
  ListaCerramientos.propTypes = { elementosEnvol: PropTypes.array};
  return (
    <Box sx={{ pointerEvents: activarCapasR ? "auto" : "none", opacity: activarCapasR ? 1 : 0.5 }}>
      <Grid container spacing={2}  sx={{ height: '274vh' }}>
        <Grid item lg={14} sx={{ ml: 'auto', flexGrow: 1, height: '23%', maxHeight: '23%', overflowY: 'auto' }}>
          <Card sx={{ height: '100%' }}> {/* Aseguramos que el Card ocupe el 100% de la altura */}
            <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={2} px={2}>
              <ArgonTypography variant="h5" fontWeight="medium">
                Lista de capas
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox p={2} sx={{ height: '350%', overflow: 'auto', marginBottom: '10px' }}>
              <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                {renderItems} {/* Aquí estarían tus ítems que se van a renderizar */}
              </ArgonBox>
            </ArgonBox>
            {/* <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={2} px={2}>
                <ArgonTypography variant="h5" fontWeight="medium" >
                  Capas
                </ArgonTypography>
            </ArgonBox> */}
              
              
            <ArgonBox display="flex" justifyContent="center" alignItems="center" height="100%">
              <ArgonBox display="flex" width="80%" height="80px">
                {elementosEnvol.map((item, index) => (
                  <ArgonBox
                    key={index}
                    width={`${(item.espesor / totalEspesor) * 100}%`} // Proporcional al espesor
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    style={{
                      backgroundColor: colors[index % colors.length], // Colores cíclicos
                      color: "white", // Texto blanco para contraste
                      fontWeight: "bold",
                      border: "1px solid rgba(0,0,0,0.2)", // Línea divisoria suave
                    }}
                  >
                    <ArgonTypography variant="caption" sx={{ fontSize: "0.75rem" }}>
                      {`C${index + 1}: ${item.espesor} m`} {/* Mostrar el espesor */}
                    </ArgonTypography>
                  </ArgonBox>
                ))}
              </ArgonBox>
            </ArgonBox>

              {/* <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={2} px={2}>
                <ArgonTypography variant="caption" color="dark" sx={{ fontSize: '0.75rem' }}>
                  {`U = 1 / R(total), donde R(total) = Σ ( e(i) / λ(i))`}
                </ArgonTypography>
              </ArgonBox> */}
              <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={2} px={2}>
                <ArgonTypography variant="caption" color="dark" sx={{ fontSize: '0.75rem' }}>
                  Transmitancia Total: {totalResitencia} W/m²K
                </ArgonTypography>
              </ArgonBox>
              <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={2} px={2}>
                <Grid container alignItems="center" justifyContent="center"  spacing={3}>
                    <Grid item> <ArgonButton variant="gradient" color="info" onClick={openModal}> Agregar composición </ArgonButton> </Grid> 
                </Grid>
                <Modal
                  title={
                    <Typography variant="h5" align="center" fontWeight="bold">
                      Dimensiones del elemento
                    </Typography>
                  }
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={closeModal}
                  centered
                  zIndex={1500} // Modal al frente de todo
                  footer={[
                    <ArgonButton
                      key="cancelar"
                      color="dark"
                      variant="gradient"
                      onClick={closeModal}
                    >
                      Cancelar
                    </ArgonButton>,
                    <ArgonButton
                      key="agregar"
                      color="info"
                      variant="gradient"
                      onClick={handleOk}
                      sx={{ ml: 1 }} // Separación entre botones
                    >
                      Agregar
                    </ArgonButton>,
                  ]}
                >
                  <Grid container direction="column" spacing={2} alignItems="center">
                    
                    {/* Fila 3: Nombre */}
                    <Grid item>
                      <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item>
                          <Typography variant="h6">
                            Nombre:
                          </Typography>
                        </Grid>
                        <Grid item>
                          <TextField
                            value={nombre} 
                            onChange={handleNombreChange}
                            variant="outlined"
                            size="small"
                            style={{ width: 150 }}
                            inputProps={{ style: {marginLeft:'-13px', textAlign: "center"}}} // Texto alineado a la izquierda
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    {/* Fila 1: Anchura */}
                    <Grid item>
                      <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item>
                          <Typography variant="h6">
                            Largo (m):
                          </Typography>
                        </Grid>
                        <Grid item>
                          <TextField
                            value={inputAnchura} 
                            onChange={handleAnchuraChange}
                            variant="outlined"
                            type="number"
                            size="small"
                            style={{ width: 100, textAlign: "center" }}
                            inputProps={{ min: "1", style: { textAlign: "center" } }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    {/* Fila 2: Longitud */}
                    <Grid item>
                      <Grid container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item>
                          <Typography variant="h6">
                            Alto (m):
                          </Typography>
                        </Grid>
                        <Grid item>
                          <TextField
                            value={inputLongitud} 
                            onChange={handleLongitudChange}
                            variant="outlined"
                            type="number"
                            size="small"
                            style={{ width: 100, textAlign: "center" }}
                            inputProps={{ min: "1", style: { textAlign: "center" } }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                  </Grid>
                </Modal>
              </ArgonBox>
              <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={2} px={2}>
              </ArgonBox>
            {/* <ArgonBox p={2} style={{ minHeight: '400.75px', maxHeight: '400.75px', overflow: 'auto' }}>
                <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                
                </ArgonBox>
            </ArgonBox> */}
          </Card> 
        </Grid>
      </Grid>
    </Box>
  );
};

export default ListaCerramientos;