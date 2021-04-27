import React, { ChangeEvent, useEffect, useState } from "react";
import CompanyTable from "../../components/companies/CompanyTable";
import { ICompanies } from "./type";

type IProps = {
  show: Boolean;
};

const CompaniesList = (props: IProps) => {
  const [companiesList, setCompaniesList] = useState<ICompanies[]>([]);
  const [selected, setSelected] = useState<any>();
  const [itemSelected, setItemSelected] = useState<any>([]);
  const [filteredList, setFilteredList] = useState<any>([]);
  const [filterInput, setFilterInput] = useState<any>("");

  const { show } = props;

  //adds a new company
  const addCompanies = (item: any) => {
    const newItem = {
      Id: item.Id,
      Name: item.Name,
      ActivatedBy: item.ActivatedBy,
      Revenue: item.Revenue,
    };
    setCompaniesList([newItem, ...companiesList]);
  };

  // edit an existing company
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

  // delete a company by id
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

  const compareObjects = (object1: any, object2: any, key: any) => {
    const obj1 = object1[key].toUpperCase();
    const obj2 = object2[key].toUpperCase();

    if (obj1 < obj2) {
      return -1;
    }
    if (obj1 > obj2) {
      return 1;
    }
    return 0;
  };

  const getSortByName = (check: boolean) => {
    if (filteredList.length > 0) {
      setFilteredList(
        filteredList.sort((company1: any, company2: any) =>
          check
            ? compareObjects(company1, company2, "Name")
            : compareObjects(company2, company1, "Name")
        )
      );
    } else {
      setCompaniesList(
        companiesList.sort((company1: any, company2: any) =>
          check
            ? compareObjects(company1, company2, "Name")
            : compareObjects(company2, company1, "Name")
        )
      );
    }
  };

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/MaurizioFaedda/companies-json/db`
    )
      .then((response) => response.json())
      .then((json) => setCompaniesList(json["companies"]));

    // };
  }, []);

  // itemSelected takes the value of companiesList
  // or filteredList according to the conditions
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

  // filteredList updates when searchBar input changes
  useEffect(() => {
    let filterRevenue: number | null = null;
    filterRevenue = parseInt(filterInput);

    setFilteredList(
      companiesList.filter((company: ICompanies) => {
        return (
          company.Name.toLowerCase().includes(filterInput.toLowerCase()) ||
          (filterRevenue && company.Revenue === filterRevenue)
        );
      })
    );
    setSelected(0);
  }, [filterInput]);

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
          filterInput={filterInput}
          getSortByName={getSortByName}
        />
      )}
    </>
  );
};

export default CompaniesList;
