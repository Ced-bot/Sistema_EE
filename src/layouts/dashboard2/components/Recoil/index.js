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
  default: [], // Valor inicial
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
