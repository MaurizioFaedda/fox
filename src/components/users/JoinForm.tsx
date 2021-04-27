import {
  Checkbox,
  createStyles,
  FormControlLabel,
  makeStyles,
  Modal,
  Theme,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton";
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
      overflowY: "scroll",
      height: 500,
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
  itemSelected?: any;
  userList: any;
  companiesCheckbox?: any;
};

const JoinForm = (props: IProps) => {
  const {
    openForm,
    onHandleClose,
    itemSelected,
    userList,
    companiesCheckbox,
  } = props;

  const [newIdCompany, setNewIdCompany] = useState<number>();

  const c = useStyles();

  //   useEffect(() => {
  //     console.log(itemSelected?.idCompany, "prova");
  //   }, [itemSelected]);

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
            <h3>Select companies to join theyr ID</h3>
            {companiesCheckbox.map((e: any, index: number) => {
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      color="primary"
                      checked={
                        itemSelected.idCompany.includes(e.Id) ? true : false
                      }
                      name="checkedA"
                    />
                  }
                  label={e.Name}
                />
              );
            })}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default JoinForm;
