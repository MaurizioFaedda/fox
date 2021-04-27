import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 50,
    },
    widthOnclick: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 280,
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
    },
  })
);

type IProps = {
  onChangeFilter?: any;
  placeholder: string;
  filterInput: string;
};

const SearchFilter = (props: IProps) => {
  const [openInput, setOpenInput] = useState<boolean>(false);
  const { onChangeFilter, placeholder, filterInput } = props;
  const c = useStyles();

  return (
    <Paper
      component="form"
      className={`${openInput ? c.widthOnclick : c.root}`}
      // className={c.widthOnclick}
    >
      <InputBase
        className={c.input}
        onChange={onChangeFilter}
        placeholder={placeholder}
        defaultValue={filterInput}
        // inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton
        color="primary"
        className={c.iconButton}
        aria-label="directions"
        onClick={() => setOpenInput(!openInput ? true : false)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchFilter;
