import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: 30,
    },
    closedSearch: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 50,
    },
    openedSearch: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 500,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
      marginRight: 18,
    },
  })
);

type IProps = {
  onChangeFilter?: any;
};

function SearchFilter(props: IProps) {
  const { onChangeFilter } = props;
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const classes = useStyles();

  return (
    <Paper
      className={`${openSearch ? classes.openedSearch : classes.closedSearch} ${
        classes.root
      }`}
    >
      <InputBase
        className={classes.input}
        onChange={onChangeFilter}
        placeholder="Search filter"
        inputProps={{ "aria-label": "search filter" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={() => setOpenSearch(openSearch ? false : true)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchFilter;
