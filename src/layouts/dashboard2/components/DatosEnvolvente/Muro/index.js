import React, { useState, useEffect } from 'react';
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/system';


import Image1 from 'assets/images/SistemaEE/muroTerreno.jpg'; // reemplaza con la ruta de tu imagen
import Image2 from 'assets/images/SistemaEE/muroFachada.jpg'; // reemplaza con la ruta de tu imagen
import Image3 from 'assets/images/SistemaEE/MuroANH.jpg'; // reemplaza con la ruta de tu imagen
import { Grid, TextField, Typography, Box } from '@mui/material';
import { Select, Space } from 'antd';

import Select2 from "examples/Select";
import ArgonButton from "components/ArgonButton";
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import ArgonTypography from "components/ArgonTypography";

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
  
const handleChangeSelect = (value) => {
  console.log(`selected ${value}`);
};

export default function RadioGroupMuro({agregarElemento,nroElementos}) {
    const Labels = ["Muro en contacto con el terreno","Muro en contacto con el aire","Muro en contacto con ANH"]
    const Labels2 = ["Muro de terreno","Muro de fachada","Muro con ANH"]

    // Elementos visualizables
    const MuroEnterrado = () => (<img src={Image1} alt="Descripción" />);
    const MuroAireExterior = () => (<img src={Image2} alt="Descripción" />);
    const MuroANH = () => (<img src={Image3} alt="Descripción" />);
    const Orientacion = () => (
        <Grid container alignItems="center" justifyContent="center"  spacing={2} >
            <Grid item> <Typography variant="h6">Orientacion: </Typography> </Grid>
            <Grid item> <Space wrap>
                <Select
                  defaultValue="Norte"
                  style={{  width: 120, }}
                  onChange={handleChangeSelect}
                  options={[
                    { value: 'Norte', label: 'Norte',},
                    { value: 'Sur', label: 'Sur',},
                    { value: 'Este', label: 'Este',},
                    { value: 'Oeste', label: 'Oeste',},
                    { value: 'SE', label: 'SE',},
                    { value: 'SO', label: 'SO',},
                    { value: 'NE', label: 'NE',},
                    { value: 'NO', label: 'NO',},]}
                /> 
              </Space> 
            </Grid> 
        </Grid>
    );

    
    const [value, setValue] = useState('1');
    const [TransmitanciaValue, setTransmitanciaValue] = useState(0);
    const [textFieldDisabled, setTextFieldDisabled] = useState(false);
    // Valores de los textfields
    const [inputAnchura, setInputAnchura] = useState('');
    const [inputLongitud, setInputLongitud] = useState('');
    const [inputArea, setInputArea] = useState('');
    const [inputNombre, setInputNombre] = useState(Labels2[value-1]);
  
    // Evento de cambio de los radioButtons
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    useEffect(() => {
      setInputNombre(Labels2[value-1])
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
    const handleNombreChange = (event) => {
      setInputNombre(event.target.value);
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
    // Función para agregar un nuevo elemento a la lista
    const NuevoElemento = () => {
      agregarElemento({
        id : nroElementos,
        color: "dark",
        icon: <i className="ni ni-map-big" style={{ fontSize: "12px" }} />,
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
    // Setting default values for the props of GradientLineChart
    RadioGroupMuro.defaultProps = {nroElementos:0};
    // Typechecking props for the CategoriesList
    RadioGroupMuro.propTypes = {agregarElemento: PropTypes.func, nroElementos: PropTypes.number };
    return (
        <div>
            <FormControl>
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
                    <TwoLineLabel>
                    <span style={{ marginRight: '20px' }}>En contacto </span>
                    <span style={{ marginRight: '20px' }}>con el terreno</span>
                    </TwoLineLabel>
                } labelPlacement="start" />
                <StyledFormControlLabel value="2" control={<Radio />} label={
                    <span style={{ marginRight: '20px' }}>En contacto con el aire</span>
                } labelPlacement="start" />
                <StyledFormControlLabel value="3" control={<Radio />} label={
                    <TwoLineLabel>
                    <span style={{ marginRight: '20px' }}>En contacto con </span>
                    <span style={{ marginRight: '20px' }}>ambiente no habitable</span>
                    </TwoLineLabel>
                } labelPlacement="start" />
            </RadioGroup>
            </FormControl>
            
            <Grid container spacing={12} alignItems="center">
                <Grid item xs={7}>
                    <Box mb={2}>
                    <Grid container alignItems="center" justifyContent="center" spacing={2.5}>
                        <Grid item> <Typography variant="h6">Anchura (m):</Typography> </Grid>
                        <Grid item> <TextField value={inputAnchura} onChange={handleAnchuraChange} label="" variant="outlined" type="number" style={{ width: 155 }} inputProps={{ style: { textAlign: "center"}}} /> </Grid>
                    </Grid>
                    </Box>
                    <Box mb={2}>
                    <Grid container alignItems="center" justifyContent="center"  spacing={2}>
                        <Grid item> <Typography variant="h6">Longitud (m):</Typography> </Grid>
                        <Grid item> <TextField value={inputLongitud} onChange={handleLongitudChange} label="" variant="outlined" type="number" style={{ width: 155 }} inputProps={{ style: { textAlign: "center"}}} /> </Grid>
                    </Grid>
                    </Box>
                    <Box mb={2} ml={8}>
                    <Grid container alignItems="center" justifyContent="center"  spacing={2}>
                        <Grid item> <Typography variant="h6">Area (m2):</Typography> </Grid>
                        <Grid item> <TextField  value={inputArea} label="" variant="outlined" disabled  style={{ width: 110}} inputProps={{ style: { textAlign: "right"}}}/> </Grid>
                    </Grid>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    {value === '1' && <MuroEnterrado />}
                    {value === '2' && <MuroAireExterior />}   
                    {value === '3' && <MuroANH />}   
                </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="center"  spacing={2} style={{ marginBottom: '10px' }}>
                <Grid item> <Typography variant="h6">Nombre: </Typography> </Grid>
                <Grid item> <TextField value={inputNombre} onChange={handleNombreChange} style={{ width: 160 }}  inputProps={{ style: {marginLeft:'-13px',height: '20px', textAlign: "center"}}}/> </Grid>
                <Grid item> {value === '2' && <Orientacion />} </Grid>
            </Grid> 
            <Grid container alignItems="center" justifyContent="center"  spacing={2}>
                <Grid item> <Typography variant="h6">Transmitancia Térmicas: </Typography> </Grid>
                <Grid item> <Select2 options={["Directa", "Usar libreria"]} onChange={handleSelectChange}/> </Grid> 
                <Grid item> &emsp;&emsp;<TextField id="TextField-Transmitancia" value={TransmitanciaValue} variant="outlined" type="number"  style={{ width: 100 }} disabled={textFieldDisabled} onChange={handleTransmitanciaChange} inputProps={{ min: "0", style: { textAlign: "center"}}}/> </Grid>
                <Grid item> <Typography variant="h6">W/m2K </Typography> </Grid>
                <Grid item> <ArgonButton variant="gradient" color="info" onClick={NuevoElemento}> Agregar&nbsp; <ArrowForwardSharpIcon fontSize="large" /></ArgonButton> </Grid> 
            </Grid>
        </div>
    );
}