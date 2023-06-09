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