import React, { useState } from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import CompaniesList from "./companies/CompaniesList";
import UsersList from "./users/UsersList";
import CompanyBtn from "../components/companies/CompanyBtn";
import UsersBtn from "../components/users/actionButtons/UsersBtn";

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
  const c = useStyles();

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
      />

      {/* button users list */}
      <UsersList
        selected={selected}
        show={showTableUsers}
        handleFocusOnClick={handleFocusOnClick}
      />
    </div>
  );
};
export default Home;
