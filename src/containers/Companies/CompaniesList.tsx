import React, { useEffect, useState } from "react";
import CompanyTable from "../../components/companies/CompanyTable";
import { ICompanies } from "./type";

type IProps = {
  show: Boolean;
};

const CompaniesList = (props: IProps) => {
  const [companiesList, setCompaniesList] = useState<ICompanies[]>([]);
  const [selected, setSelected] = React.useState<any>();
  const [itemSelected, setItemSelected] = useState<any>([]);

  // const [newCompanies, setNewCompaies] = useState<ICompanies[]>([]);

  const { show } = props;

  // add companies
  const addCompanies = (item: any) => {
    const newItem = {
      Id: item.Id,
      Name: item.Name,
      ActivatedBy: item.ActivatedBy,
      Revenue: item.Revenue,
    };
    setCompaniesList([newItem, ...companiesList]);
  };

  // const editCompany = (item: any) => {
  //   const newItem = {
  //     Id: item.Id,
  //     Name: item.Name,
  //     ActivatedBy: item.ActivatedBy,
  //     Revenue: item.Revenue,
  //   };
  //   let newEditItem = [...companiesList];
  //   newEditItem[selected] = newItem;
  // };

  // delete functions
  const deleteSelected = (selected: number) => {
    const newArr = companiesList.filter((item) => {
      return companiesList.indexOf(item) + 1 !== selected;
    });
    setCompaniesList(newArr);
    setSelected(0);
  };

  // focus of the row I click of the table
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
  useEffect(() => {
    setItemSelected(
      companiesList.filter((item: any) => {
        return companiesList.indexOf(item) + 1 === selected;
      })
    );
  }, [selected]);

  return (
    <>
      {show && (
        <CompanyTable
          arr={companiesList}
          selected={selected && selected}
          handleFocusOnClick={handleFocusOnClick}
          deleteSelected={deleteSelected}
          onAddCompanies={addCompanies}
          itemSelected={itemSelected}
        />
      )}
    </>
  );
};

export default CompaniesList;
