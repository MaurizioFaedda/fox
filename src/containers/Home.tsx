import React, { useEffect, useState } from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import CompaniesList from "./companies/CompaniesList";
import UsersList from "./users/UsersList";
import CompanyBtn from "../components/companies/CompanyBtn";
import UsersBtn from "../components/users/actionButtons/UsersBtn";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

import { ICompanies } from "./companies/type";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      height: "100%",
      "& .MuiGrid-container": {
        alignItems: "center",
      },
    },
    header: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%",
      justifyContent: "center",
    },
  })
);

type IProps = {};

const Home = (props: IProps) => {
  const [showTable, setShowTable] = useState<Boolean>(false);
  const [showTableUsers, setShowTableUsers] = useState<Boolean>(false);
  const [homeHidden, setHomeHidden] = useState<Boolean>(false);
  const [firstCompaniesList, setFirstCompaniesList] = useState<ICompanies[]>(
    []
  );
  const c = useStyles();

  /**
   * Gestirà la visualizzazione dei contextButton Home e del vedere o no la Userlist e la companyList a seconda di chi ho selezionato
   * e il ritorna indietro (visualizzo di nuove i contextButton)
   */

  const handleToggle = () => {
    if (showTable) {
      setShowTable(false);
      setShowTableUsers(false);
    } else {
      setShowTable(true);
      setShowTableUsers(false);
    }
  };

  const handleToggleUsers = () => {
    if (showTableUsers) {
      setShowTableUsers(false);
      setShowTable(false);
    } else {
      setShowTableUsers(true);
      setShowTable(false);
    }
  };

  /**
   * Zona useEffect
   */
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/MaurizioFaedda/companies-json/db`
    )
      .then((response) => response.json())
      .then((json) => setFirstCompaniesList(json["companies"]));
    console.log("prova log", firstCompaniesList);
    // };
  }, []);

  return (
    <Container maxWidth="lg">
      <div className={c.wrap}>
        {homeHidden ? (
          <button
            onClick={() => {
              setHomeHidden(false);
              setShowTable(false);
              setShowTableUsers(false);
            }}
          >
            HOME
          </button>
        ) : (
          <Grid container justify="space-around">
            <Grid container xs={12} sm={6} justify="center">
              <CompanyBtn
                handleToggle={handleToggle}
                title="Companies"
                onSetHome={() => setHomeHidden(true)}
              />
            </Grid>
            <Grid container xs={12} sm={6} justify="center">
              <UsersBtn
                title="Users"
                onSetHome={() => setHomeHidden(true)}
                goPageUser={handleToggleUsers}
              />
            </Grid>
          </Grid>
        )}

        {firstCompaniesList.length > 0 && (
          <>
            <CompaniesList
              show={showTable}
              firstCompaniesList={firstCompaniesList}
              onChangeCompanies={(listCompanies: any) => {
                setFirstCompaniesList(listCompanies);
              }}
            />

            {/* button users list */}
            <UsersList
              show={showTableUsers}
              companiesCheckbox={firstCompaniesList}
            />
          </>
        )}
      </div>
    </Container>
  );
};
export default Home;
