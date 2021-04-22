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
import CompanyActionBtn from "./CompanyActionBtn";

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
  arr: any;
  selected?: number;
  deleteSelected(selected?: number): void;
  handleFocusOnClick(id: number): void;
};

const CompanyTable = (props: IProps) => {
  const { arr, selected, handleFocusOnClick, deleteSelected } = props;
  const c = useStyles();

  return (
    <>
      <div className={c.boxBtn}>
        <CompanyActionBtn
          selected={selected}
          disabled={false}
          typeIcon="Add"
          onClickEvent={() => {
            console.log("Add");
          }}
        />
        <CompanyActionBtn
          selected={selected}
          disabled={true}
          typeIcon="Edit"
          onClickEvent={() => {
            console.log("Edit", selected);
          }}
        />
        <CompanyActionBtn
          selected={selected}
          disabled={true}
          typeIcon="Delete"
          onClickEvent={() => {
            deleteSelected(selected);
          }}
        />
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
                  handleFocusOnClick(index + 1);
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
