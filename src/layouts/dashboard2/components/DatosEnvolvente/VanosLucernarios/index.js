import React, { useState, useEffect } from 'react';
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

import Image from 'assets/images/SistemaEE/huecoLucernario.jpg'; // reemplaza con la ruta de tu imagen
import { Grid, TextField, Typography, Box } from '@mui/material';
import { Select, Space } from 'antd';

import { useRecoilState } from 'recoil';
import { datosVanos } from 'layouts/dashboard2/components/Recoil';
  
export default function RadioGroupVanosLucernarios() {
    // RECOIL
    const [diccionario, setDiccionario] = useRecoilState(datosVanos);

    // Elementos visualizables
    const [TransmitanciaValue, setTransmitanciaValue] = useState(0);
    const [textFieldDisabled, setTextFieldDisabled] = useState(false);
    // Valores de los textfields
    const [inputAnchura, setInputAnchura] = useState('');
    const [inputLongitud, setInputLongitud] = useState('');
    const [inputMultiplicador, setInputMultiplicador] = useState(1);
    const [inputArea, setInputArea] = useState('');
    // Valores de secundarios
    const [inputPorcentaje, setInputPorcentaje] = useState(20);
    const [inputFactorSolar, setInputFactorSolar] = useState('');
    const [inputTTVidrio, setInputTTVidrio] = useState(0);
    const [inputTTMarco, setInputTTMarco] = useState(0);
  
    // Enventos de cambio de los textfields
    const handleAnchuraChange = (event) => {
      setInputAnchura(event.target.value);
      setDiccionario(prevData => ({ ...prevData, Anchura: event.target.value }));
    };
    const handleLongitudChange = (event) => {
      setInputLongitud(event.target.value);
      setDiccionario(prevData => ({ ...prevData, Longitud: event.target.value }));
    };
    const handleMultiplicadorChange = (event) => {
      setInputMultiplicador(event.target.value);
      setDiccionario(prevData => ({ ...prevData, Multiplicador: event.target.value }));
    };

    const handlePorcentajeChange = (event) => {
      setInputPorcentaje(event.target.value);
      setDiccionario(prevData => ({ ...prevData, Porcentaje_marco: event.target.value }));
      if(event.target.value == 100){
        // Desactivar el texfield de transmitancia
        setTextFieldDisabled(true);
        // Reinicar valores
        setInputFactorSolar(0);
        setInputTTVidrio(0);
      }
      else{
        // Desactivar el texfield de transmitancia
        setTextFieldDisabled(false);
      }
    };
    const handleFactorSolarChange = (event) => {
      setInputFactorSolar(event.target.value);
      setDiccionario(prevData => ({ ...prevData, Factor_solar: event.target.value }));
    };
    const handleTTVidrioChange = (event) => {
      setInputTTVidrio(event.target.value);
      setDiccionario(prevData => ({ ...prevData, UVidrio: event.target.value }));
    };
    const handleTTMarcoChange = (event) => {
      setInputTTMarco(event.target.value);
      setDiccionario(prevData => ({ ...prevData, UMarco: event.target.value }));
    };

    useEffect(() => {
      if (inputAnchura !== '' && inputLongitud !== '') {
          setInputArea(inputAnchura * inputLongitud * inputMultiplicador);
      } else {
          setInputArea('');
      }
    }, [inputAnchura,inputLongitud, inputMultiplicador]);
    useEffect(() => {
      //actualizarDiccionario('largo', inputLongitud);
    }, [inputLongitud]);
    //================================================================================
    // Evento que se activa cuando se cambia el valor del select
    const handleChangeSelect = (value) => {
      //console.log(`selected ${value}`);
    };    
    // =============================================================
    // Setting default values for the props of GradientLineChart
    RadioGroupVanosLucernarios.defaultProps = {};
    // Typechecking props for the CategoriesList
    RadioGroupVanosLucernarios.propTypes = {};
    return (
        <div>
            <Grid container alignItems="center" justifyContent="center"  spacing={2}>
                <Grid item style={{ transform: "translateX(17px)" }}> <Typography variant="h6">Cerramiento asociado: </Typography> </Grid>
                <Grid item style={{ transform: "translateY(-5px)" }}> <Space wrap> <Select style={{  width: 220, }} onChange={handleChangeSelect} options={[{ value: 'Techo', label: 'Techo',}, { value: 'Muro', label: 'Muro',}]} />  </Space>  </Grid> 
                <Grid item style={{ transform: "translateX(15px)" }}> <Typography variant="h6">Orientación: </Typography> </Grid>
                <Grid item style={{ transform: "translateX(5px)" }}> <TextField id="" defaultValue="--" style={{ width: 80 }} disabled /> </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Box mb={2}>
                    <Grid container alignItems="center" justifyContent="left" spacing={2.03}>
                        <Grid item> <Typography variant="h6">Anchura (m):</Typography> </Grid>
                        <Grid item> <TextField value={inputAnchura} onChange={handleAnchuraChange} variant="outlined" type="number" style={{ width: 100 }} inputProps={{ min: "1", style: { textAlign: "center"}}} /> </Grid>
                    </Grid>
                    </Box>
                    <Box mb={2}>
                    <Grid container alignItems="center" justifyContent="left"  spacing={1.63}>
                        <Grid item> <Typography variant="h6">Longitud (m):</Typography> </Grid>
                        <Grid item> <TextField value={inputLongitud} onChange={handleLongitudChange} variant="outlined" type="number" style={{ width: 100 }} inputProps={{ min: "1",  style: { textAlign: "center"}}} /> </Grid>
                    </Grid>
                    </Box>
                    <Box mb={2}>
                    <Grid container alignItems="center" justifyContent="left"  spacing={1}>
                        <Grid item> <Typography variant="h6">Multiplicador:</Typography> </Grid>
                        <Grid item> <TextField value={inputMultiplicador} onChange={handleMultiplicadorChange} variant="outlined" type="number" style={{ width: 100 }} inputProps={{ min: "1", style: { textAlign: "center"}}} /> </Grid>
                    </Grid>
                    </Box>
                </Grid>

                <Grid item>
                    <Box mb={2}>
                    <Grid container alignItems="center" justifyContent="left" spacing={1}>
                        <Grid item> <Typography variant="h6">Por. del marco (%):</Typography> </Grid>
                        <Grid item> <TextField value={inputPorcentaje} onChange={handlePorcentajeChange} variant="outlined" type="number" style={{ width: 100 }} inputProps={{ min: "0", max: "100", style: { textAlign: "center"}}} /> </Grid>
                    </Grid>
                    </Box>
                    <Box mb={2}>
                    <Grid container alignItems="center" justifyContent="left"  spacing={4.65}>
                        <Grid item> <Typography variant="h6" >Factor solar (-):</Typography> </Grid>
                        <Grid item> <TextField value={inputFactorSolar} onChange={handleFactorSolarChange} variant="outlined" type="number" style={{ width: 100 }} inputProps={{ min: "0", style: { textAlign: "center"}}} disabled={textFieldDisabled} /> </Grid>
                    </Grid>
                    </Box>
                    <Box mb={2}>
                    <Grid container alignItems="center" justifyContent="left"  spacing={9.1}>
                        <Grid item> <Typography variant="h6">Area (m²):</Typography> </Grid>
                        <Grid item> <TextField  value={inputArea} label="" variant="outlined" type="number" disabled  style={{ width: 100}} inputProps={{ style: { textAlign: "center"}}}/> </Grid>
                    </Grid>
                    </Box>
                </Grid>
                <Grid item >
                  <img src={Image} alt="Descripción" />   
                </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="center"  spacing={2}  style={{ marginBottom: '10px' }}>
                <Grid item> <Typography variant="h6">Transmitancias Térmicas (W/m²K)</Typography> </Grid>
            </Grid> 
            <Grid container alignItems="center" justifyContent="center"  spacing={2}>
                <Grid item > <Typography variant="h6">Marco: </Typography> </Grid>
                <Grid item style={{ transform: "translateX(-10px)" }}> 
                  <TextField value={inputTTMarco} onChange={handleTTMarcoChange} type="number" style={{ width: 100 }} inputProps={{ min: "0", style: { textAlign: "center"}}} /> 
                </Grid>
                <Grid item style={{ transform: "translateX(15px)" }}> <Typography variant="h6" >Vidrio: </Typography> </Grid>
                <Grid item style={{ transform: "translateX(5px)" }}> 
                  <TextField value={inputTTVidrio} onChange={handleTTVidrioChange} type="number" style={{ width: 100 }} inputProps={{ min: "0", style: { textAlign: "center"}}} disabled={textFieldDisabled}/> 
                </Grid>
            </Grid>
        </div>
    );
}