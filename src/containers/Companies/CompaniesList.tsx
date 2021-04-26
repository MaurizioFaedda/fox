import React, { ChangeEvent, useEffect, useState } from "react";
import CompanyTable from "../../components/companies/CompanyTable";
import { ICompanies } from "./type";

type IProps = {
  show: Boolean;
};

const CompaniesList = (props: IProps) => {
  const [companiesList, setCompaniesList] = useState<ICompanies[]>([]);
  const [selected, setSelected] = React.useState<any>();
  const [itemSelected, setItemSelected] = useState<any>([]);
  const [filteredList, setFilteredList] = useState<any>([]);
  const [filterInput, setFilterInput] = useState<any>("");

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

  const editCompany = (item: any) => {
    const newItem = {
      Id: item.Id,
      Name: item.Name,
      ActivatedBy: item.ActivatedBy,
      Revenue: item.Revenue,
    };
    companiesList[selected - 1] = newItem;
    setSelected(0);
  };

  // delete functions
  const deleteSelected = () => {
    const newArr = companiesList.filter((item: any) => {
      return item.Id !== itemSelected[0].Id;
    });
    setCompaniesList(newArr);
    setFilteredList(
      filteredList.filter((item: any) => {
        return item.Id !== itemSelected[0].Id;
      })
    );

    setSelected(0);
  };

  const onChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterInput(e.target.value);
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
    if (filteredList && filteredList.length > 0) {
      setItemSelected(
        filteredList.filter((item: any) => {
          return filteredList.indexOf(item) + 1 === selected;
        })
      );
    } else
      setItemSelected(
        companiesList.filter((item: any) => {
          return companiesList.indexOf(item) + 1 === selected;
        })
      );
  }, [selected]);
  useEffect(() => {
    setFilteredList(
      companiesList.filter((company: any) => {
        return company.Name.toLowerCase().includes(filterInput.toLowerCase());
      })
    );
  }, [filterInput]);
  useEffect(() => {
    setFilteredList(companiesList);
  }, []);
  return (
    <>
      {show && (
        <CompanyTable
          arr={filteredList.length > 0 ? filteredList : companiesList}
          selected={selected && selected}
          onHandleFocusOnClick={handleFocusOnClick}
          onDeleteSelected={deleteSelected}
          onAddCompanies={addCompanies}
          itemSelected={itemSelected}
          onEditCompany={editCompany}
          onChangeFilter={onChangeFilter}
        />
      )}
    </>
  );
};

export default CompaniesList;
