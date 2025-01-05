import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import './styles.css'

const CustomRadio = styled(Radio)({
  color: "#FFD3CA",
  "&.Mui-checked": {
    color: "#EB8F7A",
  },
});

function RadioButton() {
  return (
    <FormControl>
      <RadioGroup
        className="radioOptions"
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="todos" control={<CustomRadio />} label="Todos" />
        <FormControlLabel value="normal" control={<CustomRadio />} label="Normal" />
        <FormControlLabel value="prioridade" control={<CustomRadio />} label="Prioridade" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButton;