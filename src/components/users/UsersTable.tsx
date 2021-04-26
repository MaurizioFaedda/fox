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
import EditForm from "./EditForm";
import SearchFilter from "./SearchFilter";

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

const StyledTableRow = withStyles((theme: Theme) => createStyles({}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  boxBtn: {
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
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
  onAddUser(item: any): void;
  itemSelected: any;
  onEditUser(any: any): void;
};

const UsersTable = (props: IProps) => {
  const {
    list,
    handleFocusOnClick,
    selected,
    deleteSelectedUsers,
    onAddUser,
    itemSelected,
    onEditUser,
  } = props;

  const c = useStyles();

  // Stato locale da gestire qua tipo open popup / close popup
  const [openAddForm, setOpenAddForm] = React.useState<boolean>(false);
  const [openEditForm, setOpenEditForm] = React.useState<boolean>(false);
  const [filteredList, setFilteredList] = React.useState<any>([]);
  const [filterInput, setFilterInput] = React.useState<string>("");

  const handleClose = () => {
    setOpenAddForm(false);
    setOpenEditForm(false);
  };

  const changeFilter = (e: any) => {
    // console.log(e.target.value);

    setFilterInput(e.target.value);
    // console.log(filterInput);
    let newArr = ["prova", "prova2"];

    setFilteredList(
      list.filter((item: any) => {
        return item.name.toLowerCase() === filterInput.toLowerCase();
      })
    );

    console.log(filteredList);
  };

  return (
    <>
      <div className={c.boxBtn}>
        <div className={c.boxBtn}>
          <SearchFilter onChange={changeFilter} />
        </div>

        <UsersActionBtn
          typeIcon="Add"
          disabled={false}
          selected={selected}
          onClickEvent={() => {
            // setOpen
            setOpenAddForm(true);
          }}
        />
        <AddForm
          open={openAddForm}
          handleClose={handleClose}
          addUser={onAddUser}
        />

        <UsersActionBtn
          typeIcon="Edit"
          selected={selected}
          onClickEvent={() => {
            setOpenEditForm(true);
          }}
        />

        <EditForm
          openForm={openEditForm}
          onHandleClose={handleClose}
          list={list}
          selected={selected}
          itemSelected={itemSelected.length > 0 ? itemSelected[0] : null}
          onEditUser={onEditUser}
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
