import {
  Checkbox,
  createStyles,
  FormControlLabel,
  makeStyles,
  Modal,
  Theme,
} from "@material-ui/core";
import React, { useState } from "react";
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
  itemSelected: any;
  userList: any;
};

const JoinForm = (props: IProps) => {
  const { openForm, onHandleClose, itemSelected, userList } = props;

  // const [newName, setNewName] = useState<string>();
  // const [newUsername, setNewUsername] = useState<string>();
  // const [newAge, setNewAge] = useState<number>();
  // const [newBirthday, setNewBirthday] = useState<any>(formatDate(new Date()));
  // const [newId, setNewId] = useState<number>();
  const [newIdCompany, setNewIdCompany] = useState<number>();

  const c = useStyles();

  //   const editNewUser = () => {
  //     const newUser = {
  //       // name: newName,
  //       // username: newUsername,
  //       // age: newAge,
  //       // birthday: newBirthday,
  //       // id: newId,
  //       idCompany: newIdCompany,
  //     };
  //   onEditUser(newUser);
  //   setNewName("");
  //   setNewUsername("");
  //   setNewAge(0);
  //   setNewBirthday(formatDate(new Date()));
  //   setNewId(0);
  //   setNewIdCompany(0);
  // };

  // useEffect(() => {
  //   if (itemSelected) {
  //     setNewName(itemSelected.name);
  //     setNewUsername(itemSelected.username);
  //     setNewAge(itemSelected.age);
  //     setNewBirthday(itemSelected.birthday);
  //     setNewId(itemSelected.id);
  //     setNewIdCompany(itemSelected.idCompany);
  //   }
  // }, [itemSelected]);

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
            {userList.map((e: any) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      //   checked={state.checkedA}
                      //   onChange={handleChange}
                      name="checkedA"
                    />
                  }
                  label="Secondary"
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
