import React, { useState, useEffect  } from 'react';
import { AppBar, Tabs, Tab, Card, Grid, Typography, TextField } from '@mui/material';

// Argon Dashboard 2 MUI base styles
import breakpoints from "assets/theme/base/breakpoints";
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import ArgonButton from "components/ArgonButton";
import { Select, Space } from 'antd';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const PropiedadesTermicas = () => {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

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
  return (
    <div>
      <Card>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}> 
            </Grid>
            <Grid item xs={9} md={2} lg={16} sx={{ ml: "auto" }}>
              <Grid container alignItems="center" justifyContent="center"  spacing={2} style={{ marginBottom: '10px' }}>
                <Grid item> <Typography variant="h5">Libreria de cerramientos </Typography> </Grid>
              </Grid>
              <Grid container alignItems="center" justifyContent="center"  spacing={2}  style={{ marginBottom: '10px' }}>
                <Grid item> <Typography variant="h6">Grupo de materiales: </Typography> </Grid>
                <Grid item> 
                  <Space wrap>
                    <Select
                      defaultValue="Metales"
                      style={{  width: 220, }}
                      onChange={handleChange}
                      options={[
                        { value: 'Metales', label: 'Metales',},
                        { value: 'Madera', label: 'Madera',},
                        { value: 'Ormigones', label: 'Ormigones',},
                        { value: 'asd', label: 'Fabricado de bloques de ceramica de arcilla aligerada ',},
                        { value: 'Morteros', label: 'Morteros', disabled: true,},]}
                    />
                  </Space>
                </Grid>
              </Grid>
              <Grid container alignItems="center" justifyContent="center"  spacing={13.6} style={{ marginBottom: '20px' }}>
                <Grid item> <Typography variant="h6">Material: </Typography> </Grid>
                <Grid item> 
                  <Space wrap>
                    <Select
                      defaultValue="Acero"
                      style={{  width: 220, }}
                      onChange={handleChange}
                      options={[
                        { value: 'Acero', label: 'Acero',},
                        { value: 'Aluminio', label: 'Aluminio',},
                        { value: 'Cobre', label: 'Cobre',},
                        { value: 'Cromo', label: 'Cromo', disabled: true,},]}
                    />
                  </Space>
                </Grid>
              </Grid>

              <Grid container alignItems="center" justifyContent="center"  spacing={4} style={{ marginBottom: '10px' }}>
                <Grid item>
                  <Grid container alignItems="center" justifyContent="center"  spacing={1}>
                      <Grid item> <Typography variant="h6">Espesor(m):</Typography> </Grid>
                      <Grid item> <TextField label="" variant="outlined" type="number" style={{ width: 80 }} inputProps={{ style: { textAlign: "center"}}} /> </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container alignItems="center" justifyContent="center"  spacing={1}>
                      <Grid item> <Typography variant="h6">λ (W/mK):</Typography> </Grid>
                      <Grid item> <TextField label="" variant="outlined" style={{ width: 80 }} inputProps={{ style: { textAlign: "center", paddingLeft: '0px'}}} disabled/> </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container alignItems="center" justifyContent="center"  spacing={4} style={{ marginBottom: '20px' }}>
                <Grid item>
                  <Grid container alignItems="center" justifyContent="center"  spacing={2.5}>
                      <Grid item> <Typography variant="h6">ρ (kg/m3):</Typography> </Grid>
                      <Grid item> <TextField label="" variant="outlined" style={{ width: 80 }} inputProps={{ style: {textAlign: "center", paddingLeft: '0px'}}} disabled/> </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container alignItems="center" justifyContent="center"  spacing={2}>
                      <Grid item> <Typography variant="h6">ĉ (J/kgK):</Typography> </Grid>
                      <Grid item> <TextField label="" variant="outlined" style={{ width: 80 }} inputProps={{ style: { textAlign: "center", paddingLeft: '0px'}}} disabled/> </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="center"  spacing={3}>
                <Grid item> <ArgonButton variant="gradient" color="info" > Agregar&nbsp; <ArrowForwardSharpIcon fontSize="large" /></ArgonButton> </Grid> 
            </Grid>

            <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}> 
            </Grid>

          </Grid>
      </Card>
    </div>
  );
};

export default PropiedadesTermicas;