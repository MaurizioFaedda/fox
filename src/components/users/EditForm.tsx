import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";

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
  openForm: boolean;
  onHandleClose: Function;
  list: any;
  selected: any;
  itemSelected: any;
  onEditUser(item: any): void;
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

const EditForm = (props: IProps) => {
  const { openForm, onHandleClose, itemSelected, onEditUser } = props;

  const [newName, setNewName] = useState<string>();
  const [newUsername, setNewUsername] = useState<string>();
  const [newAge, setNewAge] = useState<number>();
  const [newBirthday, setNewBirthday] = useState<any>(formatDate(new Date()));
  const [newId, setNewId] = useState<number>();
  const [newIdCompany, setNewIdCompany] = useState<number>();

  const c = useStyles();

  const editNewUser = () => {
    const newUser = {
      name: newName,
      username: newUsername,
      age: newAge,
      birthday: newBirthday,
      id: newId,
      idCompany: newIdCompany,
    };
    onEditUser(newUser);
    setNewName("");
    setNewUsername("");
    setNewAge(0);
    setNewBirthday(formatDate(new Date()));
    setNewId(0);
    setNewIdCompany(0);
  };

  useEffect(() => {
    if (itemSelected) {
      setNewName(itemSelected.name);
      setNewUsername(itemSelected.username);
      setNewAge(itemSelected.age);
      setNewBirthday(itemSelected.birthday);
      setNewId(itemSelected.id);
      setNewIdCompany(itemSelected.idCompany);
    }
  }, [itemSelected]);

  return (
    <div>
      {itemSelected && (
        <Modal
          open={openForm}
          onClose={() => onHandleClose()}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={c.root}>
            <>
              <FormInput
                type={"text"}
                value={itemSelected.name}
                name={"Name"}
                label={"Name"}
                handleChange={(e: any) => {
                  setNewName(e.target.value);
                }}
              />
              <FormInput
                type={"text"}
                value={itemSelected.username}
                name={"Username"}
                label={"Username"}
                handleChange={(e: any) => {
                  setNewUsername(e.target.value);
                }}
              />
              <FormInput
                type={"number"}
                value={itemSelected.age}
                name={"Age"}
                label={"Age"}
                handleChange={(e: any) => {
                  setNewAge(e.target.value);
                }}
              />
              <FormInput
                type={"date"}
                value={itemSelected.birthday}
                name={"Birthday"}
                label={""}
                handleChange={(e: any) => {
                  setNewBirthday(formatDate(e.target.value));
                }}
              />
              <FormInput
                type={"number"}
                value={itemSelected.id}
                name={"Id"}
                label={"Id"}
                handleChange={(e: any) => {
                  setNewId(e.target.value);
                }}
              />
              <FormInput
                type={"number"}
                value={itemSelected.idCompany}
                name={"idCompany"}
                label={"idCompany"}
                handleChange={(e: any) => {
                  setNewIdCompany(e.target.value);
                }}
              />
            </>

            <CustomButton
              title={"Edit"}
              onClickAction={() => editNewUser()}
              onClickClose={onHandleClose}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EditForm;
