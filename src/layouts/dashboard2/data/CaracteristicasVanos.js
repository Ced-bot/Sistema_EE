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

import { useRecoilValue } from 'recoil';
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
  const diccionarioVanos = useRecoilValue(datosVanos);

  const [value, setValue] = useState('1');
  const [TransmitanciaValue, setTransmitanciaValue] = useState(0);
  const [textFieldDisabled, setTextFieldDisabled] = useState(false);
  // Valores de los textfields
  const [inputAnchura, setInputAnchura] = useState('');
  const [inputLongitud, setInputLongitud] = useState('');
  const [inputArea, setInputArea] = useState('');

  const Labels = ["Ventana","Puerta","Lucernario"]
  // Evento de cambio de los radioButtons
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
  }, [value]);
  // Evento de cambio del textfield de transmitancia
  const handleTransmitanciaChange = (event) => {
    setTransmitanciaValue(event.target.value);
  };
  // Enventos de cambio de los textfields
  const handleAnchuraChange = (event) => {
    setInputAnchura(event.target.value);
  };
  const handleLongitudChange = (event) => {
    setInputLongitud(event.target.value);
  };
  useEffect(() => {
    if (inputAnchura !== '' && inputLongitud !== '') {
        setInputArea(inputAnchura * inputLongitud);
    } else {
        setInputArea('');
    }
  }, [inputAnchura,inputLongitud]);
  //================================================================================
  // Evento que se activa cuando se cambia el valor del select
  const handleSelectChange = (selectedOption) => {
    // Desactivar el texfield de transmitancia
    setTextFieldDisabled(selectedOption === "Usar libreria");
    // Reinicar el valor de la transmitancia
    setTransmitanciaValue(0);
  };
  // =============================================================
  // Evento que se activa cuando se cambia el valor del select
  const handleChangeSelect = (value) => {
    console.log(`selected ${value}`);
  };    
  // =============================================================
  // Función para agregar un nuevo elemento a la lista
  const NuevoElemento = () => {
    console.log("eu sou a polla --> ",diccionarioVanos)
    agregarElemento({
      id : nroElementos,
      color: "dark",
      icon: <i className="ni ni-image" style={{ fontSize: "12px" }} />,
      name: Labels[value-1],
      description: (
        <>
          Area {inputArea} m2,{" "}
          <ArgonTypography variant="caption" color="text" fontWeight="medium">
          Transmitancia {TransmitanciaValue} W/m2K
          </ArgonTypography>
        </>
      ),
    })
  };
  // Elementos independientes
  const Ventanas = () => (
    <Grid container spacing={1} alignItems="center">
      <Box mb={2.4} ml={8}>
      <Grid container alignItems="center" justifyContent="left" spacing={1}>
          <Grid item> <Typography variant="h6">Ventana proyectante o de abatir:</Typography> </Grid>
          <Grid item> <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
      </Grid>
      </Box>
      <Box mb={2.4} ml={8}>
      <Grid container alignItems="center" justifyContent="left"  spacing={1}>
          <Grid item> <Typography variant="h6">Cuenta con cierre hermético:</Typography> </Grid>
          <Grid item> <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
      </Grid>
      </Box>
      <Box mb={2.4} ml={8}>
      <Grid container alignItems="center" justifyContent="left"  spacing={1}>
          <Grid item> <Typography variant="h6">Doble ventana:</Typography> </Grid>
          <Grid item> <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
      </Grid>
      </Box>
    </Grid>
  );
  const Puertas = () => (
    <Grid container spacing={1} alignItems="center">
      <Box mb={2.4} ml={8}>
      <Grid container alignItems="center" justifyContent="left" spacing={1}>
          <Grid item> <Typography variant="h6">Sellado de silicona con el vano:</Typography> </Grid>
          <Grid item> <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
      </Grid>
      </Box>
      <Box mb={2.4} ml={8}>
      <Grid container alignItems="center" justifyContent="left"  spacing={1}>
          <Grid item> <Typography variant="h6">Cuenta con burletes en la base:</Typography> </Grid>
          <Grid item> <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
      </Grid>
      </Box>
      <Box mb={2.4} ml={8}>
      <Grid container alignItems="center" justifyContent="left"  spacing={1}>
          <Grid item> <Typography variant="h6">Doble ventana:</Typography> </Grid>
          <Grid item> <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
      </Grid>
      </Box>
    </Grid>
  );
  const Lucernarios = () => (
    <Grid container spacing={1} alignItems="center">
      <Box mb={2.4} ml={8}>
      <Grid container alignItems="center" justifyContent="left"  spacing={1}>
          <Grid item> <Typography variant="h6">Doble ventana:</Typography> </Grid>
          <Grid item> <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
      </Grid>
      </Box>
    </Grid>
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
                    <Grid item> <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} /> </Grid>
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
                    <Grid item> <TextField value={inputLongitud} onChange={handleLongitudChange} label="" variant="outlined" type="number" style={{ width: 100 }} inputProps={{ style: { textAlign: "center"}}} /> </Grid>
                </Grid>
                </Box>
                <Box mb={2} ml={8}>
                <Grid container alignItems="center" justifyContent="left"  spacing={1}>
                    <Grid item> <Typography variant="h6">Absortividad del marco:</Typography> </Grid>
                    <Grid item> <ArgonButton variant="gradient" color="light" size="small" onClick={() => {}}>α</ArgonButton> </Grid> 
                    <Grid item> <TextField value={inputLongitud} onChange={handleLongitudChange} label="" variant="outlined" type="number" style={{ width: 100 }} inputProps={{ style: { textAlign: "center"}}} /> </Grid>
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
              <Grid item> <ArgonButton variant="gradient" color="info" onClick={NuevoElemento}> Agregar&nbsp; <ArrowForwardSharpIcon fontSize="large" /></ArgonButton> </Grid> 
          </Grid>
      
        </Grid>
      </Grid>
    </Grid></Card>
    </div>
  );
}