import React, { useState, useEffect } from "react";
import CompanyTable from "../../components/companies/CompanyTable";
import { ICompanies } from "./type";
import CompanyActionBtn from "../../components/companies/CompanyActionBtn";

type IProps = {
  show: Boolean;
};

const CompaniesList = (props: IProps) => {
  const { show } = props;
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
      <CompanyActionBtn typeIcon="Add" />
      <CompanyActionBtn typeIcon="Edit" />
      <CompanyActionBtn typeIcon="Delete" />
      {show && <CompanyTable arr={companiesList} />}
    </>
  );
};

export default CompaniesList;
