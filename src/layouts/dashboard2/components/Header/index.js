import { useState, useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from '@mui/material';

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI base styles
import breakpoints from "assets/theme/base/breakpoints";



import RadioGroupCubierta from "layouts/dashboard2/components/DatosEnvolvente/Cubierta";
import RadioGroupParticionInterior from "layouts/dashboard2/components/DatosEnvolvente/ParticionInterior";

const TabContent1 = () => (
  <Grid container spacing={3} alignItems="center">
    <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}> 
    </Grid>
    <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}>
      <Grid container alignItems="center" justifyContent="center">
        <RadioGroupCubierta />
      </Grid>
    </Grid>
  </Grid>
);
const TabContent2 = () => <Box>Contenido de la pestaña 2</Box>;
const TabContent3 = () => <Box>Contenido de la pestaña 3</Box>;
const TabContent4 = () => (
  <Grid container spacing={3} alignItems="center">
    <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}> 
    </Grid>
    <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}>
      <Grid container alignItems="center" justifyContent="center">
        <RadioGroupParticionInterior />
      </Grid>
    </Grid>
  </Grid>
);

function Header() {
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
    <ArgonBox position="relative">
        <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6} lg={14} sx={{ ml: "auto" }}>
              <AppBar position="static">
                  <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                      <Tab label="Cubierta" icon={ <i className="ni ni-bold-up" style={{ marginTop: "6px", marginRight: "8px" }} /> } />
                      <Tab label="Muro" icon={ <i className="ni ni-map-big" style={{ marginTop: "6px", marginRight: "8px" }} /> } />
                      <Tab label="Suelo" icon={ <i className="ni ni-ungroup" style={{ marginTop: "6px", marginRight: "8px" }} /> } />
                      <Tab label="Partición interior" icon={ <i className="ni ni-fat-add" style={{ marginTop: "6px", marginRight: "8px" }} /> } />
                      <Tab label="Hueco/Lucernario" icon={ <i className="ni ni-image" style={{ marginTop: "6px", marginRight: "8px" }} /> } />
                      <Tab label="Puente térmico" icon={ <i className="ni ni-chart-pie-35" style={{ marginTop: "6px", marginRight: "8px" }} /> } />
                  </Tabs>
              </AppBar>
            </Grid>

            {tabValue === 0 && <TabContent1 />}
            {tabValue === 1 && <TabContent2 />}
            {tabValue === 2 && <TabContent3 />}
            {tabValue === 3 && <TabContent4 />}

        </Grid>
      </ArgonBox>

    
  );
}

export default Header;
