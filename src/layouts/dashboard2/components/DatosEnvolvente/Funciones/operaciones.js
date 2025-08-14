
// Ambiente en contacto con el aire
const resisIntExtAH = {
    Muro:{
        resSupExterior: 0.04,
        resSupInterior: 0.13,
    },
    Techo:{
        resSupExterior: 0.04,
        resSupInterior: 0.10,
    },
    Piso:{
        resSupExterior: 0.04,
        resSupInterior: 0.17,
    }
}
// Ambiente no habitable
const resisIntExtANH = {
    Muro:{
        resSupExterior: 0.13,
        resSupInterior: 0.13,
    },
    Techo:{
        resSupExterior: 0.10,
        resSupInterior: 0.10,
    },
    Piso:{
        resSupExterior: 0.17,
        resSupInterior: 0.17,
    }
}


function agruparCapasPorBloques(elementos, minElementos) {
    return elementos.map((elemento) => {
        const capas = elemento.elementos;
        const total = capas.length;
        const resultado = [];

        const bloque = Math.ceil(total / minElementos);

        for (let i = 0; i < total; i += bloque) {
        const grupo = capas.slice(i, i + bloque);
        const suma = grupo.reduce(
            (acc, capa) => {
            acc.transmitancia += parseFloat(capa.transmitancia);
            acc.resistencia += parseFloat(capa.resistencia);
            acc.espesor += parseFloat(capa.espesor);
            return acc;
            },
            { transmitancia: 0, resistencia: 0, espesor: 0 }
        );
        resultado.push(suma);
        }

        return { ...elemento, capas: resultado };
    });
}

export const resistenciaVertical = (capasElementoR, minElementos, contactoAire, familiaEle) => {
    // Reducir capas
    //console.log("capasElementoR, minElementos, contactoAire, familiaEle")
    // [] Infinity false 'Piso'
    const capasReduc = agruparCapasPorBloques(capasElementoR, minElementos);
    //const capasReduc = capasElementoR;

    let resistenciVertical = 0;
    if(contactoAire){
        resistenciVertical = resisIntExtAH[familiaEle].resSupExterior + resisIntExtAH[familiaEle].resSupInterior;
    }
    else{
        resistenciVertical = resisIntExtANH[familiaEle].resSupExterior + resisIntExtANH[familiaEle].resSupInterior;
    }
    for (let idx = 0; idx < minElementos; idx++) {
      let sumaInversa = 0;
      let nuevaAreaTotal = 0;
      capasReduc.forEach(item => {
          const elemento = item.elementos[idx];
          if (elemento && elemento.resistencia) {
              nuevaAreaTotal += item.anchura * item.longitud;
          }
      });

      capasReduc.forEach(item => {
          const elemento = item.elementos[idx];
          if (elemento && elemento.resistencia) {
              sumaInversa += (item.anchura * item.longitud / nuevaAreaTotal)/parseFloat(elemento.resistencia);
              //console.log(item.porcentaje, "-->" ,elemento.resistencia, "-->", item.porcentaje/parseFloat(elemento.resistencia));
          }
      });
      //console.log(1/sumaInversa);

      resistenciVertical += 1/sumaInversa;
    }
    return resistenciVertical;
}
export const resistenciaHorizontal = (capasElementoR, areaTotal, contactoAire, familiaEle) => {
    let resistenciHorizontal = 0;
    capasElementoR.forEach(item => {

        let sumaInversa = 0;
        if(contactoAire){
            sumaInversa = resisIntExtAH[familiaEle].resSupExterior + resisIntExtAH[familiaEle].resSupInterior;
        }
        else{
            sumaInversa = resisIntExtANH[familiaEle].resSupExterior + resisIntExtANH[familiaEle].resSupInterior;
        }

        item.elementos.forEach(item2 => {
            sumaInversa += parseFloat(item2.resistencia);
        });
        resistenciHorizontal += (item.anchura * item.longitud / areaTotal)/sumaInversa;
        console.log(sumaInversa)
    });
    resistenciHorizontal = 1/resistenciHorizontal;
    return resistenciHorizontal;
}

