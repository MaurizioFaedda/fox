import React from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import "fontsource-roboto";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%",
    },
    btnUsers: {
      width: 180,
      height: 180,
      border: "10px solid #05445E",
      borderRadius: 25,
      color: "white",
      backgroundColor: "",
      transition: "background-color .4s ease-in-out",
      "&:hover": {
        backgroundColor: "#189AB4",
      },
      "&:hover $title": {
        color: "#05445E",
      },
    },
    title: {
      fontSize: 20,
      color: "#05445E",
      textTransform: "uppercase",
    },
    image: {
      position: "relative",
      height: 200,
      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 100,
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.15,
        },
        "& $imageMarked": {
          opacity: 0,
        },
        "& $imageTitle": {
          border: "4px solid currentColor",
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white,
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
    <div className={c.root}>
      <ButtonBase
        focusRipple
        className={c.btnUsers}
        onClick={() => {
          goPageUser();
          onSetHome();
        }}
      >
        <span />
        <span>
          <Typography component="span" variant="subtitle1" color="inherit">
            <h2 className={c.title}>{title}</h2>
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
};

export default UsersBtn;
