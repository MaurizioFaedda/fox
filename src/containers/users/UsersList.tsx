import React, { useEffect, useState } from "react";
import UsersTable from "../../components/users/UsersTable";
import { IUsers } from "./type";

type IProps = {
  show: Boolean;
};

const UsersList = (props: IProps) => {
  const { show } = props;
  const [usersList, setUsersList] = useState<IUsers[]>([]);
  const [selected, setSelected] = useState<any>();
  const [itemSelected, setItemSelected] = useState<any>([]);

  /** Gestione stato e funzioni che permettono di fare queste operazioni */

  // Assegna Company

  // focus on click
  const handleFocusOnClick = (index: number) => {
    setSelected(index);
  };

  // add users
  const addUser = (item: any) => {
    let IdCount = usersList.length + 1;

    const newAdd = {
      id: IdCount++,
      name: item.name,
      username: item.username,
      age: item.age,
      birthday: item.birthday,
      idCompany: item.idCompany,
    };
    setUsersList([newAdd, ...usersList]);
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

  const editUser = (item: any) => {
    const newItem = {
      id: item.id,
      name: item.name,
      username: item.username,
      age: item.age,
      birthday: item.birthday,
      idCompany: item.idCompany,
    };
    usersList[selected - 1] = newItem;
    setSelected(0);
  };

  // API call Users
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/PietroMarrazzo/json-users/db`)
      .then((response) => response.json())
      .then((json) => setUsersList(json["users"]));
  }, []);

  useEffect(() => {
    setItemSelected(
      usersList.filter((item: any) => {
        return usersList.indexOf(item) + 1 === selected;
      })
    );
  }, [selected]);

  return (
    <div>
      {show && (
        <UsersTable
          selected={selected && selected}
          handleFocusOnClick={handleFocusOnClick}
          list={usersList}
          deleteSelectedUsers={deleteSelectedUsers}
          onAddUser={addUser}
          itemSelected={itemSelected}
          onEditUser={editUser}
        />
      )}
    </div>
  );
};

export default UsersList;
