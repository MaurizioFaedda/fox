import React, { useEffect, useState } from "react";

type IProps = {
  typeIcon: any;
  disabled: boolean;
  onClickEvent: Function;
  selected?: number;
};
const CompanyActionBtn = (props: IProps) => {
  const { typeIcon, disabled, onClickEvent, selected } = props;
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
    <button
      disabled={selected ? false : disabled}
      onClick={() => onClickEvent()}
    >
      {title}
    </button>
  );
};

export default CompanyActionBtn;
