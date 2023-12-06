import React, { useState, useEffect } from 'react';
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/system';
import Card from "@mui/material/Card";

import { Grid, TextField, Typography, Box} from '@mui/material';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
// Argon Dashboard 2 MUI base styles
import breakpoints from "assets/theme/base/breakpoints";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

import Select2 from "examples/Select";
import ArgonButton from "components/ArgonButton";
import ArgonTypography from "components/ArgonTypography";

import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space, Select } from 'antd';
// RECOIL
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { datosVanos } from 'layouts/dashboard2/components/Recoil';

const StyledFormControlLabel = styled(FormControlLabel)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const TwoLineLabel = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
  
export default function CaracteristicasVanos({agregarElemento,nroElementos}) {
  const Labels = ["Ventana","Puerta","Lucernario"]
  const diccionarioVanos = useRecoilValue(datosVanos);
  const resetDiccionarioVanos= useResetRecoilState(datosVanos);

  const [value, setValue] = useState('1');
  // Valores de los textfields
  const [inputPermeabilidad, setInputPermeabilidad] = useState(100);
  const [inputAbsortividad, setInputAbsortividad] = useState(0);
  const [inputNombre, setInputNombre] = useState(Labels[value-1]);
  // Volores de los Switchs 
  const [isControlSolar, setIsControlSolar] = useState(false);
  const [isDoble, setIsDoble] = useState(false);
  // Volores de los Switchs - Ventanas
  const [isProyectante, setIsProyectante] = useState(false);
  const [isHermetico, setIsHermetico] = useState(false);
  // Volores de los Switchs - Puertas
  const [isSilicona, setIsSilicona] = useState(false);
  const [isBurletes, setIsBurletes] = useState(false);
  // Volores de los Switchs - Lucernarios

  // Evento de cambio de los radioButtons
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    setInputNombre(Labels[value-1])
  }, [value]);

  const handlePermeabilidad = (event) => {
    setInputPermeabilidad(event.target.value);
  };
  const handleAbsortividad = (event) => {
    setInputAbsortividad(event.target.value);
  };

  const handleNombreChange = (event) => {
    setInputNombre(event.target.value);
  };
  // Switchs
  const handleControlSolar = (valor) => {
    setIsControlSolar(valor);
  };
  const handleDoble = (valor) => {
    setIsDoble(valor);
  };
  const handleProyectante = (valor) => {
    setIsProyectante(valor);
  };
  const handleHermetico= (valor) => {
    setIsHermetico(valor);
  };
  const handleSilicona = (valor) => {
    setIsSilicona(valor);
  };
  const handleBurletes = (valor) => {
    setIsBurletes(valor);
  };
  // =============================================================
  // Evento que se activa cuando se cambia el valor del select
  const handleChangeSelect = (value) => {
    //console.log(`selected ${value}`);
  };    
  // =============================================================
  // Función para agregar un nuevo elemento a la lista
  const NuevoElemento = () => {
    //console.log(diccionarioVanos)
    agregarElemento({
      id : nroElementos,
      color: "dark",
      icon: "ni ni-image",
      name: inputNombre,
      tipo: Labels[value-1],
      familia: "Vano",
      longitud: parseFloat(diccionarioVanos["Longitud"]),
      anchura: parseFloat(diccionarioVanos["Anchura"]),
      area: diccionarioVanos["Longitud"]*diccionarioVanos["Anchura"]*diccionarioVanos["Multiplicador"],
      transmitancia: parseFloat(diccionarioVanos["UMarco"]+diccionarioVanos["UVidrio"]), 
      otros: {
          cerramiento_asociado: diccionarioVanos["Cerramiento_asociado"],
          familia_c_a: diccionarioVanos["Cerramiento_asociado"], // SE DEBE MODIFICAR
          orientacion: diccionarioVanos["Orientacion"],
          porcentaje_marco: parseFloat(diccionarioVanos["Porcentaje_marco"]),
          factor_solar: parseFloat(diccionarioVanos["Factor_solar"]),
          multiplicador: parseFloat(diccionarioVanos["Multiplicador"]),
          u_marco: parseFloat(diccionarioVanos["UMarco"]),
          u_vidrio: parseFloat(diccionarioVanos["UVidrio"]),

          // Datos comunes
          es_control_solar:isControlSolar,
          es_doble: isDoble,
          permeabilidad: inputPermeabilidad,
          absortividad: inputAbsortividad,
          // ventas
          es_proyectante: isProyectante,
          es_hermetico: isHermetico,
          // puertas
          es_silicona: isSilicona,
          es_burletes: isBurletes,
      },

    })
    resetDiccionarioVanos();
  };
  // Elementos independientes
  const Ventanas = () => (
      <>
      <Box mb={2.4} ml={8}>
      <Grid container alignItems="center" justifyContent="left" spacing={1}>
          <Grid item> <Typography variant="h6">Ventana proyectante o de abatir:</Typography> </Grid>
          <Grid item> <Switch checked={isProyectante} onChange={handleProyectante} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
      </Grid>
      </Box>
      <Box mb={2.4} ml={8}>
      <Grid container alignItems="center" justifyContent="left"  spacing={1}>
          <Grid item> <Typography variant="h6">Cuenta con cierre hermético:</Typography> </Grid>
          <Grid item> <Switch checked={isHermetico} onChange={handleHermetico} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
      </Grid>
      </Box>
      <Box mb={2.4} ml={8}>
      <Grid container alignItems="center" justifyContent="left"  spacing={1}>
          <Grid item> <Typography variant="h6">Doble ventana:</Typography> </Grid>
          <Grid item> <Switch checked={isDoble} onChange={handleDoble} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
      </Grid>
      </Box>
      </>
  );
  const Puertas = () => (
    <>
      <Box mb={2.4} ml={8}>
      <Grid container alignItems="center" justifyContent="left" spacing={1}>
          <Grid item> <Typography variant="h6">Sellado de silicona con el vano:</Typography> </Grid>
          <Grid item> <Switch checked={isSilicona} onChange={handleSilicona} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
      </Grid>
      </Box>
      <Box mb={2.4} ml={8}>
      <Grid container alignItems="center" justifyContent="left"  spacing={1}>
          <Grid item> <Typography variant="h6">Cuenta con burletes en la base:</Typography> </Grid>
          <Grid item> <Switch checked={isBurletes} onChange={handleBurletes} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
      </Grid>
      </Box>
      <Box mb={2.4} ml={8}>
      <Grid container alignItems="center" justifyContent="left"  spacing={1}>
          <Grid item> <Typography variant="h6">Doble ventana:</Typography> </Grid>
          <Grid item> <Switch checked={isDoble} onChange={handleDoble} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
      </Grid>
      </Box>
      </>
  );
  const Lucernarios = () => (
    <>
      <Box mb={2.4} ml={8}>
      <Grid container alignItems="center" justifyContent="left"  spacing={1}>
          <Grid item> <Typography variant="h6">Doble ventana:</Typography> </Grid>
          <Grid item> <Switch checked={isDoble} onChange={handleDoble}  checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
      </Grid>
      </Box>
      </>
  );
  // Setting default values for the props 
  CaracteristicasVanos.defaultProps = {nroElementos:0};
  // Typechecking props for the CategoriesList
  CaracteristicasVanos.propTypes = {agregarElemento: PropTypes.func, nroElementos: PropTypes.number};
  return (
    <div>
      <Card> 
      <Grid container spacing={3} alignItems="center">
      <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}> 
      </Grid>
      <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid container alignItems="center" justifyContent="center"  spacing={2} style={{ marginBottom: '10px' }}>
              <Grid item > <Typography variant="h5">Caracteristicas</Typography> </Grid>
          </Grid>
          <FormControl style={{ marginBottom: '10px' }}>
          <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
          <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              defaultValue="1"
              name="position"
              value={value}
              onChange={handleChange}
          >
              <StyledFormControlLabel style={{ marginLeft: '50px' }} value="1" control={<Radio />} label={
                  <span style={{ marginRight: '20px' }}>Ventanas</span>
              } labelPlacement="start" />
              <StyledFormControlLabel value="2" control={<Radio />} label={
                  <span style={{ marginRight: '20px' }}>Puertas</span>
              } labelPlacement="start" />
              <StyledFormControlLabel value="3" control={<Radio />} label={
                  <span style={{ marginRight: '20px' }}>Lucernarios</span>
              } labelPlacement="start" />
          </RadioGroup>
          </FormControl>
          
          <Grid container spacing={12} alignItems="center">
              <Grid item xs={6}>
                <Box mb={2} ml={8}>
                <Grid container alignItems="center" justifyContent="left" spacing={1}>
                    <Grid item> <Typography variant="h6">Elemento de control solar:</Typography> </Grid>
                    <Grid item> <Switch checked={isControlSolar} onChange={handleControlSolar} checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
                    <Grid item> <ArgonButton variant="gradient" color="light" size="small" onClick={() => {}}>Elemento</ArgonButton> </Grid> 
                </Grid>
                </Box>
                <Box mb={2} ml={8}>
                <Grid container alignItems="center" justifyContent="left"  spacing={1}>
                    <Grid item> <Typography variant="h6">Permeabilidad:</Typography> </Grid>
                    <Grid item> <Space wrap> 
                      <Select style={{  width: 130, }} onChange={handleChangeSelect} options={[
                        { value: 1, label: 'Poco estanco',}, 
                        { value: 2, label: 'Estanto',},
                        { value: 3, label: 'Valor conocido',}]} />  
                      </Space>  
                    </Grid> 
                    <Grid item> <TextField value={inputPermeabilidad} onChange={handlePermeabilidad} variant="outlined" type="number" style={{ width: 100 }} inputProps={{ min: "0",  style: { textAlign: "center"}}} /> </Grid>
                </Grid>
                </Box>
                <Box mb={2} ml={8}>
                <Grid container alignItems="center" justifyContent="left"  spacing={1}>
                    <Grid item> <Typography variant="h6">Absortividad del marco:</Typography> </Grid>
                    <Grid item> <ArgonButton variant="gradient" color="light" size="small" onClick={() => {}}>α</ArgonButton> </Grid> 
                    <Grid item> <TextField value={inputAbsortividad} onChange={handleAbsortividad}  variant="outlined" type="number" style={{ width: 100 }} inputProps={{ min: "0",  style: { textAlign: "center"}}} /> </Grid>
                </Grid>
                </Box>
              </Grid>
              
              <Grid item xs={6}>
                  {value === '1' && <Ventanas />}
                  {value === '2' && <Puertas />}   
                  {value === '3' && <Lucernarios />}   
              </Grid>
          </Grid>
          <Grid container alignItems="center" justifyContent="center"  spacing={2} style={{ marginBottom: '30px' }}>
              <Grid item> <Typography variant="h6">Nombre: </Typography> </Grid>
              <Grid item> <TextField value={inputNombre} onChange={handleNombreChange} style={{ width: 160 }}  inputProps={{ style: {marginLeft:'-13px',height: '20px', textAlign: "center"}}}/> </Grid>
              <Grid item> <ArgonButton variant="gradient" color="info" onClick={NuevoElemento}> Agregar&nbsp; <ArrowForwardSharpIcon fontSize="large" /></ArgonButton> </Grid> 
          </Grid>
      
        </Grid>
      </Grid>
    </Grid></Card>
    </div>
  );
}