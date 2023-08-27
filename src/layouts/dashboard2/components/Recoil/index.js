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
      {Piso:"Todavía no se procesaron datos"},
      {Muro: "Todavía no se procesaron datos"},
      {Techo: "Todavía no se procesaron datos"}
    ],
    resultadosInfiltraciones:[
      [{"-1":'Todavía no se procesaron datos'}], // Ventanas
      [{"-1":'Todavía no se procesaron datos'}], // Puertas
    ],
    resultadosCondesaciones:"Sin datos",
    resultadosIncidencia:"Sin datos",
  }, // Valor inicial
});


export const datosEnvolvente = atom({
  key: 'datosEnvolvente',
  default: {}, // Valor inicial
});