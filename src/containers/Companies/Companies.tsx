import React from "react";
import CompanyBtn from "../../components/companies/CompanyBtn";
import { ICompanies } from "./type";

type IProps = {};
const Companies = (props: IProps) => {
  const [listCompanies, setListCompanies] = React.useState<ICompanies[]>([]);

  const clickBtn = () => {
    console.log("Click", "Maurizio 1");

    console.log("_listCompanies", "_listCompanies");
    //setList (_listCompanies)
  };
  return <CompanyBtn title="Companies" goPageCompany={clickBtn} />;
};

export default Companies;
