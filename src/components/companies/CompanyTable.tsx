import React, { ChangeEvent, useState } from "react";
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
import { Search } from "@material-ui/icons";

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
});

type IProps = {
  arr: any;
  itemSelected: any;
  selected?: number;
  onDeleteSelected(selected?: number): void;
  onHandleFocusOnClick(id: number): void;
  onAddCompanies(item: any): void;
  onEditCompany(any: any): void;
};

const CompanyTable = (props: IProps) => {
  const {
    itemSelected,
    arr,
    selected,
    onHandleFocusOnClick,
    onDeleteSelected,
    onAddCompanies,
    onEditCompany,
  } = props;

  const c = useStyles();

  // useState Open/Close Form
  const [openAddForm, setOpenAddForm] = useState<boolean>(false);
  const [openEditForm, setOpenEditForm] = useState<boolean>(false);
  const [filteredList, setFilteredList] = useState<any>([]);
  const [filterInput, setFilterInput] = useState<any>();
  const handleClose = () => {
    setOpenAddForm(false);
    setOpenEditForm(false);
  };

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  return (
    <>
      <div className={c.topTable}>
        <div>
          <SearchFilter onChangeFilter={onChangeFilter} />
        </div>
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

      <TableContainer component={Paper}>
        <Table className={c.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Activated By</StyledTableCell>
              <StyledTableCell align="right">Revenue</StyledTableCell>
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
                  {item.ActivatedBy}
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
