import React from "react";
import UsersTable from "../../components/users/UsersTable";

type IProps = {
  show: Boolean;
  list: any;
  handleFocusOnClick(id: number): void;
  addUser: Function;
};

const UsersList = (props: IProps) => {
  const { show, handleFocusOnClick, list, addUser } = props;

  const [selected, setSelected] = React.useState<number>();
  /** Gestione stato e funzioni che permettono di fare queste operazioni */
  // Add users
  // Edit users
  // Assegna Company

  // add users
  const addUserTable = () => {
    console.log("addUserTable", "iNSERT NEW USER");
  };

  // delete users
  const deleteSelectedUsers = (selected: number) => {
    console.log(selected);
    const newArr = usersList.filter((item) => {
      return usersList.indexOf(item) + 1 !== selected;
    });
    setUsersList(newArr);
    setSelected(0);
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
