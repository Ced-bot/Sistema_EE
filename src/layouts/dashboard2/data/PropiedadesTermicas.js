import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Card, Grid, Typography } from '@mui/material';


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const PropiedadesTermicas = () => {
  const [opciones, setOpciones] = useState(['Conocidas', 'Estimadas']);
  const [seleccion, setSeleccion] = useState('Conocidas');

  const handleSelectChange = (event) => {
    setSeleccion(event.target.value);
  };

  return (
    <div>
      <Card>
          <Grid container spacing={3} alignItems="center">

            <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}> 
            </Grid>
            <Grid item xs={9} md={12} lg={14} sx={{ ml: "auto" }}>
              <Grid container alignItems="center" justifyContent="center"  spacing={2}>
                <Grid item> <Typography variant="h6">Propiedades Térmicas: </Typography> </Grid>
                <Grid item>
                  <FormControl variant="outlined">
                    <InputLabel id="demo-simple-select-outlined-label">Opciones</InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={seleccion}
                      onChange={handleSelectChange}
                      label=""
                    >
                      {opciones.map((opcion, index) => (
                        <MenuItem key={index} value={opcion}>
                          {opcion}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}> 
              <Grid container alignItems="center" style={{ marginLeft: '200px' }}>
                <Grid item>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="Transmitancia térmica" control={<Radio />} label="Transmitancia térmica" />
                    <FormControlLabel value="Librería de cerramientos" control={<Radio />} label="Librería de cerramientos" />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}> 
            </Grid>

          </Grid>
      </Card>
    </div>
  );
};

export default PropiedadesTermicas;