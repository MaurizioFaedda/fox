import React, { useState, ChangeEvent } from "react";
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
  open: boolean;
  handleClose: Function;
  arr: any;
  onAddCompanies(item: any): void;
};

// created constant to use today's date formatted by
// default for the ActivedBy attribute
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
  const { open, handleClose, arr, onAddCompanies } = props;

  // useState
  const [newName, setNewName] = useState<string>("");
  const [newActivatedBy, setNewActivatedBy] = useState<any>(
    formatDate(new Date())
  );
  const [countId, setCountId] = useState<number>(11);
  const [newRevenue, setNewRevenue] = useState<any>(0);

  const c = useStyles();

  // change the value of the new company
  // if it is equal to the name of the input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "Name":
        setNewName(e.target.value);
        break;
      case "ActivatedBy":
        setNewActivatedBy(formatDate(e.target.value));
        break;
      case "Revenue":
        setNewRevenue(e.target.value);

        break;
      default:
        break;
    }
    console.log(arr);
  };

  const addNewCompany = () => {
    setCountId(countId + 1);
    const newCompanies = {
      Id: countId,
      Name: newName,
      ActivatedBy: newActivatedBy,
      Revenue: newRevenue,
    };
    onAddCompanies(newCompanies);
    setNewName("");
    setNewActivatedBy(formatDate(new Date()));
    setNewRevenue(0);
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
            type={"date"}
            name={"ActivatedBy"}
            handleChange={handleChange}
          />
          <FormInput
            type={"number"}
            label={"Revenue"}
            name={"Revenue"}
            handleChange={handleChange}
          />
          <CustomButton
            title={"Save"}
            onClickAction={addNewCompany}
            onClickClose={handleClose}
          />
        </div>
      </Modal>
    </div>
  );
};

export default AddForm;
