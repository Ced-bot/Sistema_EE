import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/system';


import Image1 from 'assets/images/SistemaEE/PI_Vertical.jpg'; // reemplaza con la ruta de tu imagen
import Image2 from 'assets/images/SistemaEE/PI_Horizontal_Superior.jpg'; // reemplaza con la ruta de tu imagen
import Image3 from 'assets/images/SistemaEE/PI_Horizontal_Inferior.jpg'; // reemplaza con la ruta de tu imagen
import { Grid, TextField, Typography, Box } from '@mui/material';

// Este componente hace que el texto del label se muestre en dos líneas
const TwoLineLabel = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledFormControlLabel = styled(FormControlLabel)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
// Elmentos visualizables
const PI_Vertical = () => (
    <Grid container spacing={12} alignItems="center">
        <Grid item xs={7}>
            <Box mb={2}>
            <Grid container alignItems="center" justifyContent="center" spacing={2.5}>
                <Grid item> <Typography variant="h6">Anchura (m):</Typography> </Grid>
                <Grid item> <TextField label="" variant="outlined" type="number" style={{ width: 155 }} /> </Grid>
            </Grid>
            </Box>
            <Box mb={2}>
            <Grid container alignItems="center" justifyContent="center"  spacing={2}>
                <Grid item> <Typography variant="h6">Longitud (m):</Typography> </Grid>
                <Grid item> <TextField label="" variant="outlined" type="number" style={{ width: 155 }} /> </Grid>
            </Grid>
            </Box>
            <Box mb={2} ml={8}>
            <Grid container alignItems="center" justifyContent="center"  spacing={2}>
                <Grid item> <Typography variant="h6">Superficie (m2):</Typography> </Grid>
                <Grid item> <TextField label="" variant="outlined" type="number" disabled  style={{ width: 70 }} /> </Grid>
            </Grid>
            </Box>
        </Grid>
        <Grid item xs={3}>
        <img src={Image1} alt="Descripción" />
        </Grid>
    </Grid>
  );
  const PI_HorzontalSuperior = () => (
    <Grid container spacing={12} alignItems="center">
        <Grid item xs={7}>
            <Box mb={2}>
            <Grid container alignItems="center" justifyContent="center" spacing={2.5}>
                <Grid item> <Typography variant="h6">Anchura (m):</Typography> </Grid>
                <Grid item> <TextField label="" variant="outlined" type="number" style={{ width: 155 }} /> </Grid>
            </Grid>
            </Box>
            <Box mb={2}>
            <Grid container alignItems="center" justifyContent="center"  spacing={2}>
                <Grid item> <Typography variant="h6">Longitud (m):</Typography> </Grid>
                <Grid item> <TextField label="" variant="outlined" type="number" style={{ width: 155 }} /> </Grid>
            </Grid>
            </Box>
            <Box mb={2} ml={8}>
            <Grid container alignItems="center" justifyContent="center"  spacing={2}>
                <Grid item> <Typography variant="h6">Superficie (m2):</Typography> </Grid>
                <Grid item> <TextField label="" variant="outlined" type="number" disabled  style={{ width: 70 }} /> </Grid>
            </Grid>
            </Box>
        </Grid>
        <Grid item xs={3}>
        <img src={Image2} alt="Descripción" />
        </Grid>
    </Grid>
  );
  
  const PI_HorzontalInferior = () => (
    <Grid container spacing={12} alignItems="center">
        <Grid item xs={7}>
            <Box mb={2}>
            <Grid container alignItems="center" justifyContent="center" spacing={2.5}>
                <Grid item> <Typography variant="h6">Anchura (m):</Typography> </Grid>
                <Grid item> <TextField label="" variant="outlined" type="number" style={{ width: 155 }} /> </Grid>
            </Grid>
            </Box>
            <Box mb={2}>
            <Grid container alignItems="center" justifyContent="center"  spacing={2}>
                <Grid item> <Typography variant="h6">Longitud (m):</Typography> </Grid>
                <Grid item> <TextField label="" variant="outlined" type="number" style={{ width: 155 }} /> </Grid>
            </Grid>
            </Box>
            <Box mb={2} ml={8}>
            <Grid container alignItems="center" justifyContent="center"  spacing={2}>
                <Grid item> <Typography variant="h6">Superficie (m2):</Typography> </Grid>
                <Grid item> <TextField label="" variant="outlined" type="number" disabled  style={{ width: 70 }} /> </Grid>
            </Grid>
            </Box>
        </Grid>
        <Grid item xs={3}>
        <img src={Image3} alt="Descripción" />
        </Grid>
    </Grid>
  );

  
export default function RadioGroupParticionInterior() {
    
  const [value, setValue] = useState('1');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
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
            <StyledFormControlLabel value="1" control={<Radio />} label={
                <span style={{ marginRight: '20px' }}>Vertical</span>
            } labelPlacement="start" />
            <StyledFormControlLabel value="2" control={<Radio />} label={
                <TwoLineLabel>
                <span style={{ marginRight: '20px' }}>Horizontal en contacto </span>
                <span style={{ marginRight: '20px' }}>con espacio HD superior</span>
                </TwoLineLabel>
            } labelPlacement="start" />
            <StyledFormControlLabel value="3" control={<Radio />} label={
                <TwoLineLabel>
                <span style={{ marginRight: '20px' }}>Horizontal en contacto</span>
                <span style={{ marginRight: '20px' }}>con espacio HD inferior</span>
                </TwoLineLabel>
            } labelPlacement="start" />
        </RadioGroup>
        </FormControl>
        
        {value === '1' && <PI_Vertical />}
        {value === '2' && <PI_HorzontalSuperior />}
        {value === '3' && <PI_HorzontalInferior />}
    </div>
  );
}