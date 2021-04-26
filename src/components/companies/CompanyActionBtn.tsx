import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

type IProps = {
  typeIcon: any;
  disabled: boolean;
  onClickEvent: Function;
  selected?: number;
  color: any;
};
const CompanyActionBtn = (props: IProps) => {
  const { typeIcon, disabled, onClickEvent, selected, color } = props;
  const [title, setTitle] = useState<string>("");

  const c = useStyles();

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
    // <button
    //   disabled={selected ? false : disabled}
    //   onClick={() => onClickEvent()}
    // >
    //   {title}
    // </button>
    <div className={c.root}>
      <Button
        onClick={() => onClickEvent()}
        disabled={selected ? false : disabled}
        variant="contained"
        color={color}
      >
        {title}
      </Button>
    </div>
  );
};

export default CompanyActionBtn;
