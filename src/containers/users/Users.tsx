import React from "react";
import UsersBtn from "../../components/users/actionButtons/UsersBtn";
import { IUsers } from "./type";

type IProps = {};
const Users = (props: IProps) => {
  const [listUsers, setListUsers] = React.useState<IUsers[]>([]);

  const handleShowUsers = () => {
    console.log("pietro 2");

    let _listUsers = listUsers;

    //  TODO da sistemare
    _listUsers.push({
      Id: 1,
      Name: "peppo",
    });
  };

  return <UsersBtn title="Show Users" goPageUser={handleShowUsers} />;
};

export default Users;
