import React from "react";
import CompanyTable from "../../components/companies/CompanyTable";

type IProps = {
  show: Boolean;
  selected?: number;
  list: any;
  deleteSelected(selected: number): void;
  handleFocusOnClick(id: number): void;
};

const CompaniesList = (props: IProps) => {
  const { show, selected, handleFocusOnClick, list, deleteSelected } = props;

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
        />
      )}
    </>
  );
};

export default CompaniesList;
