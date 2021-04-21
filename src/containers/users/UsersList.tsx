import React, { useState, useEffect } from "react";
import UsersTable from "../../components/users/UsersTable";
import { IUsers } from "./type";

type IProps = {
  show: Boolean;
};

const UsersList = (props: IProps) => {
  const { show } = props;
  const [usersList, setUsersList] = useState<IUsers[]>([]);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/PietroMarrazzo/json-users/db`)
      .then((response) => response.json())
      .then((json) => setUsersList(json["users"]));
  }, []);

  return <div>{show && <UsersTable arr={usersList} />}</div>;
};

export default UsersList;
