import React, { ChangeEvent, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import FormInput from "../FormInput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: 25,
      borderRadius: 4,
      backgroundColor: "#fff",
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

type IProps = {
  open: boolean;
  handleClose: Function;
  addUser(item: any): void;
};

const formatDate = (date: any) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [day, month, year].join("/");
};

const AddForm = (props: IProps) => {
  const { open, handleClose, addUser } = props;

  const [newName, setNewName] = useState<string>("");
  const [newUsername, setNewUsername] = useState<string>("");
  const [newAge, setNewAge] = useState<any>();
  const [newBirthday, setNewBirthday] = useState<any>(formatDate(new Date()));
  const [newIdCompany, setNewIdCompany] = useState<number[]>([]);

  const c = useStyles();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "Name":
        setNewName(e.target.value);
        break;
      case "Username":
        setNewUsername(e.target.value);
        break;
      case "Age":
        setNewAge(e.target.value);
        break;
      case "Birthday":
        setNewBirthday(e.target.value);
        break;
      default:
        break;
    }
  };

  const addNewUser = () => {
    const newUser = {
      name: newName,
      username: newUsername,
      age: newAge,
      birthday: newBirthday,
      idCompany: newIdCompany,
    };
    addUser(newUser);
    setNewName("");
    setNewUsername("");
    setNewAge(0);
    setNewBirthday(formatDate(new Date()));
    setNewIdCompany([]);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={c.root}>
          <FormInput
            type={"text"}
            name={"Name"}
            label={"Name"}
            handleChange={handleChange}
          />
          <FormInput
            type={"text"}
            name={"Username"}
            label={"Username"}
            handleChange={handleChange}
          />
          <FormInput
            type={"number"}
            name={"Age"}
            label={"Age"}
            handleChange={handleChange}
          />
          <FormInput
            type={"date"}
            name={"Birthday"}
            label={"Birthday"}
            handleChange={handleChange}
          />
          <button
            onClick={() => {
              addNewUser();
              handleClose();
            }}
          >
            Save
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddForm;
