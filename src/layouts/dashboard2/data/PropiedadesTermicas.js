import React, { useState, useEffect  } from 'react';
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";
import { Box, Tabs, Tab, Card, Grid, Typography, TextField } from '@mui/material';

// Argon Dashboard 2 MUI base styles
import breakpoints from "assets/theme/base/breakpoints";
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ArgonButton from "components/ArgonButton";
import { Select, Space, message, Modal } from 'antd';
import axios from 'axios';
// Recoil
import { useRecoilState, useRecoilValue} from 'recoil';
import { datosMateriales,loadingMats, activarCapas} from 'layouts/dashboard2/components/Recoil';


const PropiedadesTermicas = ({agregarTransmitancia, limpiarTransmitancias}) => {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const [espesor, setEspesor] = useState('');
  const [nombreMat, setNombreMat] = useState('');

  // Recoil
  const [loadMats, setLoadMats] = useRecoilState(loadingMats);
  const activarCapasR = useRecoilValue(activarCapas);

  const [dataMats, setDataMats] = useState([]);
  const [dataSelect1, setDataSelect1] = useState([]);
  const [dataSelect2, setDataSelect2] = useState(["Materiales"]);
  const [strSelect2, setStrSelect2] = useState(["Materiales"]);

  const [opcionDet, setOpcionDet] = useState(1);
  const [dataMaterial, setDataMaterial] = useState({"calor_esp":"--", "densidad":"--", "conductividad":"--"});

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

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);
  
  /////////////////////////////////////////////////////////////
  // Listar todos los datos de los materiales de construccion de la BD
  useEffect(() => {
    if(!loadMats){
      // Tu código para activar un evento cuando el componente se carga
      try {
        axios.get('https://zwgysz1a6h.execute-api.sa-east-1.amazonaws.com/default/LeerMaterialesConst')
        .then((response) => {
          // La respuesta de la función Lambda se guarda en el estado 'data'
          //setData(response.data);
          console.log(response.data);
          setDataMats(response.data.data)
          setDataSelect1([...new Set(response.data.data.map(item => item.grupo.S))].sort());
          setLoadMats(true);
        })
        .catch((error) => {
          console.error("Hubo un error en la lectura de los datos:", error);
        });
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const handleChangeSelect1 = (value) => {
    // Extraer los materiales de un grupo
    setDataSelect2(dataMats.filter(item => item.grupo.S === value).map(item => ({ id: item.material_id.S, nombre: item.nombre.S })));
    setStrSelect2("Materiales");
  };
  const handleChangeSelect2 = (value) => {
    setStrSelect2(value);
    // Extraer las caracteristicas termicas del material
    const detalles = dataMats.find(item => item.material_id.S === value);
    if ('transmitancia' in detalles) {
      setOpcionDet(2);
      setNombreMat([detalles.transmitancia.S, detalles.nombre.S]);
      setDataMaterial({"transmitancia": detalles.transmitancia.S });
    }
    else{
      setOpcionDet(1);
      setNombreMat([-1, detalles.nombre.S]);
      setDataMaterial({"calor_esp": detalles.calor_especifico.S, "densidad":detalles.densidad.S, "conductividad":detalles.conductividad.S});
    }
    
  };
   // Actualiza el espesor
  const handleChangeEspesor = (event) => {
    setEspesor(event.target.value);
  };
  //============================================================ Bloques =====================================================================
  const Detalles1 = () => (
    < >
      <Grid container alignItems="center" justifyContent="center"  spacing={4} >
        <Box mb={5.5} ml={4}>
        <Grid item>
          <Grid container alignItems="center" justifyContent="center"  spacing={13.1}>
              <Grid item> <Typography variant="h6">Espesor (m):</Typography> </Grid>
              <Grid item> 
                <TextField value={espesor} variant="outlined" type="number"  style={{ width: 100 }} onChange={handleChangeEspesor} inputProps={{ min: "0", style: { textAlign: "center"}}}/> 
              </Grid>
          </Grid>
        </Grid>
        </Box>
      </Grid>
      <Grid container alignItems="center" justifyContent="center"  spacing={4}>
        <Box mb={5.5} ml={4}>
        <Grid item>
          <Grid container alignItems="center" justifyContent="center"  spacing={1}>
              <Grid item> <Typography variant="h6">Calor específico ĉ (J/kgK):</Typography> </Grid>
              <Grid item> <TextField value={dataMaterial.calor_esp} variant="outlined" style={{ width: 100 }} inputProps={{ style: { marginLeft:'-13px',textAlign: "center" }}} disabled/> </Grid>
          </Grid>
        </Grid>
        </Box>
      </Grid>
      <Grid container alignItems="center" justifyContent="center"  spacing={4} >
        <Box mb={5.5} ml={4}>
        <Grid item>
          <Grid container alignItems="center" justifyContent="center"  spacing={5.6}>
              <Grid item> <Typography variant="h6">Densidad ρ (kg/m3):</Typography> </Grid>
              <Grid item> <TextField value={dataMaterial.densidad} variant="outlined" style={{ width: 100 }} inputProps={{ style: {marginLeft:'-13px',textAlign: "center"}}} disabled/> </Grid>
          </Grid>
        </Grid>
        </Box>
      </Grid>
      <Grid container alignItems="center" justifyContent="center"  spacing={4} >
        <Box mb={2} ml={4}>
        <Grid item>
          <Grid container alignItems="center" justifyContent="center"  spacing={1.1}>
              <Grid item> <Typography variant="h6">Conductividad λ (W/mK):</Typography> </Grid>
              <Grid item> <TextField value={dataMaterial.conductividad} variant="outlined" style={{ width: 100 }} inputProps={{ style: { marginLeft:'-13px',textAlign: "center"}}} disabled/> </Grid>
          </Grid>
        </Grid>
        </Box>
      </Grid>
    </>
  );
  const Detalles2 = () => (
    < >
      <Grid container alignItems="center" justifyContent="center"  spacing={4} >
        <Box mb={2} ml={4}>
        <Grid item>
          <Grid container alignItems="center" justifyContent="center"  spacing={1.1}>
              <Grid item> <Typography variant="h6">Transmitancia U (W/m²K):</Typography> </Grid>
              <Grid item> <TextField value={dataMaterial.transmitancia} variant="outlined" style={{ width: 100 }} inputProps={{ style: { marginLeft:'-13px',textAlign: "center"}}} disabled/> </Grid>
          </Grid>
        </Grid>
        </Box>
      </Grid>
    </>
  );

  //========================================================================================================================================
  // Agregar propiedades termicas a la izquierda
  const argregarPropiedades = () => {
    let trans = null;
    if (nombreMat[0] === -1){
      trans = 1/ (espesor /  parseFloat(dataMaterial.conductividad));
    }
    else{
      trans = parseFloat(nombreMat[0]);
    }
    if (!isNaN(trans) && typeof trans === 'number'  && Number.isFinite(trans)) {
      //console.log(trans, typeof trans)
      agregarTransmitancia({name: nombreMat[1], transmitancia:trans.toFixed(4), espesor: espesor });
    }
    else{
      message.error(`Valor no valido.`);
    }
  }
  // Modal si o no
  const handleConfirm = () => {
    Modal.confirm({
      title: "¿Estás seguro?",
      content: "Esta acción quitara los materiales seleccionados.",
      okText: "Sí",
      cancelText: "No",
      centered: true, // Asegura que el modal esté centrado
      onOk: () => {
        limpiarTransmitancias(); // Resetea los datos (puedes cambiar esto según lo que necesites)
      },
    });
  };
  // Setting default values for the props 
  // Typechecking props for the CategoriesList
  PropiedadesTermicas.propTypes = {agregarTransmitancia: PropTypes.func};
  PropiedadesTermicas.propTypes = {limpiarTransmitancias: PropTypes.func};
  return (
    <div>
      <Card>
        <Box sx={{ pointerEvents: activarCapasR ? "auto" : "none", opacity: activarCapasR ? 1 : 0.5 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}> 
            </Grid>
            <Grid item xs={9} md={2} lg={16} sx={{ ml: "auto" }}>
              {/* <Grid container alignItems="center" justifyContent="center"  spacing={2} style={{ marginBottom: '10px' }}>
                <Grid item> <Typography variant="h5">Libreria de cerramientos </Typography> </Grid>
              </Grid> */}
              <Grid container alignItems="center" justifyContent="center"  spacing={2}  style={{ marginBottom: '0px' }}>
                <Grid item> <Typography variant="h6">Grupo de materiales: </Typography> </Grid>
              </Grid>
              <Grid container alignItems="center" justifyContent="center"  spacing={2} style={{ marginBottom: '10px' }}>
                <Grid item> 
                  <Space wrap>
                    <Select
                      defaultValue = "GRUPOS"
                      style={{  width: 280, }}
                      onChange={handleChangeSelect1}
                      options={dataSelect1.map(grupo => ({ value: grupo, label: grupo  }))}
                    />
                  </Space>
                </Grid>
              </Grid>
              <Grid container alignItems="center" justifyContent="center"  spacing={13.6} style={{ marginBottom: '0px' }}>
                <Grid item> <Typography variant="h6">Material: </Typography> </Grid>
              </Grid>
              <Grid container alignItems="center" justifyContent="center"  spacing={13.6} style={{ marginBottom: '50px' }}>
                <Grid item> 
                  <Space wrap>
                    <Select
                      defaultValue = {strSelect2}
                      style={{  width: 280, }}
                      onChange={handleChangeSelect2}
                      value={strSelect2}
                      options= {dataSelect2.map(item => ({ value: item.id, label: item.nombre  }))}
                    />
                  </Space>
                </Grid>
              </Grid>

              {opcionDet === 1 && Detalles1()}
              {opcionDet === 2 && <Detalles2 />}   
              
            </Grid>
            <Grid container alignItems="center" justifyContent="center"  spacing={3}>
                <Grid item> <ArgonButton variant="gradient" color="warning" onClick={handleConfirm}> Limpiar&nbsp; <CleaningServicesIcon fontSize="large" /></ArgonButton> </Grid> 
                <Grid item> <ArgonButton variant="gradient" color="info" onClick={argregarPropiedades}> Agregar&nbsp; <ArrowForwardSharpIcon fontSize="large" /></ArgonButton> </Grid> 
            </Grid>

            <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}> 
            </Grid>

          </Grid>
        </Box>
      </Card>
    </div>
  );
};

export default PropiedadesTermicas;