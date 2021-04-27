import React, { ChangeEvent, useEffect, useState } from "react";
import CompanyTable from "../../components/companies/CompanyTable";
import { ICompanies } from "./type";

type IProps = {
  show: Boolean;
  firstCompaniesList?: any;
};

const CompaniesList = (props: IProps) => {
  const { show, firstCompaniesList } = props;

  const [companiesList, setCompaniesList] = useState<ICompanies[]>([]);
  const [selected, setSelected] = useState<any>();
  const [itemSelected, setItemSelected] = useState<any>([]);
  const [filteredList, setFilteredList] = useState<any>([]);
  const [filterInput, setFilterInput] = useState<any>("");

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
    let obj1: any;
    let obj2: any;
    if (!isNaN(key)) {
      obj1 = object1[key].toUpperCase();
      obj2 = object2[key].toUpperCase();
    } else {
      obj1 = object1[key];
      obj2 = object2[key];
    }

    if (obj1 < obj2) {
      return -1;
    }
    if (obj1 > obj2) {
      return 1;
    }
    return 0;
  };

  const getSortBy = (check: boolean, key: any) => {
    if (filteredList.length > 0) {
      setFilteredList(
        filteredList.sort((company1: any, company2: any) =>
          check
            ? compareObjects(company1, company2, key)
            : compareObjects(company2, company1, key)
        )
      );
    } else {
      setCompaniesList(
        companiesList.sort((company1: any, company2: any) =>
          check
            ? compareObjects(company1, company2, key)
            : compareObjects(company2, company1, key)
        )
      );
    }
  };

  // itemSelected takes the value of companiesList
  // or filteredList according to the conditions

  // call array

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

  useEffect(() => {
    setCompaniesList(firstCompaniesList);
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
          filterInput={filterInput}
          onGetSortBy={getSortBy}
        />
      )}
    </>
  );
};

export default CompaniesList;
