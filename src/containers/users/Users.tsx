import React from "react";
import UsersBtn from "../../components/users/actionButtons/UsersBtn";
import { IUsers } from "./type";

type IProps = {
  handleToggleUsers: () => void;
};

const Users = (props: IProps) => {
  const { handleToggleUsers } = props;

  return (
    <>
      <UsersBtn title="Users" goPageUser={handleToggleUsers} />
    </>
  );
};

export default Users;
