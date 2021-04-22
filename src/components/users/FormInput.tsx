import { makeStyles, Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: 25,
      backgroundColor: "#fff",
    },
    input: {
      border: "1px solid black",
    },
  })
);

type IProps = {
  //   name: string;
};

const FormInput = (props: IProps) => {
  //   const { name } = props;
  const c = useStyles();
  return (
    <div>
      <form className={c.form}>
        <label>Name</label>
        <input type="text" className={c.input} name="name" />
        <label>Username</label>
        <input type="text" className={c.input} name="username" />
        <label>Id</label>
        <input type="text" className={c.input} name="id" />
        <label>Age</label>
        <input type="text" className={c.input} name="age" />
        <label>Birthday</label>
        <input type="text" className={c.input} name="birthday" />
        <button>Save datas</button>
      </form>
    </div>
  );
};

export default FormInput;
