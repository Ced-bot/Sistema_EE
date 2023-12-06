/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

import Checkbox from '@mui/material/Checkbox';
import Icon from "@mui/material/Icon";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// Lista de elementos que se mostraran
const Elementos = [];
for (let i = 0; i < 15; i++) {
  var diccionario = {
    check: <Checkbox {...label} />,
    nombre: (<ArgonTypography variant="caption" color="secondary" fontWeight="medium">TECNOPOR</ArgonTypography>),
    tempInf: (<ArgonTypography variant="caption" color="secondary" fontWeight="medium">20.0</ArgonTypography>),
    tempSup: (<ArgonTypography variant="caption" color="secondary" fontWeight="medium">10.0</ArgonTypography>),
    /* tempProm: (<ArgonTypography variant="caption" color="secondary" fontWeight="medium">15.0</ArgonTypography>), */
    cond: (<ArgonTypography variant="caption" color="secondary" fontWeight="medium">0,04365</ArgonTypography>),
    espesor: (<ArgonTypography variant="caption" color="secondary" fontWeight="medium">20,19</ArgonTypography>),
    duracion: <Function job="30" org="17:32:26 - 18:02:30" />,
    detalles: (<Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">navigate_next</Icon>),
  };
  Elementos.push(diccionario);
}


function Function({ job, org }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </ArgonTypography>
      <ArgonTypography variant="caption" color="secondary">
        {org}
      </ArgonTypography>
    </ArgonBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "check", tittle: "", align: "center" },
    { name: "nombre", tittle: "Nombre de la muestra", align: "left" },
    { name: "tempInf", tittle: "Temp. inferior (°C)", align: "center" },
    { name: "tempSup", tittle: "Temp. superior (°C)", align: "center" },
    /* { name: "tempProm", tittle: "Temp. promedio (°C)", align: "center" }, */
    { name: "cond", tittle: "Conductividad térmica (W/mK)", align: "center" },
    { name: "espesor", tittle: "Espesor (mm)", align: "center" },
    { name: "duracion", tittle: "Duración (Mins)", align: "center" },
    { name: "detalles", tittle: "", align: "center" },
  ],

  rows: Elementos,
};

export default authorsTableData;
