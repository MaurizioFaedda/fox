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
  title: string;
  className?: any;
};

const UsersActionBtn = (props: IProps) => {
  const {
    disabled = true,
    onClickEvent,
    selected,
    color,
    title,
    className,
  } = props;
  // const [title, setTitle] = useState<string>("");

  const c = useStyles();

  return (
    <div className={c.root}>
      <Button
        className={className && className}
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
