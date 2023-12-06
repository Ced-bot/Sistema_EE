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
import Icon from "@mui/material/Icon";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI base styles
import borders from "assets/theme/base/borders";


function Listas({setOpcionDif}) {
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
    //console.log(newValue);
  };
  return (
    <Card id="delete-account" >
        <ArgonBox>
            <AppBar position="static">
                <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                <Tab label="Materiales" />
                <Tab label="Calibraciones" />
                <Tab label="Puntos" />
                </Tabs>
            </AppBar>
        </ArgonBox>
        
    </Card>
  );
}
// Setting default values for the props of GradientLineChart
Listas.defaultProps = {
};
// Typechecking props for the CategoriesList
Listas.propTypes = {
  setOpcionDif: PropTypes.func,
};

export default Listas;
