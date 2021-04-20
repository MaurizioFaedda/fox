import React from "react";
import CompanyBtn from "../../components/companies/CompanyBtn";

type IProps = {
  handleToggle: () => void;
};
const Companies = (props: IProps) => {
  const { handleToggle } = props;

  return <CompanyBtn handleToggle={handleToggle} title="Companies" />;
};

export default Companies;
