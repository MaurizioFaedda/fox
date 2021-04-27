import {
  Button,
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
import SaveIcon from "@material-ui/icons/Save";

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
  editIdCompany: Function;
};

const JoinForm = (props: IProps) => {
  const {
    openForm,
    onHandleClose,
    itemSelected,
    userList,
    companiesCheckbox,
    editIdCompany,
  } = props;

  const [newIdCompany, setNewIdCompany] = useState<any>([
    itemSelected?.idCompany,
  ]);

  const c = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let _newIdCompany: any = newIdCompany.push(event.target.value);
    setNewIdCompany([...newIdCompany, _newIdCompany]);
    console.log(event.target.value, newIdCompany);

    // setTheArray([...theArray, newElement]);
  };

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
                      key={e.Id}
                      value={e.Id}
                      defaultChecked={
                        itemSelected.idCompany.includes(e.Id) ? true : false
                      }
                      color="primary"
                      onChange={handleChange}
                      name="checkedA"
                    />
                  }
                  label={e.Name}
                />
              );
            })}
            <CustomButton
              title={"Save changes"}
              onClickAction={editIdCompany(newIdCompany)}
              onClickClose={onHandleClose}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default JoinForm;
