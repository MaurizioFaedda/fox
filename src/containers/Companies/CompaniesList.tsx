import React, { useState, useEffect } from "react";
import CompanyTable from "../../components/companies/CompanyTable";
import { ICompanies } from "./type";

type IProps = {
  show: Boolean;
  selected?: number;
  handleFocusOnClick(id: number): void;
};

const CompaniesList = (props: IProps) => {
  const { show, selected, handleFocusOnClick } = props;
  const [companiesList, setCompaniesList] = useState<ICompanies[]>([]);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/MaurizioFaedda/companies-json/db`
    )
      .then((response) => response.json())
      .then((json) => setCompaniesList(json["companies"]));
  }, []);
  return (
    <>
      {show && (
        <CompanyTable
          arr={companiesList}
          selected={selected && selected}
          handleFocusOnClick={handleFocusOnClick}
        />
      )}
    </>
  );
};

export default CompaniesList;
