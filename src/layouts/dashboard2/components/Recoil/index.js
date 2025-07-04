import { atom } from 'recoil';

export const datosVanos = atom({
  key: 'datosVanos',
  default: {
    Cerramiento_asociado: '-',
    Orientacion: '-',
    Anchura: '0',
    Longitud: '0',
    Multiplicador: '1',
    Porcentaje_marco: '20',
    Factor_solar: '0',
    UMarco: '0',
    UVidrio: '0',
  }
});

export const datosRes = atom({
  key: 'datosRes',
  default: {
    message:"No hay datos",
    resultadosTTM:[
      {Piso: ["Todavía no se procesaron datos",0]},
      {Muro: ["Todavía no se procesaron datos",0]},
      {Techo: ["Todavía no se procesaron datos",0]}
    ],
    resultadosInfiltraciones:[
      [{"msg":'Todavía no se procesaron datos'}], // Ventanas
      [{"msg":'Todavía no se procesaron datos'}], // Puertas
    ],
    resultadosCondensacion:[
      {"msg":['Todavía no se procesaron datos',""]}
    ],
    resultadosIncidencia:[
      {"msg":['Todavía no se procesaron datos',""]}
    ],
  }, // Valor inicial
});


export const datosEnvolvente = atom({
  key: 'datosEnvolvente',
  default: [
    {
       "id":0,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro Este",
       "tipo":"Muro en contacto con el aire",
       "familia":"Muro",
       "longitud":2.7,
       "anchura":6,
       "area":16.200,
       "transmitancia":0.7,
       "otros":{
          "Orientacion":"Este"
       },
       "capas": [
          {
            "nombre":"SOBRECIMIENTOS",      // e.g. "Techo"
            "anchura": 1.71,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 50% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.26",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"ZÓCALO",      // e.g. "Techo"
            "anchura": 2.28,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1. Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"MURO",      // e.g. "Techo"
            "anchura": 8.68,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"MURO 2",      // e.g. "Techo"
            "anchura": 0.57,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"VIGAS",      // e.g. "Techo"
            "anchura": 0.46,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2: Viga collar de madera 3''x2'' (2 piezas) Madera de densidad media",
                "transmitancia": "0.01",
                "resistencia": "0.56",
                "espesor": "0.1",
              },
              {
                "name": "C2.1: Viga collar de madera 3''x2'' (2 piezas) Madera de densidad media",
                "transmitancia": "0.01",
                "resistencia": "0.33",
                "espesor": "0.3",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          }
        ]
    },
    {
       "id":110,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro Este Fraccional",
       "tipo":"Muro en contacto con el aire",
       "familia":"Muro",
       "longitud":2.7,
       "anchura":6,
       "area":16.200,
       "transmitancia":0.7,
       "otros":{
          "Orientacion":"Este"
       },
       "capas": [
          {
            "nombre":"SOBRECIMIENTOS",      // e.g. "Techo"
            "anchura": 0.18,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 50% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.26",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"ZÓCALO",      // e.g. "Techo"
            "anchura": 0.24,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1. Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"MURO",      // e.g. "Techo"
            "anchura": 0.23,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"Ventana",      // e.g. "Techo"
            "anchura": 0.66,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: CONTRAVENTANA",
                "transmitancia": "0.01",
                "resistencia": "0.41",
                "espesor": "0.04",
              },
              {
                "name": "C2. Camara de aire ",
                "transmitancia": "0.01",
                "resistencia": "0.08",
                "espesor": "0.16",
              },
              {
                "name": "C3: MARCO V-01",
                "transmitancia": "0.01",
                "resistencia": "0.19",
                "espesor": "0.028",
              }
            ]
          },
          {
            "nombre":"MURO 2",      // e.g. "Techo"
            "anchura": 0.57,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"VIGAS",      // e.g. "Techo"
            "anchura": 0.46,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2: Viga collar de madera 3''x2'' (2 piezas) Madera de densidad media",
                "transmitancia": "0.01",
                "resistencia": "0.56",
                "espesor": "0.1",
              },
              {
                "name": "C2.1: Viga collar de madera 3''x2'' (2 piezas) Madera de densidad media",
                "transmitancia": "0.01",
                "resistencia": "0.36",
                "espesor": "0.31",
              }
            ]
          }
        ]
    },
    {
       "id":1,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro Norte",
       "tipo":"Muro en contacto con el aire",
       "familia":"Muro",
       "longitud":2.7,
       "anchura":6,
       "area":16.200,
       "transmitancia":0.7,
       "otros":{
          "Orientacion":"Norte"
       },
       "capas": [
          {
            "nombre":"SOBRECIMIENTOS",      // e.g. "Techo"
            "anchura": 1.58,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 50% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.26",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"ZÓCALO",      // e.g. "Techo"
            "anchura": 2.10,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1. Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"MURO",      // e.g. "Techo"
            "anchura": 7.98,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"MURO 2",      // e.g. "Techo"
            "anchura": 0.53,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"VIGAS",      // e.g. "Techo"
            "anchura": 0.42,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2: Viga collar de madera 3''x2'' (2 piezas) Madera de densidad media",
                "transmitancia": "0.01",
                "resistencia": "0.56",
                "espesor": "0.1",
              },
              {
                "name": "C2.1: Viga collar de madera 3''x2'' (2 piezas) Madera de densidad media",
                "transmitancia": "0.01",
                "resistencia": "0.33",
                "espesor": "0.3",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"Muro triangular",      // e.g. "Techo"
            "anchura": 2.73,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          }
        ]
    },
    {
       "id":2,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro Oeste",
       "tipo":"Muro en contacto con el aire",
       "familia":"Muro",
       "longitud":2.7,
       "anchura":5.5,
       "area":14.850,
       "transmitancia":0.7,
       "otros":{
          "Orientacion":"Oeste"
       },
       "capas": [
          {
            "nombre":"SOBRECIMIENTOS",      // e.g. "Techo"
            "anchura": 1.71,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 50% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.26",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"ZÓCALO",      // e.g. "Techo"
            "anchura": 2.28,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1. Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"MURO",      // e.g. "Techo"
            "anchura": 8.66,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"MURO 2",      // e.g. "Techo"
            "anchura": 0.57,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"VIGAS",      // e.g. "Techo"
            "anchura": 0.46,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2: Viga collar de madera 3''x2'' (2 piezas) Madera de densidad media",
                "transmitancia": "0.01",
                "resistencia": "0.56",
                "espesor": "0.1",
              },
              {
                "name": "C2.1: Viga collar de madera 3''x2'' (2 piezas) Madera de densidad media",
                "transmitancia": "0.01",
                "resistencia": "0.33",
                "espesor": "0.3",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          }
        ]
    },
    {
       "id":3,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro Sur",
       "tipo":"Muro en contacto con el aire",
       "familia":"Muro",
       "longitud":2.7,
       "anchura":6,
       "area":16.200,
       "transmitancia":0.7,
       "otros":{
          "Orientacion":"Sur"
       },
       "capas": [
          {
            "nombre":"SOBRECIMIENTOS",      // e.g. "Techo"
            "anchura": 0.83,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 50% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.26",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"ZÓCALO",      // e.g. "Techo"
            "anchura": 1.10,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1. Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"MURO",      // e.g. "Techo"
            "anchura": 4.18,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"MURO 2",      // e.g. "Techo"
            "anchura": 0.28,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"VIGAS",      // e.g. "Techo"
            "anchura": 0.22,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2: Viga collar de madera 3''x2'' (2 piezas) Madera de densidad media",
                "transmitancia": "0.01",
                "resistencia": "0.56",
                "espesor": "0.1",
              },
              {
                "name": "C2.1: Viga collar de madera 3''x2'' (2 piezas) Madera de densidad media",
                "transmitancia": "0.01",
                "resistencia": "0.33",
                "espesor": "0.3",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"MURO TRIANGULAR",      // e.g. "Techo"
            "anchura": 2.48,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
        ]
    },
    {
       "id":4,
       "color":"dark",
       "icon":"ni ni-bold-up",
       "name":"Techo principal",
       "tipo":"Techo en contacto con el aire",
       "familia":"Techo",
       "longitud":5.5,
       "anchura":6,
       "area":33.000,
       "transmitancia":0.3,
       "otros":{
          
       }
    },
    {
       "id":5,
       "color":"dark",
       "icon":"ni ni-ungroup",
       "name":"Piso principal",
       "tipo":"Piso en contacto con el terreno",
       "familia":"Piso",
       "longitud":5.5,
       "anchura":6,
       "area":33.000,
       "transmitancia":1,
       "otros":{
          
       }
    },
    {
       "id":6,
       "color":"dark",
       "icon":"ni ni-image",
       "name":"Ventana",
       "tipo":"Ventana",
       "familia":"Vano",
       "longitud":1.2,
       "anchura":1.2,
       "area":2.88,
       "transmitancia":32.8,
       "otros":{
          "cerramiento_asociado":"-",
          "familia_c_a":"Muro",
          "orientacion":"-",
          "porcentaje_marco":20,
          "factor_solar":0.85,
          "multiplicador":2,
          "u_marco":3,
          "u_vidrio":2.8,
          "es_control_solar":true,
          "es_doble":false,
          "permeabilidad":100,
          "absortividad":"3",
          "es_proyectante":true,
          "es_hermetico":true,
          "es_silicona":false,
          "es_burletes":false
       }
    },
    {
       "id":7,
       "color":"dark",
       "icon":"ni ni-image",
       "name":"Puerta",
       "tipo":"Puerta",
       "familia":"Vano",
       "longitud":2,
       "anchura":0.9,
       "area":1.8,
       "transmitancia":3.5,
       "otros":{
          "cerramiento_asociado":"-",
          "familia_c_a":"Muro",
          "orientacion":"-",
          "porcentaje_marco":100,
          "factor_solar":0,
          "multiplicador":1,
          "u_marco":3.5,
          "u_vidrio":0,
          "es_control_solar":false,
          "es_doble":false,
          "permeabilidad":100,
          "absortividad":"3",
          "es_proyectante":true,
          "es_hermetico":true,
          "es_silicona":false,
          "es_burletes":false
       }
    },
    {
       "id":8,
       "color":"dark",
       "icon":"ni ni-image",
       "name":"Lucernario",
       "tipo":"Lucernario",
       "familia":"Vano",
       "longitud":1,
       "anchura":1,
       "area":1,
       "transmitancia":3.02,
       "otros":{
          "cerramiento_asociado":"-",
          "familia_c_a":"-",
          "orientacion":"-",
          "porcentaje_marco":10,
          "factor_solar":0.85,
          "multiplicador":1,
          "u_marco":3,
          "u_vidrio":2.8,
          "es_control_solar":false,
          "es_doble":false,
          "permeabilidad":100,
          "absortividad":"3",
          "es_proyectante":true,
          "es_hermetico":true,
          "es_silicona":false,
          "es_burletes":false
       }
    }
 ], // Valor inicial
});
export const capasElemento = atom({
  key: 'capasElemento',
  default: [
          /* {
            "nombre":"SOBRECIMIENTOS",      // e.g. "Techo"
            "anchura": 1.71,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 50% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.26",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"ZÓCALO",      // e.g. "Techo"
            "anchura": 2.28,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1. Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"MURO",      // e.g. "Techo"
            "anchura": 8.68,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"MURO 2",      // e.g. "Techo"
            "anchura": 0.57,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2. Adobe ",
                "transmitancia": "0.01",
                "resistencia": "0.44",
                "espesor": "0.40",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"VIGAS",      // e.g. "Techo"
            "anchura": 0.46,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Enlucido con yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              },
              {
                "name": "C2: Viga collar de madera 3''x2'' (2 piezas) Madera de densidad media",
                "transmitancia": "0.01",
                "resistencia": "0.56",
                "espesor": "0.1",
              },
              {
                "name": "C2.1: Viga collar de madera 3''x2'' (2 piezas) Madera de densidad media",
                "transmitancia": "0.01",
                "resistencia": "0.33",
                "espesor": "0.3",
              },
              {
                "name": "C3: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          } */
       ], // Valor inicial
});

