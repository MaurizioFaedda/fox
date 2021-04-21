import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

type IProps = {
  typeIcon: any;
};

const CompanyActionBtn = (props: IProps) => {
  const { typeIcon } = props;
  return (
    <>
      <IconButton>
        {(() => {
          switch (typeIcon) {
            case "Delete":
              return <DeleteIcon />;
            case "Add":
              return <AddIcon />;
            case "Edit":
              return <EditIcon />;
          }
        })()}
      </IconButton>
    </>
  );
};

export default CompanyActionBtn;
