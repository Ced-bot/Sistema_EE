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

import { useState, useRef, useEffect } from "react";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArgonAlert from "components/ArgonAlert";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

import Listas from "layouts/HFM100/components/Listas";
import Buscar from "layouts/HFM100/components/Buscar";
import Tabla from "layouts/HFM100/components/tablaElementos";
import ASD from "layouts/HFM100/data/asd";
import * as XLSX from 'xlsx';
// Data
import authorsTableData from "layouts/HFM100/data/authorsTableData";
import projectsTableData from "layouts/HFM100/data/projectsTableData";
// Graficos
import ScatterChart from "layouts/HFM100/components/Graficos/scatter";
import DonutChart from "layouts/HFM100/components/Graficos/dona";
//
import axios from 'axios';
import { Alert, Space } from 'antd';

// Recoil
import { useRecoilState } from 'recoil';
import { elementosHFM100, loadingTabla } from 'layouts/HFM100/components/Recoil';

function Tables() {
  const [excelData, setExcelData] = useState(null);
  const [elemHFM100, setElemHFM100] = useRecoilState(elementosHFM100);
  const [loadTabla, setLoadTabla] = useRecoilState(loadingTabla);

  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleClick_carga = () => {
    fileInputRef.current.click();
  };


  // Leer archivos excel para guardar los datos
  const handleFileChange = (e) => {
    try {
      const file = e.target.files[0];
      
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const data = event.target.result;
          const workbook = XLSX.read(data, { type: 'binary' });

          const sheetData = {};

          workbook.SheetNames.forEach((sheetName) => {
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            sheetData[sheetName] = jsonData;
          });

          setExcelData(sheetData);

          
          setFileName(file.name);
        };
        reader.readAsBinaryString(file);
      };
    } catch (error) {
      alert("Error");
      console.error(error);
    }
  };
  // Leer los datos obtenidos del excel
  const subirDatos = async () => {
    try {
      let guardar = [];
      // Guardar los datos de los archivos excel
      for (let i = 1; i < excelData["Summary"].length; i++) {
        const timestamp = new Date().getTime();
        const numeroAleatorio = Math.random() * 1000000;
        const identificadorUnico = `${timestamp}-${numeroAleatorio}`;
        // HOJA DE RESUMEN
        //"registro_id": identificadorUnico.toString(),
        let dicc = {
          "nombreMuestra": excelData["Summary"][i][0].toString(),
          "tempSuperior": excelData["Summary"][i][1].toString(),
          "tempInferior": excelData["Summary"][i][2].toString(),
          "condTermica": excelData["Summary"][i][4].toString(),
          "espesor": excelData["Summary"][i][6].toString(),
          "fechaInicio": excelData["Summary"][i][7].toString(),
          "fechaFin": excelData["Summary"][i][8].toString(),
          "duracion": excelData["Summary"][i][9].toString(),
        };
        dicc["registro_id"] = dicc["nombreMuestra"]+dicc["tempSuperior"]+dicc["tempInferior"]+dicc["condTermica"]+dicc["espesor"];

        // HOJAS DE DETALLES
        const detHoja = excelData["MeanTemp"+i];
        // BLOQUES
        let bloque1 = [], bloque2 = [], bloque3 = [], bloque4 = [];
        let j = 14 // fila desde donde comienzan los bloques
        while (detHoja[j+1][0] == null) {
          bloque1.push(detHoja[j][1]); //detHoja[j][1] !== null? detHoja[j][1] : 0;
          bloque2.push(detHoja[j][2]);
          bloque3.push(detHoja[j][3]);
          bloque4.push(detHoja[j][4]);
          j = j + 1;
        };
        dicc["bloques"] = {
            "tempSup": bloque1.toString(),
            "tempInf": bloque2.toString(),
            "flujoCalor": bloque3.toString(),
            "condTermica": bloque4.toString()
        };

        // DETALLES
        dicc["instrumento"] = detHoja[1][1].toString();
        dicc["softVersion"] = detHoja[2][1].toString();
        dicc["firmVersion"] = detHoja[3][1].toString();
        dicc["valSujecion"] = detHoja[7][1].toString();
        dicc["metSujecion"] = detHoja[8][1].toString();
        dicc["matCalibracion"] = detHoja[10][1].toString();
        dicc["calibracion_id"] = detHoja[11][1].toString();
        dicc["facCalibracion"] = detHoja[j+5][1].toString(); // j celdas de los bloques

        //TABLAS
        let tabla1 = [], tabla2 = [], tabla3 = [], tabla4  = [];
        for (let h = 0; h < detHoja.length; h++) {
          tabla1.push(detHoja[h][26]);
          tabla2.push(detHoja[h][27]);
          tabla3.push(detHoja[h][28]);
          tabla4.push(detHoja[h][29]);
        };
        dicc["tablas"] = {
            "tiempo" : tabla1.toString(),
            "tempSuperior" : tabla2.toString(),
            "tempInferior" : tabla3.toString(),
            "flujo" : tabla4.toString(),
        };

        guardar.push(dicc);
      }

      console.log("Los datos se enviaron", guardar);
      axios.post('https://o3briswil6.execute-api.sa-east-1.amazonaws.com/default/GuardarRegistrosHFM100', {
        datos: guardar,
      },
      // Headers
      {})
      .then((response) => {
        // La respuesta de la función Lambda se guarda en el estado 'data'
        //setData(response.data);
        console.log("Los datos se procesaron");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Hubo un error al enviar los datos a Lambda:", error);
      });
    } catch (error) {
      // Manejo de la excepción
      //alert('Se produjo un error: ' + error.message);
      setShowAlert(true);
      //console.error(error);
    }
  }
  ///////////////////////////////////////////////////////////////////////
  // Listar todos los datos de la BD
  useEffect(() => {
    if(!loadTabla){
      // Tu código para activar un evento cuando el componente se carga
      try {
        //setLoadTabla(true);
        axios.get('https://ibplcukfz7.execute-api.sa-east-1.amazonaws.com/default/LeerRegistrosHFM100')
        .then((response) => {
          // La respuesta de la función Lambda se guarda en el estado 'data'
          //setData(response.data);
          console.log(response.data);
          setElemHFM100(response.data.data);
          setLoadTabla(true);
        })
        .catch((error) => {
          console.error("Hubo un error en la lectura de los datos:", error);
        });
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  const [opcionDif, setOpcionDif] = useState(0);

  return (
    <DashboardLayout>
      {/* Alerta de error*/}
      {showAlert && (  
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Alert
            style={{ position: "fixed", marginTop: '156px', zIndex: 2 }}
            message="Error"
            description="El archivo no tienen el formato correcto."
            type="error"
            showIcon
            closable
            afterClose={() => {setShowAlert(false);}} 
          />
        </div>
      )}

      <DashboardNavbar />
      <ArgonBox py={3}>

        <ArgonBox mb={3}>
          <Card>

            {/* Primera fila de elmentos */}
            <ArgonBox p={2} style={{ marginLeft: '8px', marginRight: '8px', marginTop: '6px'}}>
              <Grid container spacing={3}>
                <Grid item xs={5}>
                  <Listas setOpcionDif={setOpcionDif} />
                </Grid>
                {/* <Grid item>
                  <Buscar />
                </Grid> */}
                <Grid item  style={{ marginLeft: 'auto' }}>

                  <input type="file" id="fileInput" ref={fileInputRef} accept=".xlsx" onChange={handleFileChange} style={{ marginRight: '18px',  display: 'none'}} />
                  <ArgonButton onClick={handleClick_carga}  variant="gradient" color="info"  >
                    <Icon sx={{ fontWeight: "bold" }}>upload</Icon>
                    &nbsp;Seleccionar Archivo
                  </ArgonButton>
                  
                  <ArgonTypography variant="overline" style={{ marginRight: '8px', marginLeft: '8px'}}>
                    {fileName.length > 0 ? 
                      fileName.length > 25 ? fileName.substring(0, 22) + '...' : fileName:
                      <>Sin archivos seleccionados</>}
                  </ArgonTypography>

                  <ArgonButton variant="gradient" color="info"  onClick={subirDatos}>
                    <Icon fontSize="large" sx={{ fontWeight: "bold" }}>cloud_done</Icon>
                    &nbsp;Almacenar elemento
                  </ArgonButton>

                </Grid>
              </Grid>
            </ArgonBox>

            {/* Tabla de elementos*/}
            <ArgonBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
              p={2} style={{ marginLeft: '13px', marginRight: '13px'}}
            >
              {/* <TablaElementos columns={columns} rows={rows} /> */}
              <Tabla />
            </ArgonBox>
          </Card>
        </ArgonBox>

        <ArgonBox mb={3}>
          <Grid container spacing={3} >
            {/* Información de los indicadores y sus detalles */}
            <Grid item xs={12} md={7}>
              <ScatterChart />
            </Grid>
            <Grid item xs={12} md={5}>
              <DonutChart />
            </Grid>
          </Grid>
        </ArgonBox>

      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
