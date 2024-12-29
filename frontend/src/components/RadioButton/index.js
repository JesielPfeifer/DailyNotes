import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";

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
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<CustomRadio />} label="Female" />
        <FormControlLabel value="male" control={<CustomRadio />} label="Male" />
        <FormControlLabel value="other" control={<CustomRadio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButton;