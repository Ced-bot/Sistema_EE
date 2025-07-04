import React, { useState, useEffect } from 'react';
// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/system';

import Image1 from 'assets/images/SistemaEE/techoEnterrada.jpg'; // reemplaza con la ruta de tu imagen
import Image2 from 'assets/images/SistemaEE/techoAire.jpg'; // reemplaza con la ruta de tu imagen
import Image3 from 'assets/images/SistemaEE/techoANH.jpg'; // reemplaza con la ruta de tu imagen
import { Grid, TextField, Typography, Box} from '@mui/material';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
// Argon Dashboard 2 MUI base styles
import breakpoints from "assets/theme/base/breakpoints";

import Select2 from "examples/Select";
import ArgonButton from "components/ArgonButton";
import ArgonTypography from "components/ArgonTypography";

// Recoil
import { useRecoilValue, useRecoilState} from 'recoil';
import { transmCerramiento, activarCapas, estadoSelect, capasElemento, valsEditar } from '../../Recoil';

const StyledFormControlLabel = styled(FormControlLabel)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const TwoLineLabel = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

// Elmentos visualizables
const TechoEnterrado = () => (<img src={Image1} alt="Descripción" />);
const TechoAireExterior = () => (<img src={Image2} alt="Descripción" />);
const TechoANH = () => (<img src={Image3} alt="Descripción" />);

  
export default function RadioGroupTecho({agregarElemento, nroElementos}) {
  // Recoil
  const transmitanciaVal = useRecoilValue(transmCerramiento);
  const capasElementoR = useRecoilValue(capasElemento);
  const valsEditarR = useRecoilValue(valsEditar);
  //const [activarCapasR, setActivarCapasR] = useRecoilState(activarCapas);
  const [estadoSelectR, setEstadoSelectR] = useRecoilState(estadoSelect);


  // Listas
  const Labels = ["Techo enterrado","Techo en contacto con el aire","Techo en contacto con ANH"]
  const Labels2 = ["Techo enterrado","Techo con aire","Techo con ANH"]

  const [value, setValue] = useState('1');
  const [TransmitanciaValue, setTransmitanciaValue] = useState(0);
  const [textFieldDisabled, setTextFieldDisabled] = useState(false);
  // Valores de los textfields
  const [inputAnchura, setInputAnchura] = useState(0);
  const [inputLongitud, setInputLongitud] = useState(0);
  const [inputArea, setInputArea] = useState(0);
  const [inputNombre, setInputNombre] = useState(Labels2[value-1]);

  const [areaDisab, setAreaDisab] = useState(false);
  
  // Evento de cambio de los radioButtons
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    setInputNombre(Labels2[value-1])
  }, [value]);
  // Evento de cambio del textfield de transmitancia
  const handleTransmitanciaChange = (event) => {
    setTransmitanciaValue(event.target.value);
  };
  // Enventos de cambio de los textfields
  const handleAnchuraChange = (event) => {
    setInputAnchura(event.target.value);
  };
  const handleLongitudChange = (event) => {
    setInputLongitud(event.target.value);
  };
  const handleNombreChange = (event) => {
    setInputNombre(event.target.value);
  };
  useEffect(() => {
    if (inputAnchura !== '' && inputLongitud !== '') {
      setInputArea((inputAnchura * inputLongitud).toFixed(3));
    } else {
        setInputArea('');
    }
  }, [inputAnchura,inputLongitud]);

  
  useEffect(() => {
    setTransmitanciaValue(transmitanciaVal);
  }, [transmitanciaVal]);  
  //================================================================================
  // Evento que se activa cuando se cambia el valor del select
  /* const handleSelectChange = (selectedOption) => {
    setEstadoSelectR(selectedOption);
    // Desactivar el texfield de transmitancia
    setTextFieldDisabled(selectedOption === "Calcular");
    // Activar panel de capas de los cerramientos
    setActivarCapasR(selectedOption === "Calcular");
    // Reinicar el valor de la transmitancia
    setTransmitanciaValue(0);
  }; */
  //================================================================================
  // Evento que se activa cuando se cambia el valor del select de metodo de calculo
  useEffect(() => {
    if("name" in valsEditarR){
      //setInputAnchura("--");
      //setInputLongitud("--");
      setInputArea(valsEditarR.area);
      setTransmitanciaValue(valsEditarR.transmitancia);
      setInputNombre(valsEditarR.name);
      setEstadoSelectOri(valsEditarR.orientacion); 
      // Desactivar elementos
      console.log(valsEditarR)

      setAreaDisab(true);
    }
  }, [valsEditarR]);  

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
  const [estadoSelectCalT, setEetadoSelectCalTR] = useState("Metodo");
  const resistenciaVertical = (minElementos) => {
      // Reducir capas
      const capasReduc = agruparCapasPorBloques(capasElementoR, minElementos);

      let resistenciVertical = 0.04 + 0.13;
      for (let idx = 0; idx < minElementos; idx++) {
        let sumaInversa = 0;
        let nuevaAreaTotal = 0;
        capasReduc.forEach(item => {
          const elemento = item.elementos[idx];
          if (elemento && elemento.resistencia) {
            nuevaAreaTotal += item.anchura * item.longitud
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
  const resistenciaHorizontal = (areaTotal) => {
      let resistenciHorizontal = 0;
      capasElementoR.forEach(item => {
        let sumaInversa = 0.04 + 0.13;
        item.elementos.forEach(item2 => {
          sumaInversa += parseFloat(item2.resistencia);
        });
        resistenciHorizontal += (item.anchura * item.longitud / areaTotal)/sumaInversa;
      });
      resistenciHorizontal = 1/resistenciHorizontal;
      return resistenciHorizontal;
  }

  const handleSelectCalTRChange = (selectedOption) => {
    setEetadoSelectCalTR(selectedOption);
    // Desactivar el texfield de transmitancia
    if (capasElementoR.length > 0){
      // Calcular porcentaje de areas
      const areaTotal = capasElementoR.reduce((acc, item) => acc + (item.anchura * item.longitud), 0);
      setInputArea(areaTotal.toFixed(3));
      // 4) Determina la cantidad máxima de "elementos" en los subarreglos
      //const maxElementos = Math.max(...capasElementoR.map(item => item.elementos.length));
      const minElementos = Math.min(...capasElementoR.map(item => item.elementos.length));

      // Transmitancia
      if(selectedOption === "Horizontal"){
        const resistenciHorizontal = resistenciaHorizontal(areaTotal);
        setTransmitanciaValue((1/resistenciHorizontal).toFixed(4));
        console.log("HORIZONTAL")
        console.log(resistenciHorizontal)
      }
      else if(selectedOption === "Vertical"){
        const resistenciVertical = resistenciaVertical(minElementos);
        setTransmitanciaValue((1/resistenciVertical).toFixed(4));
        console.log("VERTICAL")
        console.log(resistenciVertical)
      }
      else if(selectedOption === "Horizontal/Vertical"){
        const resistenciHorizontal = resistenciaHorizontal(areaTotal);
        const resistenciVertical = resistenciaVertical(minElementos);
        setTransmitanciaValue((1/((resistenciVertical+resistenciHorizontal)/2)).toFixed(4));
        console.log("VERTICAL--HORIZONTAL")
        console.log(resistenciVertical, resistenciHorizontal)
      }
    }
  };

  // Orientacion
  const [estadoSelectOri, setEstadoSelectOri] = useState("--");
  const handleSelectOriChange = (selectedOption) => {
    setEstadoSelectOri(selectedOption); 
  };
  // =============================================================
  // Función para agregar un nuevo elemento a la lista
  const NuevoElemento = () => {
    
      const Elemento = {
        id : nroElementos,
        color: "dark",
        icon: "ni ni-bold-up",
        name: inputNombre,
        tipo: Labels[value-1],
        familia: "Techo",
        longitud: parseFloat(inputLongitud),
        anchura: parseFloat(inputAnchura),
        area: parseFloat(inputArea).toFixed(3),
        transmitancia: parseFloat(TransmitanciaValue), 
        otros: {
          Orientacion: estadoSelectOri
        },
      }
      if (capasElementoR.length > 0){
        Elemento.capas = capasElementoR;
      }
      console.log(Elemento);
      agregarElemento(Elemento);
  };
  // Setting default values for the props of GradientLineChart
  RadioGroupTecho.defaultProps = {nroElementos:0};
  // Typechecking props for the CategoriesList
  RadioGroupTecho.propTypes = {agregarElemento: PropTypes.func, nroElementos: PropTypes.number };

  return (
    <div>
        <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
        <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            defaultValue="1"
            name="position"
            value={value}
            onChange={handleChange}
        >
            <StyledFormControlLabel style={{ marginLeft: '50px' }} value="1" control={<Radio />} label={
                <span style={{ marginRight: '20px' }}>Enterrado</span>
            } labelPlacement="start" />
            <StyledFormControlLabel value="2" control={<Radio />} label={
                <span style={{ marginRight: '20px' }}>En contacto con el aire</span>
            } labelPlacement="start" />
            <StyledFormControlLabel value="3" control={<Radio />} label={
                <TwoLineLabel>
                <span style={{ marginRight: '20px' }}>En contacto con </span>
                <span style={{ marginRight: '20px' }}>ambiente no habitable</span>
                </TwoLineLabel>
            } labelPlacement="start" />
        </RadioGroup>
        </FormControl>
        
        <Grid container spacing={12} alignItems="center">
            <Grid item xs={7}>
                <Box mb={2}>
                <Grid container alignItems="center" justifyContent="center" spacing={2.5}>
                    <Grid item> <Typography variant="h6">Largo (m):</Typography> </Grid>
                    <Grid item> <TextField disabled={areaDisab} value={inputAnchura} onChange={handleAnchuraChange} label="" variant="outlined" type="number" style={{ width: 155 }} inputProps={{ min: "1", style: { textAlign: "center"}}} /> </Grid>
                </Grid>
                </Box>
                <Box mb={2}>
                <Grid container alignItems="center" justifyContent="center"  spacing={4}>
                    <Grid item> <Typography variant="h6">Alto (m):</Typography> </Grid>
                    <Grid item> <TextField disabled={areaDisab} value={inputLongitud} onChange={handleLongitudChange} label="" variant="outlined" type="number" style={{ width: 155 }} inputProps={{ min: "1", style: { textAlign: "center"}}} /> </Grid>
                </Grid>
                </Box>
                <Box mb={2} ml={8}>
                <Grid container alignItems="center" justifyContent="center"  spacing={2}>
                    <Grid item> <Typography variant="h6">Area (m²):</Typography> </Grid>
                    <Grid item> <TextField  value={inputArea} label="" variant="outlined" disabled  style={{ width: 110}} inputProps={{ style: { textAlign: "right"}}}/> </Grid>
                </Grid>
                </Box>
            </Grid>
            
            <Grid item xs={3}>
                {value === '1' && <TechoEnterrado />}
                {value === '2' && <TechoAireExterior />}   
                {value === '3' && <TechoANH />}   
            </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center"  spacing={2} style={{ marginBottom: '10px' }}>
            <Grid item> <Typography variant="h6">Nombre: </Typography> </Grid>
            <Grid item> <TextField value={inputNombre} onChange={handleNombreChange} style={{ width: 160 }}  inputProps={{ style: {marginLeft:'-13px',height: '20px', textAlign: "center"}}}/> </Grid>

            <Grid item> <Typography variant="h6">Orientación: </Typography> </Grid>
            <Grid item> <Select2 options={["--","Norte", "Sur", "Este", "Oeste"]}  value={estadoSelectOri} onChange={handleSelectOriChange} style={{ width: "80px" }}/> </Grid> 
        </Grid> 
        <Grid container alignItems="center" justifyContent="center"  spacing={2}>
            <Grid item> <Typography variant="h6">Transmitancia Térmica (W/m²K): </Typography> </Grid>
            <Grid item> <TextField id="TextField-Transmitancia" value={TransmitanciaValue} variant="outlined" type="number"  style={{ width: 100 }} disabled={textFieldDisabled} onChange={handleTransmitanciaChange} inputProps={{ min: "0", style: { textAlign: "center"}}}/> </Grid>

            <Grid item> <Select2 options={["Horizontal", "Vertical", "Horizontal/Vertical"]}  value={estadoSelectCalT} onChange={handleSelectCalTRChange} style={{ width: "160px" }}/> </Grid> 

            {/* <Grid item> <Select2 options={["Conocida", "Calcular"]}  value={estadoSelectR} onChange={handleSelectChange}/> </Grid>  */}
            <Grid item> <ArgonButton variant="gradient" color="info" onClick={NuevoElemento}> Agregar&nbsp; <ArrowForwardSharpIcon fontSize="large" /></ArgonButton> </Grid> 
        </Grid>
        {/* <Box mb={2} ml={8}> </Box>
        <Grid container alignItems="center" justifyContent="center">
            <Grid item> <ArgonButton variant="gradient" color="info"> Agregar&nbsp; <ArrowForwardSharpIcon fontSize="large" /></ArgonButton> </Grid> 
        </Grid> */}
    </div>
  );
}