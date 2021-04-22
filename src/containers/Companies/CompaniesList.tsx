import React from "react";
import CompanyTable from "../../components/companies/CompanyTable";

type IProps = {
  show: Boolean;
  selected?: number;
  list: any;
  deleteSelected(selected: number): void;
  handleFocusOnClick(id: number): void;
  handleClose: Function;
  handleOpen: Function;
  open: boolean;
};

const CompaniesList = (props: IProps) => {
  const {
    show,
    handleFocusOnClick,
    selected,
    list,
    deleteSelected,
    handleClose,
    handleOpen,
    open,
  } = props;

  // useEffect(() => {
  //   console.log("CompaniesList show", show);
  //   if (show) {
  //     console.log("sono vero");
  //   }
  // }, [show]);
  return (
    <>
      {show && (
        <CompanyTable
          arr={list}
          selected={selected && selected}
          handleFocusOnClick={handleFocusOnClick}
          deleteSelected={deleteSelected}
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
        />
      )}
    </>
  );
};

export default CompaniesList;
