import React from "react";
import CompanyBtn from "../../components/companies/CompanyBtn";

type IProps = {};
const Companies = (props: IProps) => {
  const clickBtn = () => {
    console.log("Click", "Maurizio 1");
  };
  return <CompanyBtn title="Maurizio 1" goPageCompany={clickBtn} />;
};

export default Companies;