// Ambientes no habitables, techos
const tablaCoeficiente = {
  'A': {
    '1': [
      { rango: [0, 0.25], valor: 0.94 },
      { rango: [0.25, 0.5], valor: 0.85 },
      { rango: [0.5, 0.75], valor: 0.77 },
      { rango: [0.75, 1.0], valor: 0.70 },
      { rango: [1.0, 1.25], valor: 0.65 },
      { rango: [1.25, 2.0], valor: 0.56 },
      { rango: [2.0, 2.5], valor: 0.48 },
      { rango: [2.5, 3.0], valor: 0.43 },
      { rango: [3.0, Infinity], valor: 0.39 },
    ],
    '2': [
      { rango: [0, 0.25], valor: 0.97 },
      { rango: [0.25, 0.5], valor: 0.92 },
      { rango: [0.5, 0.75], valor: 0.87 },
      { rango: [0.75, 1.0], valor: 0.83 },
      { rango: [1.0, 1.25], valor: 0.79 },
      { rango: [1.25, 2.0], valor: 0.73 },
      { rango: [2.0, 2.5], valor: 0.66 },
      { rango: [2.5, 3.0], valor: 0.61 },
      { rango: [3.0, Infinity], valor: 0.57 },
    ],
  },
  'B': {
    '1': [
      { rango: [0, 0.25], valor: 0.99 },
      { rango: [0.25, 0.5], valor: 0.97 },
      { rango: [0.5, 0.75], valor: 0.96 },
      { rango: [0.75, 1.0], valor: 0.94 },
      { rango: [1.0, 1.25], valor: 0.92 },
      { rango: [1.25, 2.0], valor: 0.89 },
      { rango: [2.0, 2.5], valor: 0.86 },
      { rango: [2.5, 3.0], valor: 0.83 },
      { rango: [3.0, Infinity], valor: 0.81 },
    ],
    '2': [
      { rango: [0, 0.25], valor: 1.00 },
      { rango: [0.25, 0.5], valor: 0.99 },
      { rango: [0.5, 0.75], valor: 0.98 },
      { rango: [0.75, 1.0], valor: 0.97 },
      { rango: [1.0, 1.25], valor: 0.96 },
      { rango: [1.25, 2.0], valor: 0.95 },
      { rango: [2.0, 2.5], valor: 0.93 },
      { rango: [2.5, 3.0], valor: 0.91 },
      { rango: [3.0, Infinity], valor: 0.90 },
    ],
  },
  'C': {
    '1': [
      { rango: [0, 0.25], valor: 0.91 },
      { rango: [0.25, 0.5], valor: 0.77 },
      { rango: [0.5, 0.75], valor: 0.67 },
      { rango: [0.75, 1.0], valor: 0.59 },
      { rango: [1.0, 1.25], valor: 0.53 },
      { rango: [1.25, 2.0], valor: 0.44 },
      { rango: [2.0, 2.5], valor: 0.36 },
      { rango: [2.5, 3.0], valor: 0.32 },
      { rango: [3.0, Infinity], valor: 0.28 },
    ],
    '2': [
      { rango: [0, 0.25], valor: 0.96 },
      { rango: [0.25, 0.5], valor: 0.90 },
      { rango: [0.5, 0.75], valor: 0.84 },
      { rango: [0.75, 1.0], valor: 0.79 },
      { rango: [1.0, 1.25], valor: 0.74 },
      { rango: [1.25, 2.0], valor: 0.67 },
      { rango: [2.0, 2.5], valor: 0.59 },
      { rango: [2.5, 3.0], valor: 0.54 },
      { rango: [3.0, Infinity], valor: 0.50 },
    ],
  },
};

export function obtenerCoeficiente(valor, tipo, caso) {
  //console.log("----------------> 3333",valor, tipo, caso);
  const fila = tablaCoeficiente[tipo]?.[caso];
  if (!fila) return 1;

  return fila.find(({ rango }) => valor >= rango[0] && valor < rango[1])?.valor ?? null;
}

