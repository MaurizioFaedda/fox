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
import { IUsers } from "../../containers/users/type";

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
      height: "60%",
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
  itemSelected: any;
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

  const [idCompanies, setIdCompanies] = useState<any[]>([]);

  const c = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("oldid", idCompanies);

    let _newIdCompany: any = parseInt(event.target.value);

    if (!idCompanies.includes(_newIdCompany)) {
      setIdCompanies([...idCompanies, _newIdCompany]);
    } else {
      let _idCompanies = idCompanies;
      _idCompanies.splice(idCompanies.indexOf(_newIdCompany), 1);
      setIdCompanies(_idCompanies);
    }
    console.log("newid", _newIdCompany);
    console.log("update new array dopo lo splice", idCompanies);
  };

  useEffect(() => {
    setIdCompanies(itemSelected.idCompany);
    console.log("lista inizio", idCompanies);
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
            <h5>{itemSelected.name}</h5>
            <h3>Select companies to join theyr ID</h3>
            {companiesCheckbox.map((e: any, index: number) => {
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      onChange={handleChange}
                      key={e.Id}
                      value={e.Id}
                      defaultChecked={
                        itemSelected.idCompany.includes(e.Id) ? true : false
                      }
                      color="primary"
                      name="checkedA"
                    />
                  }
                  label={e.Name}
                />
              );
            })}
            <CustomButton
              title={"Save changes"}
              onClickAction={() => {
                editIdCompany(idCompanies, itemSelected);
                setIdCompanies([]);
              }}
              onClickClose={onHandleClose}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default JoinForm;
