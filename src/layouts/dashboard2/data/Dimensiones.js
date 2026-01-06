

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

import RadioGroupGeneral from "layouts/dashboard2/components/DatosEnvolvente/Funciones/componentes";
import RadioGroupVanosLucernarios from "layouts/dashboard2/components/DatosEnvolvente/VanosLucernarios";

// Recoil
import { useRecoilState} from 'recoil';
import { transmCerramiento } from '../components/Recoil';

// ELEMENTOS DEL TECHO
const elementosRadioTecho = [
  { value: '1', label: 'Enterrado' },
  { value: '2', label: 'En contacto con el aire' },
  { value: '3', label: 'En contacto con ambiente no habitable' }
];
const LabelsTecho = ["Techo enterrado","Techo en contacto con el aire","Techo en contacto con ANH"];
const Labels2Techo = ["Techo enterrado","Techo con aire","Techo con ANH"];
const Image1Techo = 'images/SistemaEE/techoEnterrada.jpg'; 
const Image2Techo = 'images/SistemaEE/techoAire.jpg';
const Image3Techo = 'images/SistemaEE/techoANH.jpg'; 


// ELEMENTOS DEL MURO
const elementosRadioMuro = [
  { value: '1', label: 'En contacto con el terreno' },
  { value: '2', label: 'En contacto con el aire' },
  { value: '3', label: 'En contacto con ambiente no habitable' }
];
const LabelsMuro = ["Muro en contacto con el terreno","Muro en contacto con el aire","Muro en contacto con ANH"];
const Labels2Muro = ["Muro de terreno","Muro de fachada","Muro con ANH"];
const Image1Muro = 'images/SistemaEE/muroTerreno.jpg'; 
const Image2Muro = 'images/SistemaEE/muroFachada.jpg'; 
const Image3Muro = 'images/SistemaEE/muroANH.jpg'; 

// ELEMENTOS DEL PISO
const elementosRadioPiso = [
  { value: '1', label: 'En contacto con el terreno' },
  { value: '2', label: 'En contacto con el aire' },
  { value: '3', label: 'En contacto con ambiente no habitable' }
];
const LabelsPiso = ["Piso en contacto con el terreno","Piso en contacto con el aire","Piso en contacto con ANH"];
const Labels2Piso = ["Piso con terreno","Piso con aire","Piso con ANH"];
const Image1Piso = 'images/SistemaEE/sueloTerreno.jpg'; 
const Image2Piso = 'images/SistemaEE/sueloAire.jpg'; 
const Image3Piso = 'images/SistemaEE/sueloANH.jpg'; 

/////////////////////////////////////////////////////////////////////////////
function Dimensiones({agregarElemento, nroElementos, setOpcionDif}) {
  const Techo = () => (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}> 
      </Grid>
      <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}>
        <Grid container alignItems="center" justifyContent="center">
          <RadioGroupGeneral agregarElemento={agregarElemento} nroElementos={nroElementos} elementosRadio={elementosRadioTecho} Labels={LabelsTecho} Labels2={Labels2Techo} Image1={Image1Techo} Image2={Image2Techo}  Image3={Image3Techo}  />
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
          <RadioGroupGeneral agregarElemento={agregarElemento} nroElementos={nroElementos} elementosRadio={elementosRadioMuro} Labels={LabelsMuro} Labels2={Labels2Muro} Image1={Image1Muro} Image2={Image2Muro}  Image3={Image3Muro} />
        </Grid>
      </Grid>
    </Grid>
  );
  const Piso = () => (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}> 
      </Grid>
      <Grid item xs={9} md={2} lg={14} sx={{ ml: "auto" }}>
        <Grid container alignItems="center" justifyContent="center">
          <RadioGroupGeneral agregarElemento={agregarElemento} nroElementos={nroElementos} elementosRadio={elementosRadioPiso} Labels={LabelsPiso} Labels2={Labels2Piso} Image1={Image1Piso} Image2={Image2Piso}  Image3={Image3Piso} />
        </Grid>
      </Grid>
    </Grid>
  );
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
  // Recoil

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
    // Desactivar componentes
    //
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
                        {/* <Tab label="Puentes térmico" icon={ <i className="ni ni-chart-pie-35" style={{ marginTop: "6px", marginRight: "8px" }} /> } /> */}
                    </Tabs>
                </AppBar>
              </Grid>

              {tabValue === 0 && <Techo />}
              {tabValue === 1 && <Muro />}
              {tabValue === 2 && <Piso />}
              {tabValue === 3 && <VanosLucernarios />}
              {tabValue === 4 && <VanosLucernarios />}

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
