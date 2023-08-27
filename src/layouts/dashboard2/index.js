/* eslint-disable no-unused-vars */
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

// @mui material components
import Grid from "@mui/material/Grid";
import React, { useState, useEffect, useContext } from 'react';

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// Local Components
import CategoriesListMod from "layouts/dashboard2/components/CategoriesListMod";

// Data
import gradientLineChartData from "layouts/dashboard2/data/gradientLineChartData";
import categoriesListData from "layouts/dashboard2/data/categoriesListData";
import Dimensiones from "layouts/dashboard2/data/Dimensiones";
import PropiedadesTermicas from "layouts/dashboard2/data/PropiedadesTermicas";
import CaracteristicasVanos from "layouts/dashboard2/data/CaracteristicasVanos";
import ListaCerramientos from "layouts/dashboard2/data/ListaCerramientos";

// Elementos nuevos

function Default() {
  const [EstadoElementos, setEstadoElementos] = useState([ ]);
  const [nroElementos, setNroElementos] = useState(0);
  const [opcionDif, setOpcionDif] = useState(0);
  // ========================================================== Funciones ============================================================
  const agregarElemento = (nuevoElemento) => {
    setEstadoElementos([...EstadoElementos, nuevoElemento]);
    setNroElementos(nroElementos+1);
    //console.log(EstadoElementos)
  };
  //============================================================ Bloques =====================================================================
  const LibreriaTransmitancia = () => (
    <Grid container spacing={3} mb={3}>  
      <Grid item  xs={12} md={6}> <PropiedadesTermicas/> </Grid>
      <Grid item xs={12} md={6} > <ListaCerramientos /> </Grid>
    </Grid>
  );
  const VanosCaracteristicas = () => (
    <Grid container spacing={3} mb={3}>  
      <Grid item > <CaracteristicasVanos  agregarElemento={agregarElemento} nroElementos = {nroElementos} /> </Grid>
    </Grid>
  );
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        {/* <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="today's money"
              count="$53,000"
              icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
              percentage={{ color: "success", count: "+55%", text: "since yesterday" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="today's users"
              count="2,300"
              icon={{ color: "error", component: <i className="ni ni-world" /> }}
              percentage={{ color: "success", count: "+3%", text: "since last week" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="new clients"
              count="+3,462"
              icon={{ color: "success", component: <i className="ni ni-paper-diploma" /> }}
              percentage={{ color: "error", count: "-2%", text: "since last quarter" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="sales"
              count="$103,430"
              icon={{ color: "warning", component: <i className="ni ni-cart" /> }}
              percentage={{ color: "success", count: "+5%", text: "than last month" }}
            />
          </Grid>
        </Grid> */}
        {/* Datos de las dimenciones de la envolvente*/}
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3} mb={3}>
              <Grid item > <Dimensiones agregarElemento={agregarElemento} nroElementos = {nroElementos} setOpcionDif={setOpcionDif} /> </Grid>
            </Grid>
            
            {/* Propiedades térmicas de la envolvente de la vivienda */} 
            {opcionDif === 0 && <LibreriaTransmitancia />}
            {opcionDif === 1 && <VanosCaracteristicas />}
          </Grid>
          <Grid item xs={12} md={4}>
            <CategoriesListMod title="Elementos constructivos de la vivienda" Elementos={EstadoElementos} setEstadoElementos = {setEstadoElementos} />
          </Grid>
        </Grid>

      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
