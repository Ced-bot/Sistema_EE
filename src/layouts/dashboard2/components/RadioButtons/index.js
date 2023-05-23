import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/system';
// Este componente hace que el texto del label se muestre en dos líneas
const TwoLineLabel = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledFormControlLabel = styled(FormControlLabel)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        defaultValue="Horizontal HD"
        name="position"
      >
        <StyledFormControlLabel value="Horizontal HD" control={<Radio />} label={
            <TwoLineLabel>
              <span>Horizontal en contacto</span>
              <span>con espacio HD inferior </span>
            </TwoLineLabel>
          } labelPlacement="start" />
        <StyledFormControlLabel value="En con tacto con el aire" control={<Radio />} label="En con tacto con el aire" labelPlacement="start" />
        <StyledFormControlLabel value="Enterrada" control={<Radio />} label="Enterrada" labelPlacement="start" />
      </RadioGroup>
    </FormControl>
  );
}