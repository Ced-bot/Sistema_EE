/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";
// Argon Dashboard 2 MUI base styles
import breakpoints from "assets/theme/base/breakpoints";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 MUI base styles
import borders from "assets/theme/base/borders";

// Images
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";

function Caracteristicas({setOpcionDif}) {
  const { borderWidth, borderColor } = borders;
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
    setOpcionDif(newValue);
    //console.log("ASD", newValue);
  };
  return (
    <Card id="delete-account">
      <ArgonBox p={2}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={8} lg={10}>
            <AppBar position="static">
              <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                <Tab label="Envolvente" />
                <Tab label="Demanda" />
                <Tab label="Resultados" />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid> 
      </ArgonBox>
    </Card>
  );
}
// Setting default values for the props of GradientLineChart
Caracteristicas.defaultProps = {
};
// Typechecking props for the CategoriesList
Caracteristicas.propTypes = {
  setOpcionDif: PropTypes.func,
};

export default Caracteristicas;
