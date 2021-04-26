import React, { useState } from "react";
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
  onHandleClose: Function;
  arr: any;
  selected: any;
  itemSelected: any;
  onEditCompany(item: any): void;
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
  const { open, onHandleClose, itemSelected, onEditCompany } = props;

  // useState
  const [newName, setNewName] = useState<string>();
  const [newActivatedBy, setNewActivatedBy] = useState<any>();
  const [countId, setCountId] = useState<number>(11);
  const [newRevenue, setNewRevenue] = useState<any>();

  const c = useStyles();

  const addNewCompany = () => {
    const newCompanies = {
      Id: countId,
      Name: newName,
      ActivatedBy: newActivatedBy,
      Revenue: newRevenue,
    };
    onEditCompany(newCompanies);
    setNewName("");
    setNewActivatedBy(formatDate(new Date()));
    setNewRevenue(0);
    console.log();
  };

  React.useEffect(() => {
    if (itemSelected) {
      setNewName(itemSelected.Name);
      setNewActivatedBy(itemSelected.ActivatedBy);
      setNewRevenue(itemSelected.Revenue);
      console.log(itemSelected.ActivatedBy);
    }
  }, [itemSelected]);

  return (
    <div>
      {itemSelected && (
        <Modal
          open={open}
          onClose={() => onHandleClose()}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={c.root}>
            <>
              <FormInput
                type={"text"}
                value={itemSelected.Name}
                name={"Name"}
                label={"Name"}
                handleChange={(e: any) => {
                  setNewName(e.target.value);
                }}
              />
              <FormInput
                type={"date"}
                value={"2017 - 05 - 24"}
                name={"ActivatedBy"}
                handleChange={(e: any) => {
                  setNewActivatedBy(formatDate(e.target.value));
                }}
              />
              <FormInput
                type={"number"}
                value={itemSelected.Revenue}
                name={"Revenue"}
                label={"Revenue"}
                handleChange={(e: any) => {
                  setNewRevenue(e.target.value);
                }}
              />
            </>

            <CustomButton
              title={"Edit"}
              onClickAction={() => addNewCompany()}
              onClickClose={onHandleClose}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EditForm;
