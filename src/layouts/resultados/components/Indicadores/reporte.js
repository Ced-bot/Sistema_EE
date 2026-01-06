import React, { useState } from 'react';
import { Card, Button, message, Table, Tabs } from 'antd';
import * as XLSX from 'xlsx-js-style';
// RECOIL
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { datosRes, datosEnvolvente, datosResDemandaCal, datosResDemandaRef, valoresDatosGenerales } from 'layouts/dashboard2/components/Recoil';

const DatosResultados = () => {
    // Recoil
    const resultados = useRecoilValue(datosRes);
    const datosEnv = useRecoilValue(datosEnvolvente);
    const datosResDemandaCalR = useRecoilValue(datosResDemandaCal);
    const datosResDemandaRefR = useRecoilValue(datosResDemandaRef);
    const valoresDatosGeneralesR = useRecoilValue(valoresDatosGenerales);

    /////////////////////////////////////////////////////////////////////////
    //// Derterminar los resultados de la evaluacion de la norma EM 110  ////
    /////////////////////////////////////////////////////////////////////////
    let arrCumplen = [];
    let arrNoCumplen = [];
    let contNoCumplen = 0;
    const resultadosEM110 = {};
    resultados["resultadosTTM"].forEach(dictionary => {
        for (const key in dictionary) {
            let Nombre = key, ext1 = "Valor de TTM: "+ (dictionary[key][1] === "Nulo"? "No hay datos": (dictionary[key][1]+ " W/m²K"));
            if (dictionary[key][0] === "Si cumplen") { arrCumplen.push([Nombre,ext1]); }
            else if (dictionary[key][0] != "Todavía no se procesaron datos"){ arrNoCumplen.push([Nombre,ext1]); }
        }
    });
    resultadosEM110["Transmitancia Térmica Maxima"] = { "cumplen": arrCumplen, "noCumplen": arrNoCumplen}; 
    contNoCumplen +=  arrNoCumplen.length;
    arrCumplen = []; arrNoCumplen = [];
    // Revisar que elementos cumplen o no con la norma 
    const ventPuer = [...resultados["resultadosInfiltraciones"][0], ...resultados["resultadosInfiltraciones"][1]];
    ventPuer.forEach(dictionary => {
        for (const key in dictionary) {
        // Obtener los datos adicionales de los elementos
        let Nombre = "--", ext1 = "";
        datosEnv.forEach(cerr => {
            if (cerr["id"].toString() === key) {
            Nombre = cerr["name"];
            let otros = cerr["otros"];
            if (cerr["tipo"] === "Ventana"){ext1 = (otros["es_proyectante"]? "Es proyectante: Si":"Es proyectante: No") +", "+ (otros["es_hermetico"]? "Es hermética: Si":"Es hermética: No");}
            else{ext1 = (otros["es_silicona"]? "Sellado de silicona: Si":"Sellado de silicona: No") +", "+ (otros["es_burletes"]? "Tiene burletes: Si":"Tiene burletes: No");}
            }
        });
        // Colocar los datos donde corresponden
        if (dictionary[key] === "Si cumple" & key != "msg") { arrCumplen.push([Nombre,ext1]); }
        else if (key != "msg"){ arrNoCumplen.push([Nombre,ext1]); }
        }
    });
    resultadosEM110["Infiltraciones no deseada de aire"] = { "cumplen": arrCumplen, "noCumplen": arrNoCumplen}; 
    
    contNoCumplen +=  arrNoCumplen.length;
    arrCumplen = []; arrNoCumplen = [];
    resultados["resultadosCondensacion"].forEach(dictionary => {
        for (const key in dictionary) {
        let Nombre = "--",  ext1 = dictionary[key][1];
        datosEnv.forEach(cerr => {
            if (cerr["id"].toString() === key) { Nombre = cerr["name"]; }
        });
        // Colocar los datos donde corresponden
        if (dictionary[key][0] === "Si cumple" & key != "msg") { arrCumplen.push([Nombre,ext1]); }
        else if (key != "msg"){ arrNoCumplen.push([Nombre,ext1]); }
        }
    });
    resultadosEM110["Riesgo de condensación superficial"] = { "cumplen": arrCumplen, "noCumplen": arrNoCumplen}; 
    
    contNoCumplen +=  arrNoCumplen.length;
    arrCumplen = []; arrNoCumplen = [];
    resultados["resultadosIncidencia"].forEach(dictionary => {
        for (const key in dictionary) {
        let Nombre = "--",  ext1 = dictionary[key][1];
        datosEnv.forEach(cerr => {
            if (cerr["id"].toString() === key) { Nombre = cerr["name"]; }
        });
        // Colocar los datos donde corresponden
        if (dictionary[key][0] === "Si cumple" & key != "msg") { arrCumplen.push([Nombre,ext1]); }
        else if (key != "msg"){ arrNoCumplen.push([Nombre,ext1]); }
        }
    });
    resultadosEM110["Incidencia solar en los vanos"] = { "cumplen": arrCumplen, "noCumplen": arrNoCumplen};
    
    contNoCumplen +=  arrNoCumplen.length;
    if(contNoCumplen > 0){
      resultadosEM110["Resultado de la evaluación EM.110"] = { "cumplen": [], "noCumplen":  [['', 'No se cumple con lo establecido en la norma.']]};
    }
    else{
      resultadosEM110["Resultado de la evaluación EM.110"] = { "cumplen": [['', 'Se cumple con lo establecido en la norma.']], "noCumplen":  []};
    }
    //console.log(arrCumplen)
    //console.log( "Contador", contNoCumplen )
    // Datos de resultados (primera hoja)

    const [excelData, setExcelData] = useState(null);
    const [activeTab, setActiveTab] = useState('1');
  
    // Estilo común para datos
    const dataStyle = {
      font: { color: { rgb: "000000" } },
      alignment: { wrapText: true, vertical: "center" },
      border: {
        top: { style: "thin", color: { rgb: "000000" } },
        bottom: { style: "thin", color: { rgb: "000000" } },
        left: { style: "thin", color: { rgb: "000000" } },
        right: { style: "thin", color: { rgb: "000000" } }
      }
    };
  
    const prepareExcelData = () => {
      try {
        const excelStructure = {
          resultados: [],
          elementos: [],
          termicosA: [],
          termicosB: [],
          emplazamiento: [],
        };

        // ===== Preparar datos para la hoja de RESULTADOS =====
        // Encabezados
        excelStructure.resultados.push([
          "Categoría", "Estado", "Elemento", "Detalle"
        ]);

        // Agregar datos de resultados
        Object.keys(resultadosEM110).forEach(category => {
          const { cumplen, noCumplen } = resultadosEM110[category];
          
          if (cumplen.length > 0) {
            cumplen.forEach(row => {
              excelStructure.resultados.push([
                category, "Cumple", row[0], row[1]
              ]);
            });
          }
          
          if (noCumplen.length > 0) {
            noCumplen.forEach(row => {
              excelStructure.resultados.push([
                category, "No Cumple", row[0], row[1]
              ]);
            });
          }
        });
  
        // ===== Preparar datos para la hoja de ELEMENTOS =====
        // Encabezados
        excelStructure.elementos.push([
          "ID", "Nombre", "Tipo", "Familia", "Longitud", "Anchura", "Área", 
          "Transmitancia", "Orientación", "Factor Solar", "U Marco", "U Vidrio", "Multiplicador"
        ]);
  
        // Agregar datos de elementos
        datosEnv.forEach(elem => {
          excelStructure.elementos.push([
            elem.id,
            elem.name,
            elem.tipo,
            elem.familia,
            elem.longitud,
            elem.anchura,
            elem.area,
            elem.transmitancia,
            elem.otros?.orientacion || "-",
            elem.otros?.factor_solar || "-",
            elem.otros?.u_marco || "-",
            elem.otros?.u_vidrio || "-",
            elem.otros?.multiplicador || "-"
          ]);
        });
        
        // ===== Preparar datos para la hoja de RESULTADOS DE DEMANDA =====
        // Encabezados para térmicos
        excelStructure.termicosA.push(["Concepto", "Valor"]);
        // Agregar datos térmicos
        Object.entries(datosResDemandaCalR).forEach(([concepto, valor]) => {
          excelStructure.termicosA.push([concepto, valor]);
        });
        // Encabezados para térmicos
        excelStructure.termicosB.push(["Concepto", "Valor"]);
        // Agregar datos térmicos
        Object.entries(datosResDemandaRefR).forEach(([concepto, valor]) => {
          excelStructure.termicosB.push([concepto, valor]);
        });

        // ===== Preparar datos para la hoja de EMPLAZAMIENTO =====
        // Encabezados para térmicos
        excelStructure.emplazamiento.push(["Concepto", "Valor"]);
        // Agregar datos térmicos
        Object.entries(valoresDatosGeneralesR).forEach(([concepto, valor]) => {
          excelStructure.emplazamiento.push([concepto, valor]);
        });
  
        setExcelData(excelStructure);
        setActiveTab('1');
        message.success('Datos preparados para exportación');
      } catch (error) {
        message.error('Error al preparar los datos');
        console.error(error);
      }
    };
  
    const exportToExcel = () => {
      if (!excelData) {
        message.warning('Primero prepare los datos');
        return;
      }
  
      try {
        
        const wsResultsData = [
          [
            { v: "Categoría", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "4682B4" } } }},
            { v: "Estado", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "4682B4" } } }},
            { v: "Elemento", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "4682B4" } } }},
            { v: "Detalle", s: { font: { bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "4682B4" } } }}
          ],
          ...excelData.resultados.slice(1).map(row => [
            { v: row[0], s: dataStyle },
            { 
              v: row[1], 
              s: { 
                ...dataStyle, 
                font: { 
                  bold: true, 
                  color: { rgb: row[1] === "Cumple" ? "008000" : "FF0000" } 
                } 
              } 
            },
            { v: row[2], s: dataStyle },
            { v: row[3], s: dataStyle }
          ])
        ];
        const wsElementsData = [
          excelData.elementos[0].map(header => ({
            v: header,
            s: {
              font: { bold: true, color: { rgb: "FFFFFF" } },
              fill: { fgColor: { rgb: "5D8AA8" } },
              alignment: { wrapText: true, vertical: "center", horizontal: "center" }
            }
          })),
          ...excelData.elementos.slice(1).map(row => 
            row.map(cell => ({ v: cell, s: dataStyle }))
          )
        ];
        const wsTermicosData = (llave, titulo1,  titulo2) => {
          return  [
            [
              { v: titulo1, s: { 
                font: { bold: true, color: { rgb: "FFFFFF" } }, 
                fill: { fgColor: { rgb: "8FBC8F" } }, // Verde bosque
                alignment: { wrapText: true, vertical: "center", horizontal: "center" }
              }},
              { v: titulo2, s: { 
                font: { bold: true, color: { rgb: "FFFFFF" } }, 
                fill: { fgColor: { rgb: "8FBC8F" } },
                alignment: { wrapText: true, vertical: "center", horizontal: "center" }
              }}
            ],
            ...excelData[llave].slice(1).map(row => [
              { 
                v: row[0], 
                s: { 
                  ...dataStyle, 
                  font: { bold: true },
                  fill: { fgColor: { rgb: "F0FFF0" } } // Fondo verde claro
                } 
              },
              { 
                v: row[1], 
                s: { 
                  ...dataStyle,
                  alignment: { wrapText: true, horizontal: "left" }
                } 
              }
            ])
          ];
        };

        const wb = XLSX.utils.book_new();
        
        // ===== HOJA DE EMPLAZAMIENTO =====
        const wsEmplazamiento = XLSX.utils.aoa_to_sheet(wsTermicosData("emplazamiento", "Concepto", "Valor"));
        wsEmplazamiento['!cols'] = [
          { wch: 40 }, // Concepto
          { wch: 80 }  // Valor
        ];
        wsEmplazamiento['!freeze'] = { x: 0, y: 1 };
        XLSX.utils.book_append_sheet(wb, wsEmplazamiento, "Emplazamiento");

        // ===== HOJA DE ELEMENTOS =====
        const wsElementos = XLSX.utils.aoa_to_sheet(wsElementsData);
        wsElementos['!cols'] = [
          { wch: 5 }, { wch: 20 }, { wch: 35 }, { wch: 15 }, 
          { wch: 10 }, { wch: 10 }, { wch: 10 }, { wch: 15 },
          { wch: 12 }, { wch: 12 }, { wch: 10 }, { wch: 10 }, { wch: 10 }
        ];
        wsElementos['!freeze'] = { x: 0, y: 1 };
        XLSX.utils.book_append_sheet(wb, wsElementos, "Elementos de la envolvente");

        // ===== HOJA DE RESULTADOS EM110 =====
        const wsResultados = XLSX.utils.aoa_to_sheet(wsResultsData);
        wsResultados['!cols'] = [{ wch: 40 }, { wch: 12 }, { wch: 30 }, { wch: 80 }];
        wsResultados['!freeze'] = { x: 0, y: 1 };
        XLSX.utils.book_append_sheet(wb, wsResultados, "Resultados evaluación EM.110");
  
        
        // ===== HOJA DEMANDA A =====
        const wsTermicosA = XLSX.utils.aoa_to_sheet(wsTermicosData("termicosA", "Concepto", "Valor"));
        wsTermicosA['!cols'] = [
          { wch: 70 }, // Concepto
          { wch: 80 }  // Valor
        ];
        wsTermicosA['!freeze'] = { x: 0, y: 1 };
        XLSX.utils.book_append_sheet(wb, wsTermicosA, "Balance Térmico A");
        
        // ===== HOJA DEMANDA B =====
        const wsTermicosB = XLSX.utils.aoa_to_sheet(wsTermicosData("termicosB", "Concepto", "Valor"));
        wsTermicosB['!cols'] = [
          { wch: 70 }, // Concepto
          { wch: 80 }  // Valor
        ];
        wsTermicosB['!freeze'] = { x: 0, y: 1 };
        XLSX.utils.book_append_sheet(wb, wsTermicosB, "Balance Térmico B");

        ///////////////////////// Exportar el archivo /////////////////////////////////
        XLSX.writeFile(wb, "Resultados_Completos.xlsx");
        message.success('Archivo exportado con 2 hojas correctamente');
      } catch (error) {
        message.error('Error al exportar el archivo');
        console.error(error);
      }
    };
  
    // Columnas para la tabla de resultados
    const resultadosColumns = [
      { title: 'Categoría', dataIndex: '0', key: '0' },
      { title: 'Estado', dataIndex: '1', key: '1',
        render: (text) => <span style={{ color: text === 'Cumple' ? 'green' : 'red', fontWeight: 'bold' }}>{text}</span>
      },
      { title: 'Elemento', dataIndex: '2', key: '2' },
      { title: 'Detalle', dataIndex: '3', key: '3' }
    ];
  
    // Columnas para la tabla de elementos
    const elementosColumns = [
      { title: 'ID', dataIndex: '0', key: '0' },
      { title: 'Nombre', dataIndex: '1', key: '1' },
      { title: 'Tipo', dataIndex: '2', key: '2' },
      { title: 'Familia', dataIndex: '3', key: '3' },
      { title: 'Longitud', dataIndex: '4', key: '4' },
      { title: 'Anchura', dataIndex: '5', key: '5' },
      { title: 'Área', dataIndex: '6', key: '6' },
      { title: 'Transmitancia', dataIndex: '7', key: '7' },
      { title: 'Orientación', dataIndex: '8', key: '8' },
      { title: 'Factor Solar', dataIndex: '9', key: '9' },
      { title: 'U Marco', dataIndex: '10', key: '10' },
      { title: 'U Vidrio', dataIndex: '11', key: '11' },
      { title: 'multiplicador', dataIndex: '12', key: '12' }
    ];
  
    // Columnas para la tabla de demanda
    const termicosColumns = [
      { 
        title: 'Concepto', 
        dataIndex: '0', 
        key: '0',
        render: (text) => <span style={{ fontWeight: 'bold' }}>{text}</span>
      },
      { 
        title: 'Valor', 
        dataIndex: '1', 
        key: '1',
        render: (text) => {
          // Resaltar valores importantes
          try{
            const newText =  text.toString();
            if(newText.includes("Demanda") || newText.includes("QCAL")) {
              return <span style={{ color: '#1890ff', fontWeight: 'bold' }}>{newText}</span>;
            }
            return newText;
          }
          catch(e){
            console.log(e)
          }
        }
      }
    ];
    return (
      <Card id="delete-account">
        <div style={{ marginBottom: 16 }}>
          <Button 
            type="primary" 
            onClick={prepareExcelData}
            style={{ marginRight: 8 }}
          >
            Preparar Datos
          </Button>
          <Button 
            type="primary" 
            onClick={exportToExcel}
            disabled={!excelData}
          >
            Exportar a Excel (2 hojas)
          </Button>
        </div>
  
        {excelData && (
          <Tabs activeKey={activeTab} onChange={setActiveTab}>
            <Tabs.TabPane tab="Emplazamiento" key="1">
              <Table
                columns={termicosColumns}
                dataSource={excelData.emplazamiento.slice(1)}
                rowKey={(record, index) => index}
                pagination={false}
                scroll={{ x: true }}
                bordered
                size="small"
                style={{ width: '100%' }}
              />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Elementos Envolvente" key="2">
              <Table
                columns={elementosColumns}
                dataSource={excelData.elementos.slice(1)}
                rowKey={(record, index) => index}
                pagination={false}
                scroll={{ x: true }}
                bordered
                size="small"
              />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Resultados EM.110" key="3">
              <Table
                columns={resultadosColumns}
                dataSource={excelData.resultados.slice(1)}
                rowKey={(record, index) => index}
                pagination={false}
                scroll={{ x: true }}
                bordered
                size="small"
              />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Balance Térmico A" key="4">
              <Table
                columns={termicosColumns}
                dataSource={excelData.termicosA.slice(1)}
                rowKey={(record, index) => index}
                pagination={false}
                scroll={{ x: true }}
                bordered
                size="small"
                style={{ width: '100%' }}
              />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Balance Térmico B" key="5">
              <Table
                columns={termicosColumns}
                dataSource={excelData.termicosB.slice(1)}
                rowKey={(record, index) => index}
                pagination={false}
                scroll={{ x: true }}
                bordered
                size="small"
                style={{ width: '100%' }}
              />
            </Tabs.TabPane>
          </Tabs>
        )}
      </Card>
    );
  };
  
  export default DatosResultados;