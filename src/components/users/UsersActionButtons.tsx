import React, { useEffect, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
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
  disabled?: boolean;
  onClickEvent: Function;
  selected?: number;
  color: any;
};

const UsersActionBtn = (props: IProps) => {
  const { typeIcon, disabled = true, onClickEvent, selected, color } = props;
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
    <div className={c.root}>
      <Button
        disabled={selected ? false : disabled}
        onClick={() => onClickEvent()}
        variant="contained"
        color={color}
      >
        {title}
      </Button>
    </div>
  );
};

export default UsersActionBtn;
