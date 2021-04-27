import React, { ChangeEvent, useEffect, useState } from "react";
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
  const [filteredList, setFilteredList] = useState<any>([]);
  const [filterInput, setFilterInput] = useState<any>("");

  /** Gestione stato e funzioni che permettono di fare queste operazioni */

  // Assegna Company

  // focus on click
  const handleFocusOnClick = (index: number) => {
    setSelected(index);
  };

  // add users
  const addUser = (item: any) => {
    // let IdCount = usersList.length + 1;
    const max = 1999;
    const min = 1000;
    let idCount = Math.floor(Math.random() * (max - min)) + min;

    const newAdd = {
      id: idCount,
      name: item.name,
      username: item.username,
      age: item.age,
      birthday: item.birthday,
      idCompany: item.idCompany,
    };
    setUsersList([newAdd, ...usersList]);
  };

  // delete users
  const deleteSelectedUsers = () => {
    const newArr = usersList.filter((item) => {
      return item.id !== itemSelected[0].id;
    });
    setUsersList(newArr);
    setFilteredList(
      filteredList.filter((item: any) => {
        return item.id !== itemSelected[0].id;
      })
    );
    setSelected(0);
  };

  // edit users
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

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterInput(e.target.value);
  };

  // SORTING FUNCTIONS
  const compareObjects = (object1: any, object2: any, key: any) => {
    let obj1: any;
    let obj2: any;
    if (!isNaN(key)) {
      obj1 = object1[key].toUpperCase();
      obj2 = object2[key].toUpperCase();
    } else {
      obj1 = object1[key];
      obj2 = object2[key];
    }

    if (obj1 < obj2) {
      return -1;
    }
    if (obj1 > obj2) {
      return 1;
    }
    return 0;
  };

  const getSortBy = (check: boolean, key: any) => {
    if (filteredList.length > 0) {
      setFilteredList(
        filteredList.sort((user1: any, user2: any) =>
          check
            ? compareObjects(user1, user2, key)
            : compareObjects(user2, user1, key)
        )
      );
    } else {
      setUsersList(
        usersList.sort((user1: any, user2: any) =>
          check
            ? compareObjects(user1, user2, key)
            : compareObjects(user2, user1, key)
        )
      );
    }
  };

  // API call Users
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/PietroMarrazzo/json-users/db`)
      .then((response) => response.json())
      .then((json) => setUsersList(json["users"]));
  }, []);

  useEffect(() => {
    if (filteredList && filteredList.length > 0) {
      setItemSelected(
        filteredList.filter((item: any) => {
          return filteredList.indexOf(item) + 1 === selected;
        })
      );
    } else
      setItemSelected(
        usersList.filter((item: any) => {
          return usersList.indexOf(item) + 1 === selected;
        })
      );
  }, [selected]);

  useEffect(() => {
    let filterID: number | null = null;
    filterID = parseInt(filterInput);

    setSelected(0);
    setFilteredList(
      usersList.filter((user: IUsers) => {
        return (
          user.name.toLowerCase().includes(filterInput.toLowerCase()) ||
          (filterID && user.id === filterID)
        );
      })
    );
  }, [filterInput]);

  // useEffect(() => {
  //   setFilteredList(usersList);
  // }, []);

  return (
    <div>
      {show && (
        <UsersTable
          list={filteredList.length > 0 ? filteredList : usersList}
          selected={selected && selected}
          handleFocusOnClick={handleFocusOnClick}
          deleteSelectedUsers={deleteSelectedUsers}
          onAddUser={addUser}
          itemSelected={itemSelected}
          onEditUser={editUser}
          onChangeFilter={onChangeFilter}
          onGetSortBy={getSortBy}
        />
      )}
    </div>
  );
};

export default UsersList;
