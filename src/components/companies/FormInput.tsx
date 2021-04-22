import React from "react";
import TextField from "@material-ui/core/TextField";

type IProps = {
  label?: string;
  value?: any;
  handleChange?: any;
  type: any;
  name: string;
};

const FormInput = (props: IProps) => {
  const { label, value, handleChange, type, name } = props;
  return (
    <TextField
      type={type}
      onChange={handleChange}
      id="outlined-basic"
      label={label}
      name={name}
      variant="outlined"
      value={value}
    />
  );
};

export default FormInput;
