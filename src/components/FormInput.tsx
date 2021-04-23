import React from "react";
import TextField from "@material-ui/core/TextField";

type IProps = {
  label?: string;
  handleChange?: any;
  type: any;
  name: string;
};

const FormInput = (props: IProps) => {
  const { label, handleChange, type, name } = props;
  return (
    <TextField
      type={type}
      onChange={handleChange}
      id="outlined-basic"
      label={label}
      name={name}
      variant="outlined"
    />
  );
};

export default FormInput;
