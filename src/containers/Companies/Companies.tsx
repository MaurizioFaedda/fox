import React from "react";
import CompanyBtn from "../../components/companies/CompanyBtn";
import { ICompanies } from "./type";

type IProps = {};
const Companies = (props: IProps) => {
  const [listCompanies, setListCompanies] = React.useState<ICompanies[]>([]);

  const clickBtn = () => {
    console.log("Click", "Maurizio 1");
    let _listCompanies = listCompanies;
    _listCompanies.push({
      Id: 1,
      Name: "compagnia 1",
      Revenue: 1000,
      ActivatedBy: new Date(),
    });
    console.log("_listCompanies", "_listCompanies");
    //setList (_listCompanies)
  };
  return <CompanyBtn title="Maurizio 1" goPageCompany={clickBtn} />;
};

export default Companies;
