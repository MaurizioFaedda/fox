import React, { useEffect, useState } from "react";
import CompanyTable from "../../components/companies/CompanyTable";
import { ICompanies } from "./type";

type IProps = {
  show: Boolean;
};

const CompaniesList = (props: IProps) => {
  const [companiesList, setCompaniesList] = useState<ICompanies[]>([]);
  const [selected, setSelected] = React.useState<number>();

  const { show } = props;

  // delete functions
  const deleteSelected = (selected: number) => {
    console.log(selected);
    const newArr = companiesList.filter((item) => {
      return companiesList.indexOf(item) + 1 !== selected;
    });
    setCompaniesList(newArr);
    setSelected(0);
  };

  const handleFocusOnClick = (index: number) => {
    setSelected(index);
  };

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/MaurizioFaedda/companies-json/db`
    )
      .then((response) => response.json())
      .then((json) => setCompaniesList(json["companies"]));

    // };
  }, []);

  return (
    <>
      {show && (
        <CompanyTable
          arr={companiesList}
          selected={selected && selected}
          handleFocusOnClick={handleFocusOnClick}
          deleteSelected={deleteSelected}
        />
      )}
    </>
  );
};

export default CompaniesList;
