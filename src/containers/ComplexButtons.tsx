import React from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import Companies from "./Companies/Companies";
import Users from "./users/Users";

const images = [
  {
    url: "/static/images/grid-list/breakfast.jpg",
    title: "Breakfast",
    width: "40%",
  },
  {
    url: "/static/images/grid-list/burgers.jpg",
    title: "Burgers",
    width: "40%",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%",
      justifyContent: "center",
      //   margin: "auto",
    },
  })
);

type IProps = {
  handleToggle: () => void;
};

const ButtonBases = (props: IProps) => {
  const { handleToggle } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* button companies list */}
      <Companies handleToggle={handleToggle} />

      {/* button users list */}
      <Users />
    </div>
  );
};
export default ButtonBases;
