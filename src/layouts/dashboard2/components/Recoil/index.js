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

// DATOS DE ENVOLVENTE ADOBE
export const datosEnvolventeVA = atom({
  key: 'datosEnvolventeVA',
  default: [], // Valor inicial
});

// DATOS DE ENVOLVENTE ADOBE
export const datosEnvolventeAD = atom({
  key: 'datosEnvolventeAD',
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
       "id":1,
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
            "anchura": 0.06,
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
            "anchura": 0.06,
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
       "id":2,
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
       "id":3,
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
       "id":4,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro Oeste Fraccional",
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
            "anchura": 0.06,
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
            "anchura": 0.06,
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
       "id":5,
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
       "id":6,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro Sur Fraccional 1",
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
            "anchura": 0.25,
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
            "anchura": 0.33,
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
            "anchura": 0.32,
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
            "anchura": 0.08,
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
            "anchura": 0.08,
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
            "nombre":"Ventana",      // e.g. "Techo"
            "anchura": 0.91,
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
        ]
    },
    {
       "id":7,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro Sur Fraccional 2",
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
            "anchura": 0.13,
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
                "resistencia": "0.53",
                "espesor": "0.80",
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
            "anchura": 0.17,
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
                "resistencia": "0.89",
                "espesor": "0.8",
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
            "anchura": 0.64,
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
                "resistencia": "0.89",
                "espesor": "0.8",
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
            "anchura": 0.04,
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
            "anchura": 0.03,
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
                "resistencia": "1.12",
                "espesor": "0.2",
              },
              {
                "name": "C2.1: Viga collar de madera 3''x2'' (2 piezas) Madera de densidad media",
                "transmitancia": "0.01",
                "resistencia": "0.66",
                "espesor": "0.6",
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
            "anchura": 0.39,
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
                "resistencia": "0.89",
                "espesor": "0.8",
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
       "id":8,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro Sur Fraccional 3 Puerta",
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
            "nombre":"VIGAS",      // e.g. "Techo"
            "anchura": 0.21,
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
            "nombre":"PUERTA",      // e.g. "Techo"
            "anchura": 1.74,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Triplay fenólico de 6.5mm (3 capas)",
                "transmitancia": "0.01",
                "resistencia": "0.05",
                "espesor": "0.01",
              },
              {
                "name": "C2. Cmara de aire sin ventilar ",
                "transmitancia": "0.01",
                "resistencia": "0.17",
                "espesor": "0.30",
              },
              {
                "name": "C3: Triplay fenólico de 6.5mm (3 capas)",
                "transmitancia": "0.01",
                "resistencia": "0.05",
                "espesor": "0.01",
              }
            ]
          },
        ]
    },

    {
       "id":9,
       "color":"dark",
       "icon":"ni ni-ungroup",
       "name":"Techo fraccional 0",
       "tipo":"Techo en contacto con el aire",
       "familia":"Techo",
       "longitud":5.5,
       "anchura":6,
       "area":33.000,
       "transmitancia":1,
       "otros":{
          "Orientacion": "Este",
          "Te_eff": 30.23 
       },
       "capas": [
          {
            "nombre":"TECHO 1",      // e.g. "Techo"
            "anchura": 44.21,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Calamina plancha ondulada galvanizada de 11 canales",
                "transmitancia": "0.01",
                "resistencia": "0.00",
                "espesor": "0.0",
              },
              {
                "name": "C2: Poliestireno expandido",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
            ]
          },
        ]
    },
    {
       "id":10,
       "color":"dark",
       "icon":"ni ni-ungroup",
       "name":"Techo principal",
       "tipo":"Techo en contacto con el aire",
       "familia":"Techo",
       "longitud":5.5,
       "anchura":6,
       "area":33.000,
       "transmitancia":1,
       "otros":{
          "Orientacion": "Oeste",
          "Te_eff": 30.23 
       },
       "capas": [
          {
            "nombre":"TECHO 1",      // e.g. "Techo"
            "anchura": 2.49,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Calamina plancha ondulada galvanizada de 11 canales",
                "transmitancia": "0.01",
                "resistencia": "0.00",
                "espesor": "0.0",
              },
              {
                "name": "C2: Poliestireno expandido",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
            ]
          },
          {
            "nombre":"TECHO 2",      // e.g. "Techo"
            "anchura": 3.3,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Calamina plancha ondulada galvanizada de 11 canales",
                "transmitancia": "0.01",
                "resistencia": "0.00",
                "espesor": "0.0",
              },
              {
                "name": "C2: Poliestireno expandido",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
            ]
          },
          {
            "nombre":"VANO CENITAL: TECHO",      // e.g. "Techo"
            "anchura": 4.43,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Policarbonato ondulado transparente",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.00",
              },
            ]
          },
      ]
    },
    {
       "id":11,
       "color":"dark",
       "icon":"ni ni-ungroup",
       "name":"Techo fraccional 1",
       "tipo":"Techo en contacto con ANH",
       "familia":"Techo",
       "longitud":5.5,
       "anchura":6,
       "area":33.000,
       "transmitancia":1,
       "otros":{
          "aislante":"C",
          "estanqueidad": '1'
       },
       "capas": [
          {
            "nombre":"TECHO",      // e.g. "Techo"
            "anchura": 16.4,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Baldosa vinyl 0.61x0.61m",
                "transmitancia": "0.01",
                "resistencia": "0.02",
                "espesor": "0.01",
              },
            ]
          },
      ]
    },
    {
       "id":12,
       "color":"dark",
       "icon":"ni ni-ungroup",
       "name":"Techo fraccional 2",
       "tipo":"Techo en contacto con ANH",
       "familia":"Techo",
       "longitud":5.5,
       "anchura":6,
       "area":33.000,
       "transmitancia":1,
       "otros":{
          "aislante":"C",
          "estanqueidad": '1'
       },
       "capas": [
          {
            "nombre":"TECHO",      // e.g. "Techo"
            "anchura": 2.24,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Baldosa vinyl 0.61x0.61m",
                "transmitancia": "0.01",
                "resistencia": "0.02",
                "espesor": "0.01",
              },
            ]
          },
          {
            "nombre":"Marco",      // e.g. "Techo"
            "anchura": 0.3,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Tubo de aluminio de 1''x2''",
                "transmitancia": "0.01",
                "resistencia": "0.00",
                "espesor": "0.01",
              },
              {
                "name": "C2: Cámara de aire sin ventilar",
                "transmitancia": "0.01",
                "resistencia": "0.17",
                "espesor": "0.03",
              },
              {
                "name": "C3: Tubo de aluminio de 1''x2''",
                "transmitancia": "0.01",
                "resistencia": "0.00",
                "espesor": "0.01",
              },
            ]
          },
          {
            "nombre":"Acristalamiento",      // e.g. "Techo"
            "anchura": 2.44,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Policarbonato Alveolar de 6mm",
                "transmitancia": "0.01",
                "resistencia": "0.28",
                "espesor": "0.03",
              },
            ]
          },
      ]
    },



    {
       "id":13,
       "color":"dark",
       "icon":"ni ni-ungroup",
       "name":"Piso",
       "tipo":"Pisp en contacto con el suelo",
       "familia":"Piso",
       "longitud":7.24,
       "anchura":6,
       "area":21.3,
       "transmitancia":1,
       "otros":{
          "ancho_aislante": 0.3,
          "resistencia_aislante": 0.0,
          "profundidad": "1"

       },
       "capas": [
          {
            "nombre":"PISO",      // e.g. "Techo"
            "anchura": 21.3,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Aislamiento aire",
                "transmitancia": "0.01",
                "resistencia": "0.0",
                "espesor": "0.3",
              },
              {
                "name": "C2: Piso de cemento pulido",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.08",
              },
              {
                "name": "C3: Cama de piedra e=4''",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.10",
              },
            ]
          }
      ]
    },
    /* {
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
    } */
 ], // Valor inicial
});

