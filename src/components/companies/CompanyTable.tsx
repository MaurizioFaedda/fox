import React, { ChangeEvent, useEffect, useState } from "react";
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
import CompanyActionBtn from "./CompanyActionBtn";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import SearchFilter from "./SearchFilter";
import IconButton from "@material-ui/core/IconButton";
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
  topTable: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
  },
  boxBtn: {
    display: "flex",
  },
  selected: {
    backgroundColor: "rgba(40,0,0,0.3)",
  },
  notSelected: {
    backgroundColor: "unset",
  },
  hidden: {
    display: "none",
  },
  myIconBtn: {
    margin: "6px",
    color: "#fff",
  },
});

type IProps = {
  arr: any;
  itemSelected: any;
  selected?: number;
  onChangeFilter: Function;
  filterInput: string;
  getSortByName: Function;
  onDeleteSelected(selected?: number): void;
  onHandleFocusOnClick(id: number): void;
  onAddCompanies(item: any): void;
  onEditCompany(any: any): void;
};

const CompanyTable = (props: IProps) => {
  const {
    onChangeFilter,
    itemSelected,
    arr,
    selected,
    onHandleFocusOnClick,
    onDeleteSelected,
    onAddCompanies,
    onEditCompany,
    filterInput,
    getSortByName,
  } = props;

  const c = useStyles();

  // useState Open/Close Form
  const [openAddForm, setOpenAddForm] = useState<boolean>(false);
  const [openEditForm, setOpenEditForm] = useState<boolean>(false);
  const [filterName, setFilterName] = useState<boolean>(false);
  const [filterDate, setFilterDate] = useState<boolean>(false);
  const [filterRevenue, setFilterRevenue] = useState<boolean>(false);
  // const [getListFilter, setGetListFilter] = useState<any>(arr);

  const handleClose = () => {
    setOpenAddForm(false);
    setOpenEditForm(false);
  };

  // created constant to use today's date formatted by
  // default for the ActivedBy attribute
  const formatDate = (date: any) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [day, month, year].join("/");
  };

  return (
    <>
      <div className={c.topTable}>
        <div>
          <SearchFilter
            placeholder="Search by Name or Revenue"
            onChangeFilter={onChangeFilter}
            filterInput={filterInput}
          />
          <div>
            {arr.length} Result{arr.length > 1 ? "s" : ""}
          </div>
          <button onClick={() => getSortByName()}>Order</button>
        </div>

        {/* action btn Section - add - edit - delete */}
        <div className={c.boxBtn}>
          <CompanyActionBtn
            selected={selected}
            disabled={false}
            color="primary"
            typeIcon="Add"
            onClickEvent={() => {
              setOpenAddForm(true);
            }}
          />
          <AddForm
            open={openAddForm}
            handleClose={handleClose}
            arr={arr}
            onAddCompanies={onAddCompanies}
          />

          <CompanyActionBtn
            selected={selected}
            disabled={true}
            color="default"
            typeIcon="Edit"
            onClickEvent={() => {
              setOpenEditForm(true);
            }}
          />
          <EditForm
            open={openEditForm}
            onHandleClose={handleClose}
            arr={arr}
            selected={selected}
            itemSelected={itemSelected.length > 0 ? itemSelected[0] : null}
            onEditCompany={onEditCompany}
          />
          <CompanyActionBtn
            selected={selected}
            disabled={true}
            color="secondary"
            typeIcon="Delete"
            onClickEvent={() => {
              onDeleteSelected(selected);
            }}
          />
        </div>
      </div>

      {/* Table section  */}
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
                    getSortByName(filterName);
                  }}
                >
                  {!filterName && <ArrowDownwardIcon fontSize="inherit" />}
                  {filterName && <ArrowUpwardIcon fontSize="inherit" />}
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="right">
                Activated By
                <IconButton
                  aria-label="delete"
                  className={c.myIconBtn}
                  size="small"
                  onClick={() => setFilterDate(filterDate ? false : true)}
                >
                  {filterDate && <ArrowDownwardIcon fontSize="inherit" />}
                  {!filterDate && <ArrowUpwardIcon fontSize="inherit" />}
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="right">
                Revenue
                <IconButton
                  aria-label="delete"
                  className={c.myIconBtn}
                  size="small"
                  onClick={() => setFilterRevenue(filterRevenue ? false : true)}
                >
                  {filterRevenue && <ArrowDownwardIcon fontSize="inherit" />}
                  {!filterRevenue && <ArrowUpwardIcon fontSize="inherit" />}
                </IconButton>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((item: any, index: number) => (
              <StyledTableRow
                className={index + 1 === selected ? c.selected : c.notSelected}
                key={index + 1}
                onClick={() => {
                  onHandleFocusOnClick(index + 1);
                }}
              >
                <StyledTableCell component="th" scope="row">
                  {item.Name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {formatDate(item.ActivatedBy)}
                </StyledTableCell>
                <StyledTableCell align="right">{item.Revenue}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CompanyTable;
