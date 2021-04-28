import React from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btnUsers: {
      backgroundColor: "green",
    },
  })
);

type IProps = {
  title: string;
  goPageUser: any;
  onSetHome: Function;
};

const UsersBtn = (props: IProps) => {
  const { title, goPageUser, onSetHome } = props;
  const c = useStyles();

  return (
    <button
      className={c.btnUsers}
      onClick={() => {
        goPageUser();
        onSetHome();
      }}
    >
      {title}
    </button>
  );
};

export default UsersBtn;