// DATOS DE ENVOLVENTE LADRILLO
export const datosEnvolvente = atom({
  key: 'datosEnvolvente',
  default: [
    {
       "id":5,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro Sur S",
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
            "anchura": 1.4,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 30% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.17",
                "espesor": "0.250",
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
            "anchura": 0.92,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1. Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "anchura": 6.86,
            "longitud": 1,
            "elementos": [
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "anchura": 1,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Concreto f'c=175kg/cm2",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
              },
              {
                "name": "C2: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          }
       ]
    },
    {
       "id":6,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro Sur Fraccional Ventana",
       "tipo":"Muro en contacto con el aire",
       "familia":"Muro",
       "longitud":2.7,
       "anchura":6,
       "area":16.200,
       "transmitancia":0.7,
       "otros":{
          "Orientacion":"Sur",
          "factor_solar": 0.30
       },
       "capas": [
          {
            "nombre":"SOBRECIMIENTOS",      // e.g. "Techo"
            "anchura": 0.27,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 30% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.17",
                "espesor": "0.250",
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
            "anchura": 0.18,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1. Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "anchura": 0.49,
            "longitud": 1,
            "elementos": [
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "nombre":"VENTANA",      // e.g. "Techo"
            "anchura": 0.85,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Contraventana V-01 ",
                "transmitancia": "0.01",
                "resistencia": "0.24",
                "espesor": "0.06",
              },
              {
                "name": "C2: Cámara de aire ligeramente ventilada horizontal",
                "transmitancia": "0.01",
                "resistencia": "0.08",
                "espesor": "0.01",
              },
              {
                "name": "C3: Ventana V-01",
                "transmitancia": "0.01",
                "resistencia": "0.17",
                "espesor": "0.03",
              }
            ]
          },
          {
            "nombre":"VIGAS",      // e.g. "Techo"
            "anchura": 0.2,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Concreto f'c=175kg/cm2",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
              },
              {
                "name": "C2: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          }
       ]
    },
    {
       "id":7,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro Sur Fraccional 2 Ventana",
       "tipo":"Muro en contacto con el aire",
       "familia":"Muro",
       "longitud":2.7,
       "anchura":6,
       "area":16.200,
       "transmitancia":0.7,
       "otros":{
          "Orientacion":"Sur",
          "factor_solar": 0.30
       },
       "capas": [
          {
            "nombre":"SOBRECIMIENTOS",      // e.g. "Techo"
            "anchura": 0.41,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 30% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.17",
                "espesor": "0.250",
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
            "anchura": 1.38,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Concreto f'c=175kg/cm2",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
              },
              {
                "name": "C2: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          }
       ]
    },


    {
       "id":8,
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
            "anchura": 1.43,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 30% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.17",
                "espesor": "0.250",
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
            "anchura": 0.94,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1. Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "anchura": 7.02,
            "longitud": 1,
            "elementos": [
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "anchura": 1.02,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Concreto f'c=175kg/cm2",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
              },
              {
                "name": "C2: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"TIMPANO Em",      // e.g. "Techo"
            "anchura": 2.68,
            "longitud": 1,
            "elementos": [
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
       "id":0,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro fraccional Este ",
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
            "anchura": 0.44,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 30% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
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
            "anchura": 1.48,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Concreto f'c=175kg/cm2",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
              },
              {
                "name": "C2: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"TIMPANO Ec",      // e.g. "Techo"
            "anchura": 0.09,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Concreto f'c=175kg/cm2",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
              },
              {
                "name": "C2: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
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
            "anchura": 0.93,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 30% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.17",
                "espesor": "0.250",
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
            "anchura": 0.61,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1. Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "anchura": 4.59,
            "longitud": 1,
            "elementos": [
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "anchura": 0.67,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Concreto f'c=175kg/cm2",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
              },
              {
                "name": "C2: Enlucido de yeso",
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
       "name":"Muro Norte Columna",
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
            "anchura": 0.46,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 30% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.17",
                "espesor": "0.250",
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
            "anchura": 1.58,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Concreto f'c=175kg/cm2",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
              },
              {
                "name": "C2: Enlucido de yeso",
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
       "name":"Muro Norte 2da Fraccion",
       "tipo":"Muro en contacto con el aire",
       "familia":"Muro",
       "longitud":2.7,
       "anchura":5.5,
       "area":14.850,
       "transmitancia":0.7,
       "otros":{
          "Orientacion":"Norte"
       },
       "capas": [
          {
            "nombre":"SOBRECIMIENTOS",      // e.g. "Techo"
            "anchura": 0.43,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 30% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.07",
                "espesor": "0.1",
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
            "anchura": 0.28,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1. Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "anchura": 2.12,
            "longitud": 1,
            "elementos": [
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "anchura": 0.31,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Concreto f'c=175kg/cm2",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
              },
              {
                "name": "C2: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          }
       ]
    },
    {
       "id":4,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro Norte 3ra Fraccion Ventana",
       "tipo":"Muro en contacto con el aire",
       "familia":"Muro",
       "longitud":2.7,
       "anchura":5.5,
       "area":14.850,
       "transmitancia":0.7,
       "otros":{
          "Orientacion":"Norte",
          "factor_solar": 0.30
       },
       "capas": [
          {
            "nombre":"SOBRECIMIENTOS",      // e.g. "Techo"
            "anchura": 0.27,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 30% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.17",
                "espesor": "0.250",
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
            "anchura": 0.18,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1. Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "anchura": 0.49,
            "longitud": 1,
            "elementos": [
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "nombre":"VENTANA",      // e.g. "Techo"
            "anchura": 0.85,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Contraventana V-01 ",
                "transmitancia": "0.01",
                "resistencia": "0.24",
                "espesor": "0.06",
              },
              {
                "name": "C2: Cámara de aire ligeramente ventilada horizontal",
                "transmitancia": "0.01",
                "resistencia": "0.08",
                "espesor": "0.01",
              },
              {
                "name": "C3: Ventana V-01",
                "transmitancia": "0.01",
                "resistencia": "0.17",
                "espesor": "0.03",
              }
            ]
          },
          {
            "nombre":"VIGAS",      // e.g. "Techo"
            "anchura": 0.2,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Concreto f'c=175kg/cm2",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
              },
              {
                "name": "C2: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          }
       ]
    },

    
    {
       "id":9,
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
            "anchura": 0.88,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 30% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.17",
                "espesor": "0.250",
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
            "anchura": 0.58,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1. Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "anchura": 4.3,
            "longitud": 1,
            "elementos": [
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "anchura": 0.63,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Concreto f'c=175kg/cm2",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
              },
              {
                "name": "C2: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"TIMPANO Om",      // e.g. "Techo"
            "anchura": 2.68,
            "longitud": 1,
            "elementos": [
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
       "id":10,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro fraccional Oeste ",
       "tipo":"Muro en contacto con el aire",
       "familia":"Muro",
       "longitud":2.7,
       "anchura":6,
       "area":16.200,
       "transmitancia":0.7,
       "otros":{
          "Orientacion":"Oeste"
       },
       
       "capas": [
          {
            "nombre":"SOBRECIMIENTOS",      // e.g. "Techo"
            "anchura": 0.41,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 30% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
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
            "nombre":"COLUMNAS",      // e.g. "Techo"
            "anchura": 1.38,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Concreto f'c=175kg/cm2",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
              },
              {
                "name": "C2: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"TIMPANO Oc",      // e.g. "Techo"
            "anchura": 0.09,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Concreto f'c=175kg/cm2",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
              },
              {
                "name": "C2: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          }
       ]
    },
    {
       "id":11,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro Oeste 2da Fraccion Puerta",
       "tipo":"Muro en contacto con el aire",
       "familia":"Muro",
       "longitud":2.7,
       "anchura":6,
       "area":16.200,
       "transmitancia":0.7,
       "otros":{
          "Orientacion":"Oeste"
       },
       "capas": [
          {
            "nombre":"VIGAS",      // e.g. "Techo"
            "anchura": 0.23,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Concreto f'c=175kg/cm2",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
              },
              {
                "name": "C2: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"TABLERO",      // e.g. "Techo"
            "anchura": 1.89,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Triplay fenólico de 6.5mm (3 capas)",
                "transmitancia": "0.01",
                "resistencia": "0.05",
                "espesor": "0.01",
              },
              {
                "name": "C2: Cámara de aire sin ventilar",
                "transmitancia": "0.01",
                "resistencia": "0.17",
                "espesor": "0.03",
              },
              {
                "name": "C4: Triplay fenólico de 6.5mm (3 capas)",
                "transmitancia": "0.01",
                "resistencia": "0.05",
                "espesor": "0.01",
              }
            ]
          },
          {
            "nombre":"MARCO DE MADERA LIVIANA",      // e.g. "Techo"
            "anchura": 0.18,
            "longitud": 1,
            "elementos": [
              {
                "name": "MARCO DE MADERA LIVIANA  (0.09x0.032)",
                "transmitancia": "0.01",
                "resistencia": "0.21",
                "espesor": "0.03",
              }
            ]
          }
       ]
    },
    {
       "id":12,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro Oeste 3ra Fraccion Ventana",
       "tipo":"Muro en contacto con el aire",
       "familia":"Muro",
       "longitud":2.7,
       "anchura":5.5,
       "area":14.850,
       "transmitancia":0.7,
       "otros":{
          "Orientacion":"Oeste",
          "factor_solar": 0.30
       },
       "capas": [
          {
            "nombre":"SOBRECIMIENTOS",      // e.g. "Techo"
            "anchura": 0.27,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2. Concreto Simple: Mezcla 1:8 + 30% P.M.",
                "transmitancia": "0.01",
                "resistencia": "0.17",
                "espesor": "0.250",
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
            "anchura": 0.18,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1. Mortero Cemento - Arena 1:3",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.02",
              },
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "anchura": 0.49,
            "longitud": 1,
            "elementos": [
              {
                "name": "C2.1 Ladrillo de medidas variables (ladrillo pandereta)",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
              },
              {
                "name": "C2.2 2 planchas de Poliestireno expandido ",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
              {
                "name": "C2.3 Ladrillo de medidas variables (ladrillo pandereta) ",
                "transmitancia": "0.01",
                "resistencia": "0.23",
                "espesor": "0.1",
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
            "nombre":"VENTANA",      // e.g. "Techo"
            "anchura": 0.85,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Contraventana V-01 ",
                "transmitancia": "0.01",
                "resistencia": "0.24",
                "espesor": "0.06",
              },
              {
                "name": "C2: Cámara de aire ligeramente ventilada horizontal",
                "transmitancia": "0.01",
                "resistencia": "0.08",
                "espesor": "0.01",
              },
              {
                "name": "C3: Ventana V-01",
                "transmitancia": "0.01",
                "resistencia": "0.17",
                "espesor": "0.03",
              }
            ]
          },
          {
            "nombre":"VIGAS",      // e.g. "Techo"
            "anchura": 0.2,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Concreto f'c=175kg/cm2",
                "transmitancia": "0.01",
                "resistencia": "0.15",
                "espesor": "0.250",
              },
              {
                "name": "C2: Enlucido de yeso",
                "transmitancia": "0.01",
                "resistencia": "0.03",
                "espesor": "0.01",
              }
            ]
          }
       ]
    },




    {
       "id":13,
       "color":"dark",
       "icon":"ni ni-ungroup",
       "name":"Techo fraccional 0",
       "tipo":"Techo en contacto con el aire",
       "familia":"Techo",
       "longitud":5.5,
       "anchura":6,
       "area":33.000,
       "transmitancia":1,
       "otros":{
          "Orientacion": "Este",
          "Te_eff": 30.23 
       },
       "capas": [
          {
            "nombre":"TECHO 1",      // e.g. "Techo"
            "anchura": 30.73,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Calamina plancha ondulada galvanizada de 11 canales",
                "transmitancia": "0.01",
                "resistencia": "0.00",
                "espesor": "0.0",
              },
              {
                "name": "C2: Poliestireno expandido",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
            ]
          },
        ]
    },
    {
       "id":14,
       "color":"dark",
       "icon":"ni ni-ungroup",
       "name":"Techo principal",
       "tipo":"Techo en contacto con el aire",
       "familia":"Techo",
       "longitud":5.5,
       "anchura":6,
       "area":33.000,
       "transmitancia":1,
       "otros":{
          "Orientacion": "Oeste",
          "Te_eff": 30.23 
       },
       "capas": [
          {
            "nombre":"TECHO 1",      // e.g. "Techo"
            "anchura": 2.24,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Calamina plancha ondulada galvanizada de 11 canales",
                "transmitancia": "0.01",
                "resistencia": "0.00",
                "espesor": "0.0",
              },
              {
                "name": "C2: Poliestireno expandido",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
            ]
          },
          {
            "nombre":"TECHO 2",      // e.g. "Techo"
            "anchura": 4.9,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Calamina plancha ondulada galvanizada de 11 canales",
                "transmitancia": "0.01",
                "resistencia": "0.00",
                "espesor": "0.0",
              },
              {
                "name": "C2: Poliestireno expandido",
                "transmitancia": "0.01",
                "resistencia": "1.52",
                "espesor": "0.05",
              },
            ]
          },
          {
            "nombre":"VANO CENITAL: TECHO",      // e.g. "Techo"
            "anchura": 2.52,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Policarbonato ondulado transparente",
                "transmitancia": "0.01",
                "resistencia": "0.01",
                "espesor": "0.00",
              },
            ]
          },
      ]
    },
    {
       "id":15,
       "color":"dark",
       "icon":"ni ni-ungroup",
       "name":"Techo fraccional 1",
       "tipo":"Techo en contacto con ANH",
       "familia":"Techo",
       "longitud":5.5,
       "anchura":6,
       "area":33.000,
       "transmitancia":1,
       "otros":{
          "aislante":"C",
          "estanqueidad": '1'
       },
       "capas": [
          {
            "nombre":"TECHO",      // e.g. "Techo"
            "anchura": 15.42,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Baldosa vinyl 0.61x0.61m",
                "transmitancia": "0.01",
                "resistencia": "0.02",
                "espesor": "0.01",
              },
            ]
          },
      ]
    },
    {
       "id":16,
       "color":"dark",
       "icon":"ni ni-ungroup",
       "name":"Techo fraccional 2",
       "tipo":"Techo en contacto con ANH",
       "familia":"Techo",
       "longitud":5.5,
       "anchura":6,
       "area":33.000,
       "transmitancia":1,
       "otros":{
          "aislante":"C",
          "estanqueidad": '1'
       },
       "capas": [
          {
            "nombre":"TECHO",      // e.g. "Techo"
            "anchura": 2.06,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Baldosa vinyl 0.61x0.61m",
                "transmitancia": "0.01",
                "resistencia": "0.02",
                "espesor": "0.01",
              },
            ]
          },
          {
            "nombre":"Marco",      // e.g. "Techo"
            "anchura": 0.28,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Tubo de aluminio de 1''x2''",
                "transmitancia": "0.01",
                "resistencia": "0.00",
                "espesor": "0.01",
              },
              {
                "name": "C2: Cámara de aire sin ventilar",
                "transmitancia": "0.01",
                "resistencia": "0.18",
                "espesor": "0.03",
              },
              {
                "name": "C3: Tubo de aluminio de 1''x2''",
                "transmitancia": "0.01",
                "resistencia": "0.00",
                "espesor": "0.01",
              },
            ]
          },
          {
            "nombre":"Acristalamiento",      // e.g. "Techo"
            "anchura": 1.59,
            "longitud": 1,
            "elementos": [
              {
                "name": "C1: Policarbonato Alveolar de 6mm",
                "transmitancia": "0.01",
                "resistencia": "0.28",
                "espesor": "0.03",
              },
            ]
          },
      ]
    },


    {
       "id":17,
       "color":"dark",
       "icon":"ni ni-ungroup",
       "name":"Piso machimbrado",
       "tipo":"Piso en contacto con el suelo",
       "familia":"Piso",
       "longitud":5,
       "anchura":2.55,
       "area":13.09,
       "transmitancia":1,
       "otros":{
          "ancho_aislante": 0.1,
          "resistencia_aislante": 0.16,
          "profundidad": "1"

       },
       "capas": [
      ]
    },
    {
       "id":18,
       "color":"dark",
       "icon":"ni ni-ungroup",
       "name":"Piso cemento pulido",
       "tipo":"Piso en contacto con el suelo",
       "familia":"Piso",
       "longitud":5,
       "anchura":2.635,
       "area":12.01,
       "transmitancia":1,
       "otros":{
          "ancho_aislante": 0.1,
          "resistencia_aislante": 0.0,
          "profundidad": "1"

       },
       "capas": [
      ]
    },
    /* {
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
    } */
 ], // Valor inicial
});

