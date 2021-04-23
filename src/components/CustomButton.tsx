import React from "react";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: "100%",
    },
  })
);

type IProps = {
  onClickAction: Function;
  onClickClose: Function;
  title: string;
};

const CustomButton = (props: IProps) => {
  const { onClickAction, onClickClose, title } = props;
  const classes = useStyles();

  return (
    <div>
      <Button
        onClick={() => {
          onClickAction();
          onClickClose();
        }}
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        {title}
      </Button>
    </div>
  );
};

export default CustomButton;
