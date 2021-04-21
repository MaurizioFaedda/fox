import React, { useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

type IProps = {
  typeIcon: any;
  disabled: boolean;
  onClickEvent: Function;
};
const CompanyActionBtn = (props: IProps) => {
  const { typeIcon, disabled, onClickEvent } = props;
  const [title, setTitle] = useState<string>("");
  useEffect(() => {
    switch (typeIcon) {
      case "Delete":
        setTitle("Delete");
        break;
      case "Add":
        setTitle("Add");

        break;
      case "Edit":
        setTitle("Edit");

        break;
      default:
        break;
    }
  }, []);
  return (
    <button disabled={disabled} onClick={() => onClickEvent}>
      {title}
    </button>
    // <>
    //   {(() => {
    //     switch (typeIcon) {
    //       case "Add":
    //         return (
    //           <IconButton>
    //             <AddIcon />
    //           </IconButton>
    //         );
    //       case "Edit":
    //         return (
    //           <IconButton disabled={isActived}>
    //             <EditIcon />
    //           </IconButton>
    //         );
    //       case "Delete":
    //         return (
    //           <IconButton disabled={isActived}>
    //             <DeleteIcon />
    //           </IconButton>
    //         );
    //     }
    //   })()}
    // </>
  );
};

export default CompanyActionBtn;