// DATOS DE ENVOLVENTE 2014
export const datosEnvolvente22 = atom({
  key: 'datosEnvolvente22',
  default: [
    {
       "id":5,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Ventana de muro",
       "tipo":"Ventana",
       "familia":"Muro",
       "longitud":0,
       "anchura":0,
       "area":2.23,
       "transmitancia":5.7,
       "otros":{
          "Orientacion":"Sur",
          "familia_c_a":"Muro",
       },
       "capas": []
    },
    {
       "id":6,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Marco de muro",
       "tipo":"Ventana",
       "familia":"Muro",
       "longitud":0,
       "anchura":0,
       "area":0.27,
       "transmitancia":5.7,
       "otros":{
          "Orientacion":"Sur",
          "familia_c_a":"Muro",
       },
       "capas": []
    },
    {
       "id":7,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Contraventana de muro",
       "tipo":"Ventana",
       "familia":"Muro",
       "longitud":0,
       "anchura":0,
       "area":2.23,
       "transmitancia":3.5,
       "otros":{
          "Orientacion":"Sur",
          "familia_c_a":"Muro",
       },
       "capas": []
    },
    {
       "id":8,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Marco de muro 2",
       "tipo":"Ventana",
       "familia":"Muro",
       "longitud":0,
       "anchura":0,
       "area":0.53,
       "transmitancia":2.0,
       "otros":{
          "Orientacion":"Sur",
          "familia_c_a":"Muro",
       },
       "capas": []
    },
    {
       "id":9,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Puerta de muro",
       "tipo":"Ventana",
       "familia":"Muro",
       "longitud":0,
       "anchura":0,
       "area":1.74,
       "transmitancia":4.7,
       "otros":{
          "Orientacion":"Sur",
          "familia_c_a":"Muro",
       },
       "capas": []
    },

    
    {
       "id":10,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro 1",
       "tipo":"Muro",
       "familia":"Muro",
       "longitud":0,
       "anchura":0,
       "area":38.63,
       "transmitancia":1.51,
       "otros":{
          "Orientacion":"Sur"
       },
       "capas": []
    },
    {
       "id":11,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Muro 2",
       "tipo":"Muro",
       "familia":"Muro",
       "longitud":0,
       "anchura":0,
       "area":2.29,
       "transmitancia":1.53,
       "otros":{
          "Orientacion":"Sur"
       },
       "capas": []
    },
    {
       "id":12,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Sobrecimiento",
       "tipo":"Muro",
       "familia":"Muro",
       "longitud":0,
       "anchura":0,
       "area":2.06,
       "transmitancia":1.24,
       "otros":{
          "Orientacion":"Sur"
       },
       "capas": []
    },
    {
       "id":13,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Viga N.1",
       "tipo":"Muro",
       "familia":"Muro",
       "longitud":0,
       "anchura":0,
       "area":3.21,
       "transmitancia":1.65,
       "otros":{
          "Orientacion":"Sur"
       },
       "capas": []
    },
    {
       "id":14,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Marco",
       "tipo":"Muro",
       "familia":"Muro",
       "longitud":0,
       "anchura":0,
       "area":0.02,
       "transmitancia":14.17,
       "otros":{
          "Orientacion":"Sur"
       },
       "capas": []
    },
    {
       "id":15,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Marco",
       "tipo":"Muro",
       "familia":"Muro",
       "longitud":0,
       "anchura":0,
       "area":0.04,
       "transmitancia":56.00,
       "otros":{
          "Orientacion":"Sur"
       },
       "capas": []
    },

    
    {
       "id":16,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Ventana",
       "tipo":"Ventana",
       "familia":"Muro",
       "longitud":0,
       "anchura":0,
       "area":2.24,
       "transmitancia":3.06,
       "otros":{
          "Orientacion":"Sur",
          "familia_c_a":"Techo",
       },
       "capas": []
    },
    {
       "id":17,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Marco",
       "tipo":"Marco",
       "familia":"Muro",
       "longitud":0,
       "anchura":0,
       "area":0.15,
       "transmitancia":5.7,
       "otros":{
          "Orientacion":"Sur",
          "familia_c_a":"Techo",
       },
       "capas": []
    },
    {
       "id":18,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Cielorraso",
       "tipo":"Cielorraso",
       "familia":"Muro",
       "longitud":0,
       "anchura":0,
       "area":18.19,
       "transmitancia":4.9,
       "otros":{
          "Orientacion":"Sur"
       },
       "capas": []
    },

    
    {
       "id":19,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Ventana",
       "tipo":"Ventana",
       "familia":"Techo",
       "longitud":0,
       "anchura":0,
       "area":4.43,
       "transmitancia":6.9,
       "otros":{
          "Orientacion":"Sur",
          "familia_c_a":"Techo",
       },
       "capas": []
    },
    {
       "id":20,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Ventana",
       "tipo":"Ventana",
       "familia":"Techo",
       "longitud":0,
       "anchura":0,
       "area":50.01,
       "transmitancia":0.55,
       "otros":{
          "Orientacion":"Sur",
          "familia_c_a":"Techo",
       },
       "capas": []
    },


    
    {
       "id":21,
       "color":"dark",
       "icon":"ni ni-map-big",
       "name":"Piso",
       "tipo":"Piso",
       "familia":"Piso",
       "longitud":0,
       "anchura":0,
       "area":21.3,
       "transmitancia":3.78,
       "otros":{
          "Orientacion":"Sur"
       },
       "capas": []
    },

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
    "Altura sobre el nivel del mar (m)": 4035,
    "Superficie útil habitable (m²)":33,
    "Altura libre de la planta (m)":2.7,
    "Número de plantas habitables":1,
    "Ventilación de la vivienda (ren/h)":2.1,
    "Caudal de aire a renovar (m³/h)":3.4,
    "Masas en la pariciones internas":3,
    "Cantidad de personas en la vivienda":4,
  }
});