// En contacto con el terreno, pisos
const tabla = {
  "0.0": {
    "1": [2.35],
    "2": [1.56],
    "3": [1.20],
    "4": [0.99],
    "5": [0.85],
    "6": [0.74],
    "7": [0.66],
    "8": [0.60],
    "9": [0.55],
    "10": [0.51],
    "12": [0.44],
    "14": [0.39],
    "16": [0.35],
    "18": [0.32],
    "20": [0.30]
  },
  "0.5": {
    "1": [1.57, 1.30, 1.16, 1.07, 1.01],
    "2": [1.17, 1.04, 0.97, 0.92, 0.89],
    "3": [0.94, 0.85, 0.80, 0.78, 0.76],
    "4": [0.79, 0.73, 0.69, 0.67, 0.65],
    "5": [0.69, 0.64, 0.61, 0.59, 0.58],
    "6": [0.61, 0.57, 0.55, 0.53, 0.52],
    "7": [0.55, 0.51, 0.49, 0.48, 0.47],
    "8": [0.50, 0.46, 0.44, 0.43, 0.42],
    "9": [0.46, 0.42, 0.40, 0.39, 0.38],
    "10": [0.43, 0.40, 0.38, 0.37, 0.36],
    "12": [0.39, 0.34, 0.32, 0.31, 0.30],
    "14": [0.34, 0.32, 0.30, 0.29, 0.28],
    "16": [0.31, 0.29, 0.28, 0.27, 0.26],
    "18": [0.28, 0.27, 0.26, 0.25, 0.24],
    "20": [0.30, 0.26, 0.25, 0.24, 0.23]
  },
  "1.0": {
    "1": [1.39, 1.01, 0.80, 0.66, 0.57],
    "2": [1.08, 0.89, 0.79, 0.62, 0.50],
    "3": [0.88, 0.76, 0.69, 0.64, 0.51],
    "4": [0.75, 0.65, 0.60, 0.57, 0.45],
    "5": [0.65, 0.58, 0.54, 0.52, 0.41],
    "6": [0.58, 0.52, 0.49, 0.47, 0.38],
    "7": [0.53, 0.47, 0.45, 0.43, 0.36],
    "8": [0.48, 0.43, 0.41, 0.40, 0.34],
    "9": [0.44, 0.40, 0.38, 0.37, 0.33],
    "10": [0.41, 0.37, 0.35, 0.34, 0.31],
    "12": [0.36, 0.32, 0.30, 0.30, 0.27],
    "14": [0.32, 0.30, 0.28, 0.27, 0.25],
    "16": [0.30, 0.28, 0.26, 0.25, 0.24],
    "18": [0.27, 0.25, 0.24, 0.23, 0.22],
    "20": [0.25, 0.22, 0.21, 0.21, 0.20]
  },
  "1.5": {
    "2": [1.04, 0.83, 0.70, 0.61, 0.55],
    "3": [0.85, 0.71, 0.63, 0.57, 0.53],
    "4": [0.73, 0.65, 0.60, 0.54, 0.48],
    "5": [0.65, 0.60, 0.56, 0.50, 0.44],
    "6": [0.60, 0.54, 0.51, 0.46, 0.41],
    "7": [0.54, 0.49, 0.46, 0.42, 0.38],
    "8": [0.49, 0.44, 0.42, 0.39, 0.35],
    "9": [0.45, 0.41, 0.39, 0.36, 0.33],
    "10": [0.42, 0.38, 0.36, 0.34, 0.31],
    "12": [0.36, 0.33, 0.31, 0.29, 0.27],
    "14": [0.32, 0.29, 0.27, 0.26, 0.25],
    "16": [0.29, 0.27, 0.25, 0.24, 0.23],
    "18": [0.26, 0.24, 0.23, 0.22, 0.21],
    "20": [0.25, 0.21, 0.21, 0.20, 0.20]
  }
};


const raValues = [0.5, 1.0, 1.5, 2.0, 2.5];

function interpolate(x, x0, y0, x1, y1) {
  if (x1 === x0) return y0;
  return y0 + ((x - x0) * (y1 - y0)) / (x1 - x0);
}

export function buscarValorTransPiso(Bp, Ra, D) {
  const Dkey = D < 0.5 ? "0.0" : D < 1 ? "0.5" : D < 1.5 ? "1.0" : "1.5";
  const bloque = tabla[Dkey];

  const Bps = Object.keys(bloque).map(n => parseFloat(n)).sort((a, b) => a - b);
  //console.log(Bps, Bp)

  // Encontrar Bp inferior y superior
  const BpInf = Math.max(...Bps.filter(n => n <= Bp));
  const BpSup = Math.min(...Bps.filter(n => n >= Bp));

  if (!isFinite(BpInf) || !isFinite(BpSup)) return null;


  // Encontrar Ra inferior y superior
  const iRaInf = Math.max(0, raValues.findIndex(v => v <= Ra));
  const iRaSup = Math.min(raValues.length - 1, raValues.findIndex(v => v >= Ra));

  const raInf = raValues[iRaInf];
  const raSup = raValues[iRaSup];

  //console.log(BpInf,iRaInf)
  //console.log(BpInf,iRaInf)
  const v00 = bloque[BpInf.toString()][iRaInf];
  const v01 = bloque[BpInf.toString()][iRaSup];
  const v10 = bloque[BpSup.toString()][iRaInf];
  const v11 = bloque[BpSup.toString()][iRaSup];

  const v0 = interpolate(Ra, raInf, v00, raSup, v01);
  const v1 = interpolate(Ra, raInf, v10, raSup, v11);

  const final = interpolate(Bp, BpInf, v0, BpSup, v1);

  return final;
}
