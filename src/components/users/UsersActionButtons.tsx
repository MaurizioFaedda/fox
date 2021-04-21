import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

type IProps = {
  typeIcon: any;
};

const UsersActionBtn = (props: IProps) => {
  const { typeIcon } = props;
  return (
    <>
      {(() => {
        switch (typeIcon) {
          case "Delete":
            return (
              <IconButton>
                <DeleteIcon />
              </IconButton>
            );
          case "Add":
            return (
              <IconButton>
                <AddIcon />
              </IconButton>
            );
          case "Edit":
            return (
              <IconButton>
                <EditIcon />
              </IconButton>
            );
        }
      })()}
    </>
  );
};

export default UsersActionBtn;
