import React, { useEffect, useState } from "react";
import ComplexButtons from "./containers/ComplexButtons";
import CompaniesList from "./containers/Companies/CompaniesList";
import UsersList from "./containers/users/UsersList";

const App = () => {
  const [showTable, setShowTable] = useState<Boolean>(false);
  const [showTableUsers, setShowTableUsers] = useState<Boolean>(false);
  const [selected, setSelected] = React.useState<number>();

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

  const handleFocusOnClick = (index: number) => {
    // let focusItem = arr.filter((elem) => {
    //   if (elem.id === id) {
    //     return elem;
    //   }
    setSelected(index);
    // console.log(index);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Gestione Aziendale</h2>

        <ComplexButtons
          handleToggle={handleToggle}
          handleToggleUsers={handleToggleUsers}
        />

        {/* <ComButton /> */}
      </header>
      {/* I haven't put the condition here because 
      if not at every click it makes the call 
      so I pass the boolean value*/}
      <CompaniesList show={showTable} />

      <UsersList
        selected={selected}
        show={showTableUsers}
        handleFocusOnClick={handleFocusOnClick}
      />
    </div>
  );
};

export default App;