export const valoresDatosExtra = atom({
  key: 'valoresDatosExtra',
  /* default: {
    "tempInterior": 7.3,
    "tempExterior": -3,
    "humRelativa": 36.7,
    "altura":3958
  } */
  default: {
    "tempInterior": 8.3,
    "tempExterior": -1.9,
    "humRelativa": 30.7,
    "altura":3958
  }
});

// Valores de la demanda 
export const datosDemanda = atom({
  key: 'datosDemanda',
  default: 
    {
    "cooling": {
      "alt_m": 3985,
      "ti": 30,
      "te": 30,
      "RHe": 0.3, 
      "RHi": 0.5,
      "envelope": {
        "walls": [
          { "K": 1.60, "A": 30.0, "ori": "N" },
          { "K": 1.60, "A": 28.4, "ori": "W" }
        ],
        "roofs": [
          { "K": 2.20, "A": 44.0, "ori": "N", "Te_eff": 30.23 } // te + ~10°C soleado
        ],
        "floors": [
          { "K": 1.20, "A": 42.0, "Te_eff": 12 }
        ],
        "doors": [
          { "K": 2.00, "A": 1.90, "ori": "W" }                   // 1 puerta típica 0.9×2.1 m
        ]
      },

      "windows": [
      ],
      "solar": {
        "IS_orientation_Wm2": {
          "N": 280, "E": 300, "S": 280, "W": 380,
          "NE": 300, "NW": 300, "SE": 300, "SW": 340
        }
      },

      "people": { "N": 4, "Ms": 47, "Ml": 30 },
      "lighting": [ { "A": 42, "q_ilum": 10, "CT": 0.20 } ],
      "ventilation": { "Caire": 15 },                            // vivienda IRAM

      "volume_m3": 100.8, "area_m2": 42
    },

    "heating": {
      "alt_m": 3985,
      "ti_winter": 12,
      "te_winter": -3,

      "envelope": {
        "walls": [
          { "K": 1.60, "A": 30.0, "ori": "N" },
          { "K": 1.60, "A": 28.4, "ori": "W" }
        ],
        "roofs": [
          { "K": 2.20, "A": 44.0 }
        ],
        "floors": [
          { "K": 1.20, "A": 42.0, "Te_eff": 12 }
        ],
        "doors": [
          { "K": 2.00, "A": 1.90, "ori": "W" }
        ]
      },

      "windows": [
      ],

      "people": { "N": 1, "Ms": 47, "Ml": 30 },
      "lighting": [ { "A": 42, "q_ilum": 10, "CT": 0.20 } ],
      "ventilation": { "Caire": 15 },

      "volume_m3": 100.8, "area_m2": 42,
      "infiltration_ach": 0.0
    }
  }
});

