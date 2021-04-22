import React, { useEffect, useState } from "react";
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

  const c = useStyles();

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
  const addUser = () => {};

  // delete functions
  const deleteSelected = (selected: number) => {
    console.log(selected);
    const newArr = companiesList.filter((item) => {
      return companiesList.indexOf(item) + 1 !== selected;
    });
    setCompaniesList(newArr);
    console.log(selected);
    console.log(companiesList);
  };

  const deleteSelectedUsers = (selected: number) => {
    console.log(selected);
    const newArr = usersList.filter((item) => {
      return usersList.indexOf(item) + 1 !== selected;
    });
    setUsersList(newArr);
    console.log(selected);
    console.log(usersList);
  };

  return (
    <div>
      <header className={c.header}>
        <CompanyBtn handleToggle={handleToggle} title="Companies" />
        <UsersBtn title="Users" goPageUser={handleToggleUsers} />
      </header>
      {/* button companies list */}
      <CompaniesList
        show={showTable}
        selected={selected}
        handleFocusOnClick={handleFocusOnClick}
        list={companiesList}
        deleteSelected={deleteSelected}
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
      />
    </div>
  );
};
export default Home;
