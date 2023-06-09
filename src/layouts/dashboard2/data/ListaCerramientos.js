import React, { useState, useEffect  } from 'react';
import { AppBar, Tabs, Tab, Card, Grid, Typography, TextField } from '@mui/material';

// Argon Dashboard 2 MUI base styles
import breakpoints from "assets/theme/base/breakpoints";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import ArgonButton from "components/ArgonButton";
import { Select, Space } from 'antd';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const ListaCerramientos = () => {
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
    <Card>
    <ArgonBox display="flex" justifyContent="center" alignItems="center" pt={2} px={2}>
        <ArgonTypography variant="h5" fontWeight="medium" >
           Lista de cerramientos
        </ArgonTypography>
    </ArgonBox>
    <ArgonBox p={2} style={{ minHeight: '400.75px', maxHeight: '400.75px', overflow: 'auto' }}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
        
        </ArgonBox>
    </ArgonBox>
    </Card>
  );
};

export default ListaCerramientos;