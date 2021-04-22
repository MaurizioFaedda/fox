import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import UsersActionBtn from "./UsersActionButtons";
import AddForm from "./AddForm";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    // root: {
    //   "&:nth-of-type(odd)": {
    //     backgroundColor: theme.palette.action.hover,
    //   },
    // },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  boxBtn: {
    float: "right",
  },
  selected: {
    backgroundColor: "rgba(40,0,0,0.3)",
  },
  notSelected: {
    backgroundColor: "unset",
  },
});

type IProps = {
  selected?: number;
  list: any;
  handleFocusOnClick(id: number): void;
  deleteSelectedUsers(selected?: number): void;
  handleClose: Function;
  handleOpen: Function;
  open: Boolean;
};

const UsersTable = (props: IProps) => {
  const {
    list,
    handleFocusOnClick,
    selected,
    deleteSelectedUsers,
    handleClose,
    handleOpen,
    open,
  } = props;
  const c = useStyles();

  return (
    <>
      <div className={c.boxBtn}>
        <UsersActionBtn
          typeIcon="Add"
          disabled={false}
          selected={selected}
          onClickEvent={() => {
            // setOpen
            handleOpen();
          }}
        />
        <AddForm open={open} />

        <UsersActionBtn
          typeIcon="Edit"
          selected={selected}
          onClickEvent={() => {
            console.log("Edit selected", selected);
          }}
        />
        <UsersActionBtn
          typeIcon="Delete"
          selected={selected}
          onClickEvent={() => {
            deleteSelectedUsers(selected);
          }}
        />
      </div>
      <TableContainer component={Paper}>
        <Table className={c.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Age</StyledTableCell>
              <StyledTableCell>Birthday</StyledTableCell>
              <StyledTableCell>Id Company</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item: any, index: number) => (
              <StyledTableRow
                key={index + 1}
                className={index + 1 === selected ? c.selected : c.notSelected}
                onClick={() => {
                  handleFocusOnClick(index + 1);
                }}
              >
                <StyledTableCell component="th" scope="row">
                  {item.name}
                </StyledTableCell>
                <StyledTableCell align="left">{item.username}</StyledTableCell>
                <StyledTableCell align="left">{item.id}</StyledTableCell>
                <StyledTableCell align="left">{item.age}</StyledTableCell>
                <StyledTableCell align="left">{item.birthday}</StyledTableCell>
                <StyledTableCell align="left">{item.idCompany}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UsersTable;
