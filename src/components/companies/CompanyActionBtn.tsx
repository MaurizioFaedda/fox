import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

type IProps = {
  typeIcon: any;
  isActived: Boolean;
};
const CompanyActionBtn = (props: IProps) => {
  const { typeIcon, isActived } = props;
  return (
    <>
      {(() => {
        switch (typeIcon) {
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
          case "Delete":
            return (
              <IconButton disabled={{}}>
                <DeleteIcon />
              </IconButton>
            );
        }
      })()}
    </>
  );
};

export default CompanyActionBtn;
