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
// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// resultados page components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import BaseLayout from "layouts/resultados/components/BaseLayout";
import Caracteristicas from "layouts/resultados/components/Caracteristicas";
import Invoices from "layouts/resultados/components/Invoices";
import IndicadoresEM110 from "layouts/resultados/components/Indicadores/envolvente";
import IndicadoresDemanda from "layouts/resultados/components/Indicadores/demanda";
import IndicadoresReporte from "layouts/resultados/components/Indicadores/reporte";
import Detalles from "layouts/resultados/components/Detalles";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Billing() {
  const [opcionDif, setOpcionDif] = useState(0);

  const Envolvente = () => (
    < >
      <Grid item xs={12} md={7}>
        <IndicadoresEM110 />
      </Grid>
      <Grid item xs={12} md={5}>
        <Detalles />
      </Grid>
    </>
  );
  const Demanda = () => (
    < >
      <Grid item xs={12} md={12}>
        <IndicadoresDemanda />
      </Grid>
    </>
  );
  const Mejoras = () => (
    < >
      <Grid item xs={12} md={12}>
        <IndicadoresReporte />
      </Grid>
    </>
  );

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <ArgonBox mt={0}>
        
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            {/* Titulo de las caracteristicas de evaluación del sistema de EE */}
            <Grid item xs={12}>
              <Caracteristicas setOpcionDif={setOpcionDif} />
            </Grid>
          </Grid>
        </ArgonBox>

        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            {/* Información de los indicadores y sus detalles */}
            {opcionDif === 0 && <Envolvente />}
            {opcionDif === 1 && <Demanda /> }   
            {opcionDif === 2 && <Mejoras />}  
          </Grid>
        </ArgonBox>
        
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
