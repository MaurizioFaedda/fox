import React from "react";
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
  disabled: boolean;
  onClickEvent: Function;
  selected?: number;
  color: any;
  title: string;
};
const CompanyActionBtn = (props: IProps) => {
  const { disabled, onClickEvent, selected, color, title } = props;

  const c = useStyles();

  return (
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
