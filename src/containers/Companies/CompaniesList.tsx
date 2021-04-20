import React, { useState, useEffect } from "react";
import CompanyTable from "../../components/companies/CompanyTable";
import { ICompanies } from "./type";

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
  return <div>{show && <CompanyTable arr={companiesList} />}</div>;
};

export default CompaniesList;
