import React from "react";
import UsersTable from "../../components/users/UsersTable";

type IProps = {
  show: Boolean;
  selected?: number;
  list: any;
  handleFocusOnClick(id: number): void;
  deleteSelectedUsers(selected?: number): void;
  addUser: Function;
};

const UsersList = (props: IProps) => {
  const {
    show,
    handleFocusOnClick,
    selected,
    list,
    deleteSelectedUsers,
    addUser,
  } = props;

  /** Gestione stato e funzioni che permettono di fare queste operazioni */
  // Add users
  // Remove users
  // Edit users
  // Assegna Company

  const addUserTable = () => {
    console.log("addUserTable", "iNSERT NEW USER");
  };

  return (
    <div>
      {show && (
        <UsersTable
          selected={selected && selected}
          handleFocusOnClick={handleFocusOnClick}
          list={list}
          deleteSelectedUsers={deleteSelectedUsers}
          addUser={addUserTable}
        />
      )}
    </div>
  );
};

export default UsersList;
