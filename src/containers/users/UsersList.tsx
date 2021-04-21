import React, { useState, useEffect } from "react";
import UsersTable from "../../components/users/UsersTable";
import { IUsers } from "./type";

type IProps = {
  show: Boolean;
  selected?: number;
  handleFocusOnClick(id: number): void;
};

const UsersList = (props: IProps) => {
  const { show, handleFocusOnClick, selected } = props;
  const [usersList, setUsersList] = useState<IUsers[]>([]);

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
          arr={usersList}
          handleFocusOnClick={handleFocusOnClick}
        />
      )}
    </div>
  );
};

export default UsersList;