export const datosResDemandaCal = atom({
  key: 'datosResDemandaCal',
  default: {
    "Pérdidas térmicas de la envolvente": "Pendiente",
    "Pérdidas por infiltración": "Pendiente",
    "Pérdidas por ventilación": "Pendiente",
    "Ganancias internas": "Pendiente",
    "Ganancias solares": "Pendiente",
    "Perdidas totales": "Pendiente",
    "Ganancias totales": "Pendiente",
    "Pérdidas y ganancias térmicas para un día típico de invierno en W": "Pendiente",
    "Potencia requerida": "Pendiente",
    "Título": "Pendiente",
    "Conclusión": "Pendiente"
  }
});
export const datosResDemandaRef = atom({
  key: 'datosResDemandaRef',
  default: {
    "Carga sensible de la envolvente": "Pendiente",
    "Carga sensible del sol en ventanas": "Pendiente",
    "Carga sensible interna": "Pendiente",
    "Carga sensible por ventilación": "Pendiente",
    "Carga latente interna": "Pendiente",
    "Carga latente por ventilación": "Pendiente",
    "Carga sensible total": "Pendiente",
    "Carga latente total": "Pendiente",
    "Parte sensible y latente para un día típico de la estación más calida en W": "Pendiente",
    "Potencia requerida": "Pendiente",
    "Título": "Pendiente",
    "Conclusión": "Pendiente"
  }
});