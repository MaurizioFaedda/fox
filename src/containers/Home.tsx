import React, { ChangeEvent, useEffect, useState } from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import CompaniesList from "./companies/CompaniesList";
import UsersList from "./users/UsersList";
import CompanyBtn from "../components/companies/CompanyBtn";
import UsersBtn from "../components/users/actionButtons/UsersBtn";
import { ICompanies } from "./companies/type";
import { IUsers } from "./users/type";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%",
      justifyContent: "center",
    },
  })
);

type IProps = {};

const Home = (props: IProps) => {
  const [showTable, setShowTable] = useState<Boolean>(false);
  const [showTableUsers, setShowTableUsers] = useState<Boolean>(false);
  const [selected, setSelected] = React.useState<number>();
  const [companiesList, setCompaniesList] = useState<ICompanies[]>([]);
  const [usersList, setUsersList] = useState<IUsers[]>([]);
  const [newUser, setNewUser] = useState<IUsers[]>([
    {
      id: 0,
      name: "mario",
      username: "prova",
      age: 0,
      birthday: "adfafa",
    },
  ]);

  const c = useStyles();

  /**
   * Gestirà la visualizzazione dei contextButton Home e del vedere o no la Userlist e la companyList a seconda di chi ho selezionato
   * e il ritorna indietro (visualizzo di nuove i contextButton)
   */

  const handleToggle = () => {
    if (showTable) {
      setShowTable(false);
      setShowTableUsers(false);
    } else {
      setShowTable(true);
      setShowTableUsers(false);
    }
  };

  const handleToggleUsers = () => {
    if (showTableUsers) {
      setShowTableUsers(false);
      setShowTable(false);
    } else {
      setShowTableUsers(true);
      setShowTable(false);
    }
  };

  const handleFocusOnClick = (index: number) => {
    setSelected(index);
  };

  //pop up functions
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // add functions

  // TODO DA SISTEMARE
  const addUser = () => {
    const newAdd = {
      id: newUser[0].id,
      name: newUser[0].name,
      username: newUser[0].username,
      age: newUser[0].age,
      birthday: newUser[0].birthday,
    };
    setUsersList([newAdd, ...usersList]);
    console.log(newAdd);
  };

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};

  // delete functions
  const deleteSelected = (selected: number) => {
    console.log(selected);
    const newArr = companiesList.filter((item) => {
      return companiesList.indexOf(item) + 1 !== selected;
    });
    setCompaniesList(newArr);
    setSelected(0);
  };

  const deleteSelectedUsers = (selected: number) => {
    console.log(selected);
    const newArr = usersList.filter((item) => {
      return usersList.indexOf(item) + 1 !== selected;
    });
    setUsersList(newArr);
    setSelected(0);
  };

  /**
   * Zona useEffect
   */

  // API call Companies
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/MaurizioFaedda/companies-json/db`
    )
      .then((response) => response.json())
      .then((json) => setCompaniesList(json["companies"]));

    // };
  }, []);

  // API call Users
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/PietroMarrazzo/json-users/db`)
      .then((response) => response.json())
      .then((json) => setUsersList(json["users"]));
  }, []);
  return (
    <div>
      <header className={c.header}>
        <CompanyBtn handleToggle={handleToggle} title="Companies" />
        <UsersBtn title="Users" goPageUser={handleToggleUsers} />
      </header>
      <button onClick={addUser}>Click</button>
      {/* button companies list */}
      <CompaniesList
        show={showTable}
        selected={selected}
        handleClose={handleClose}
        handleOpen={handleOpen}
        handleFocusOnClick={handleFocusOnClick}
        list={companiesList}
        deleteSelected={deleteSelected}
        open={open}
      />

      {/* button users list */}
      <UsersList
        selected={selected}
        show={showTableUsers}
        handleFocusOnClick={handleFocusOnClick}
        list={usersList}
        deleteSelectedUsers={deleteSelectedUsers}
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        addUser={addUser}
      />
    </div>
  );
};
export default Home;
