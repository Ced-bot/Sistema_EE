

import { useState, useEffect } from "react";
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";


// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from '@mui/material';

// @mui material components
import Card from "@mui/material/Card";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI base styles
import breakpoints from "assets/theme/base/breakpoints";

import RadioGroupTecho from "layouts/dashboard2/components/DatosEnvolvente/Techo";
import RadioGroupMuro from "layouts/dashboard2/components/DatosEnvolvente/Muro";
import RadioGroupVanosLucernarios from "layouts/dashboard2/components/DatosEnvolvente/VanosLucernarios";
import RadioGroupParticionInterior from "layouts/dashboard2/components/DatosEnvolvente/ParticionInterior";

function Dimensiones({agregarElemento, nroElementos, setOpcionDif}) {
  const Techo = () => (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}> 
      </Grid>
      <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}>
        <Grid container alignItems="center" justifyContent="center">
          <RadioGroupTecho agregarElemento={agregarElemento} nroElementos={nroElementos} />
        </Grid>
      </Grid>
    </Grid>
  );
  const Muro = () => (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}> 
      </Grid>
      <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}>
        <Grid container alignItems="center" justifyContent="center">
          <RadioGroupMuro agregarElemento={agregarElemento} nroElementos={nroElementos} />
        </Grid>
      </Grid>
    </Grid>
  );
  const TabContent3 = () => <Box>Contenido de la pestaña 3</Box>;
  const VanosLucernarios = () => (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}> 
      </Grid>
      <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}>
        <Grid container alignItems="center" justifyContent="center">
          <RadioGroupVanosLucernarios />
        </Grid>
      </Grid>
    </Grid>
  );

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

  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);
    if(newValue == 3){
      // Mostrar datos de vanos
      setOpcionDif(1);
    }
    else{
      setOpcionDif(0);
    }
  };

  const renderChart = (
    <ArgonBox p={2}>
      <ArgonBox position="relative">
          <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6} lg={14} sx={{ ml: "auto" }}>
                <AppBar position="static">
                    <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                        <Tab label="Techo" icon={ <i className="ni ni-bold-up" style={{ marginTop: "6px", marginRight: "8px" }} /> } />
                        <Tab label="Muro" icon={ <i className="ni ni-map-big" style={{ marginTop: "6px", marginRight: "8px" }} /> } />
                        <Tab label="Piso" icon={ <i className="ni ni-ungroup" style={{ marginTop: "6px", marginRight: "8px" }} /> } />
                        {/* <Tab label="Partición interior" icon={ <i className="ni ni-fat-add" style={{ marginTop: "6px", marginRight: "8px" }} /> } /> */}
                        <Tab label="Vanos/Lucernarios" icon={ <i className="ni ni-image" style={{ marginTop: "6px", marginRight: "8px" }} /> } />
                        <Tab label="Puentes térmico" icon={ <i className="ni ni-chart-pie-35" style={{ marginTop: "6px", marginRight: "8px" }} /> } />
                    </Tabs>
                </AppBar>
              </Grid>

              {tabValue === 0 && <Techo />}
              {tabValue === 1 && <Muro />}
              {tabValue === 2 && <TabContent3 />}
              {tabValue === 3 && <VanosLucernarios />}

          </Grid>
      </ArgonBox>
    </ArgonBox>
    
  );

  return <Card>{renderChart}</Card>;
}
// Setting default values for the props of GradientLineChart
Dimensiones.defaultProps = {
  nroElementos:0
};
// Typechecking props for the CategoriesList
Dimensiones.propTypes = {
  agregarElemento: PropTypes.func,
  nroElementos: PropTypes.number,
  setOpcionDif: PropTypes.func,
};
export default Dimensiones;
