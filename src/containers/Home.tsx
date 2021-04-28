import React, { useEffect, useState } from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import CompaniesList from "./companies/CompaniesList";
import UsersList from "./users/UsersList";
import CompanyBtn from "../components/companies/CompanyBtn";
import UsersBtn from "../components/users/actionButtons/UsersBtn";
import Grid from "@material-ui/core/Grid";
import { Box, Container } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ICompanies } from "./companies/type";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homeBtnUserHover: {
      "& .MuiBox-root": {
        "&:hover": {
          backgroundColor: "#189AB4",
          cursor: "pointer",
        },
      },
    },
    homeBtnCompanyHover: {
      "& .MuiBox-root": {
        "&:hover": {
          backgroundColor: "rgba(84, 159, 216, 0.2)",
          cursor: "pointer",
        },
      },
    },
    wrap: {
      height: "100%",
    },
    homeSection: {
      "& .MuiGrid-container": {
        alignItems: "center",
        justify: "center",
        height: "100vh",
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
        <div className={c.homeSection}>
          {homeHidden ? (
            <div
              className={`${c.homeBtnUserHover} ${
                showTable ? c.homeBtnCompanyHover : ""
              }`}
              // className={c.company}
            >
              <Box
                onClick={() => {
                  setHomeHidden(false);
                  setShowTable(false);
                  setShowTableUsers(false);
                }}
                display="flex"
                border={3}
                borderRadius={10}
                borderColor={showTable ? "#549fd8" : "#05445E"}
                my={10}
                p={1}
                width={130}
                color={showTable ? "#549fd8" : "#05445E"}
                fontWeight="fontWeightBold"
                css={{}}
              >
                <span>
                  <ArrowBackIosIcon />
                </span>
                <span>Return Home</span>
              </Box>
            </div>
          ) : (
            <Grid container justify="center">
              <Grid container xs={12} sm={6}>
                <Box display="flex">
                  <CompanyBtn
                    handleToggle={handleToggle}
                    title="Companies"
                    onSetHome={() => setHomeHidden(true)}
                  />

                  <UsersBtn
                    title="Users"
                    onSetHome={() => setHomeHidden(true)}
                    goPageUser={handleToggleUsers}
                  />
                </Box>
              </Grid>
            </Grid>
          )}
        </div>

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
