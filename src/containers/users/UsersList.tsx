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
  open: Boolean;
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
        />
      )}
    </div>
  );
};

export default UsersList;
