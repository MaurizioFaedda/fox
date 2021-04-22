import React from "react";
import UsersTable from "../../components/users/UsersTable";

type IProps = {
  show: Boolean;
  selected?: number;
  list: any;
  handleFocusOnClick(id: number): void;
  deleteSelectedUsers(selected?: number): void;
  handleClose: Function;
  handleOpen: Function;
  open: boolean;
  addUser: Function;
};

const UsersList = (props: IProps) => {
  const {
    show,
    handleFocusOnClick,
    selected,
    list,
    deleteSelectedUsers,
    handleClose,
    handleOpen,
    open,
    addUser,
  } = props;

  return (
    <div>
      {show && (
        <UsersTable
          selected={selected && selected}
          handleFocusOnClick={handleFocusOnClick}
          list={list}
          deleteSelectedUsers={deleteSelectedUsers}
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
          addUser={addUser}
        />
      )}
    </div>
  );
};

export default UsersList;