export const valsEditar = atom({
  key: 'valsEditar',
  default: {}, // Valor inicial
});

// DATOS DE LOS MATERIALES DE LA BD
export const datosMateriales = atom({
  key: 'datosMateriales',
  default: {}, // Valor inicial
});
export const loadingMats= atom({
  key: 'loadingMats',
  default: false
});

// Transmitancia del cerramiento, calculado por capas
export const transmCerramiento = atom({
  key: 'transmCerramiento',
  default: 0
});
// Panel de seleccion de materiales del cerramiento
export const activarCapas = atom({
  key: 'activarCapas',
  default: true
});
// Estado inicial del select de cada elemtno de la envolvente
export const estadoSelect = atom({
  key: 'estadoSelect',
  default: "Conocida"
});


// Valores iniciales de la primer interfaz
export const direccionVivienda= atom({
  key: 'direccionVivienda',
  default: {
    departamento: "Cusco",
    provincia: "Canas",
    distrito: "Langui",
    altitud: 4035,
    direccion: "..., Provincia de Canas, Cusco, Perú"
  }
});
export const valoresDatosGenerales = atom({
  key: 'valoresDatosGenerales',
  default: {
    "Nombre de proyecto": "Prueba 1",
    "Tipo de vivienda": "Unifamiliar",
    "Departamento": "Cusco",
    "Provincia": "Canas",
    "Distrito o Villa": "Langui",
    "Dirección o Dirección de referencia": "..., Provincia de Canas, Cusco, Perú",
    "Altura sobre el nivel del mar (m)": "4035",
    "Superficie útil habitable (m²)":"33",
    "Altura libre de la planta (m)":"2.7",
    "Número de plantas habitables":"1",
    "Ventilación de la vivienda (ren/h)":"2.1",
    "Caudal de aire a renovar (m³/h)":"3.4",
    "Masas en la pariciones internas":"3",
    "Cantidad de personas en la vivienda":"4",
  }
});

