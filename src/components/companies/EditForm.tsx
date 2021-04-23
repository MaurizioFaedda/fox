import React, { useState, ChangeEvent } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import FormInput from "../FormInput";
import { ICompanies } from "../../containers/companies/type";
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
  selected: any;
  itemSelected: any;
  addCompanies: Function;
  deleteSelected: Function;
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

const EditForm = (props: IProps) => {
  const {
    open,
    handleClose,
    arr,
    itemSelected,
    addCompanies,
    deleteSelected,
    selected,
  } = props;

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
        setNewActivatedBy(formatDate(arr[selected + 1].ActivatedBy));
        setNewRevenue(arr[selected + 1].Revenue);
        break;
      case "ActivatedBy":
        setNewName(arr[selected + 1].Name);
        setNewActivatedBy(formatDate(e.target.value));
        setNewRevenue(arr[selected + 1].Revenue);
        break;
      case "Revenue":
        setNewName(arr[selected + 1].Name);
        setNewActivatedBy(arr[selected + 1].ActivatedBy);
        setNewRevenue(e.target.value);
        break;
      default:
        break;
    }
    console.log(arr);
  };

  const addNewCompany = () => {
    const newCompanies = {
      Id: countId,
      Name: newName,
      ActivatedBy: newActivatedBy,
      Revenue: newRevenue,
    };
    addCompanies(newCompanies);
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
          {itemSelected.map((item: any) => (
            <>
              <FormInput
                type={"text"}
                value={item.Name}
                name={"Name"}
                label={"Name"}
                handleChange={handleChange}
              />
              <FormInput
                type={"text"}
                value={item.ActivatedBy}
                name={"ActivatedBy"}
                handleChange={handleChange}
              />
              <FormInput
                type={"number"}
                value={item.Revenue}
                name={"Revenue"}
                label={"Revenue"}
                handleChange={handleChange}
              />
            </>
          ))}
          <CustomButton
            title={"Edit"}
            onClickAction={() => addNewCompany()}
            onClickClose={handleClose}
          />
        </div>
      </Modal>
    </div>
  );
};

export default EditForm;
