import React, { useEffect, useState } from "react";
import UsersTable from "../../components/users/UsersTable";
import { IUsers } from "./type";

type IProps = {
  show: Boolean;
};

const UsersList = (props: IProps) => {
  const { show } = props;
  const [usersList, setUsersList] = useState<IUsers[]>([]);
  const [selected, setSelected] = useState<number>();
  const [newUser, setNewUser] = useState<IUsers[]>([
    {
      id: 0,
      name: "mario",
      username: "prova",
      age: 0,
      birthday: "adfafa",
    },
  ]);
  /** Gestione stato e funzioni che permettono di fare queste operazioni */
  // Add users
  // Edit users
  // Assegna Company

  // focus on click
  const handleFocusOnClick = (index: number) => {
    setSelected(index);
  };

  // add users
  const addUserTable = () => {
    console.log("addUserTable", "iNSERT NEW USER");
  };

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

  // delete users
  const deleteSelectedUsers = (selected: number) => {
    console.log(selected);
    const newArr = usersList.filter((item) => {
      return usersList.indexOf(item) + 1 !== selected;
    });
    setUsersList(newArr);
    setSelected(0);
  };

  // API call Users
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/PietroMarrazzo/json-users/db`)
      .then((response) => response.json())
      .then((json) => setUsersList(json["users"]));
  }, []);
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
function setUsersList(arg0: any): any {
  throw new Error("Function not implemented.");
}
