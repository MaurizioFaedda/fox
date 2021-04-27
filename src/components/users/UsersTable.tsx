import React, { useState } from "react";
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
import { Card, CardContent, IconButton } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

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
    height: 50,
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxSearch: {
    display: "flex",
  },
  selected: {
    backgroundColor: "rgba(40,0,0,0.3)",
  },
  notSelected: {
    backgroundColor: "unset",
  },
  myIconBtn: {
    margin: "6px",
    color: "#fff",
  },
  ml20: {
    marginLeft: 20,
  },
});

type IProps = {
  selected?: number;
  list: any;
  itemSelected: any;
  onChangeFilter: Function;
  deleteSelectedUsers(selected?: number): void;
  handleFocusOnClick(id: number): void;
  onAddUser(item: any): void;
  onEditUser(any: any): void;
  onGetSortBy: Function;
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
    onChangeFilter,
    onGetSortBy,
  } = props;

  const c = useStyles();

  // Stato locale da gestire qua tipo open popup / close popup
  const [openAddForm, setOpenAddForm] = React.useState<boolean>(false);
  const [openEditForm, setOpenEditForm] = React.useState<boolean>(false);
  // const [filteredList, setFilteredList] = React.useState<any>([]);
  // const [filterInput, setFilterInput] = React.useState<string>("");
  const [filterName, setFilterName] = useState<boolean>(false);
  const [filterUsername, setFilterUsername] = useState<boolean>(false);
  const [filterAge, setFilterAge] = useState<boolean>(false);
  const [filterBirthday, setFilterBirthday] = useState<boolean>(false);
  const [filterId, setFilterId] = useState<boolean>(false);
  const [filterIdCompany, setFilterIdCompany] = useState<boolean>(false);

  const handleClose = () => {
    setOpenAddForm(false);
    setOpenEditForm(false);
  };

  return (
    <>
      <div className={c.boxBtn}>
        <div className={c.boxSearch}>
          <SearchFilter onChangeFilter={onChangeFilter} />
          <Card className={c.ml20}>
            <CardContent>{list.length} users</CardContent>
          </Card>
        </div>
        <div className={c.boxSearch}>
          <UsersActionBtn
            typeIcon="Add"
            disabled={false}
            selected={selected}
            color="primary"
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
            color="default"
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
            color="secondary"
            onClickEvent={() => {
              deleteSelectedUsers(selected);
            }}
          />
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table className={c.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>
                Name
                <IconButton
                  aria-label="delete"
                  className={c.myIconBtn}
                  size="small"
                  onClick={() => {
                    setFilterName(filterName ? false : true);
                    onGetSortBy(filterName, "name");
                  }}
                >
                  {!filterName && <ArrowDownwardIcon fontSize="inherit" />}
                  {filterName && <ArrowUpwardIcon fontSize="inherit" />}
                </IconButton>
              </StyledTableCell>
              <StyledTableCell>
                Username
                <IconButton
                  aria-label="delete"
                  className={c.myIconBtn}
                  size="small"
                  onClick={() => {
                    setFilterUsername(filterUsername ? false : true);
                    onGetSortBy(filterUsername, "username");
                  }}
                >
                  {!filterName && <ArrowDownwardIcon fontSize="inherit" />}
                  {filterName && <ArrowUpwardIcon fontSize="inherit" />}
                </IconButton>
              </StyledTableCell>
              <StyledTableCell>
                Id
                <IconButton
                  aria-label="delete"
                  className={c.myIconBtn}
                  size="small"
                  onClick={() => {
                    setFilterId(filterId ? false : true);
                    onGetSortBy(filterId, "id");
                  }}
                >
                  {!filterName && <ArrowDownwardIcon fontSize="inherit" />}
                  {filterName && <ArrowUpwardIcon fontSize="inherit" />}
                </IconButton>
              </StyledTableCell>
              <StyledTableCell>
                Age
                <IconButton
                  aria-label="delete"
                  className={c.myIconBtn}
                  size="small"
                  onClick={() => {
                    setFilterAge(filterAge ? false : true);
                    onGetSortBy(filterAge, "age");
                  }}
                >
                  {!filterName && <ArrowDownwardIcon fontSize="inherit" />}
                  {filterName && <ArrowUpwardIcon fontSize="inherit" />}
                </IconButton>
              </StyledTableCell>
              <StyledTableCell>
                Birthday
                <IconButton
                  aria-label="delete"
                  className={c.myIconBtn}
                  size="small"
                  onClick={() => {
                    setFilterBirthday(filterBirthday ? false : true);
                    onGetSortBy(filterBirthday, "birthday");
                  }}
                >
                  {!filterName && <ArrowDownwardIcon fontSize="inherit" />}
                  {filterName && <ArrowUpwardIcon fontSize="inherit" />}
                </IconButton>
              </StyledTableCell>
              <StyledTableCell>
                Id Company
                <IconButton
                  aria-label="delete"
                  className={c.myIconBtn}
                  size="small"
                  onClick={() => {
                    setFilterIdCompany(filterIdCompany ? false : true);
                    onGetSortBy(filterIdCompany, "idCompany");
                  }}
                >
                  {!filterName && <ArrowDownwardIcon fontSize="inherit" />}
                  {filterName && <ArrowUpwardIcon fontSize="inherit" />}
                </IconButton>
              </StyledTableCell>
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