// Valores de la demanda 
export const datosResDemandaCal = atom({
  key: 'datosResDemandaCal',
  default: {
    "Pérdidas térmicas de la envolvente": "2200 W",
    "Pérdidas por infiltración": "600 W",
    "Pérdidas por ventilación": "350 W",
    "Ganancias internas": "900 W",
    "Ganancias solares": "700 W",
    "Perdidas totales": "2200 W + 600 W + 350 W = 3150 W",
    "Ganancias totales": "900 W + 700 W = 1600 W",
    "Pérdidas y ganancias térmicas para un día típico de invierno en W": "3150 W − 1600 W = 1550 W",
    "QCAL (energía)": "1550 W × 24 h = 37.2 kWh",
    "Conclusión": "Demanda de calefacción (QCAL) es de 37.2 kWh para un día típico de invierno"
  }
});
export const datosResDemandaRef = atom({
  key: 'datosResDemandaRef',
  default: {
    "Pérdidas térmicas de la envolvente": "1800 W",
    "Pérdidas por ventilación": "450 W",
    "Ganancias internas": "1000 W",
    "Ganancias solares": "2700 W",
    "Perdidas totales": "1800 W + 450 W = 2250 W",
    "Ganancias totales": "1000 W + 2700 W = 3700 W",
    "Pérdidas y ganancias térmicas para un día típico de verano en W": "2250 W - 3700 W = -1450 W",
    "QCAL (energía)": "1450 W × 24 h = 34.8 kWh",
    "Conclusión": "Demanda de refrigeración (QCAL) es de 34.8 kWh para un día típico de verano"
  }
});