import React, { useState } from "react";
import ComplexButtons from "./containers/ComplexButtons";
import CompaniesList from "./containers/Companies/CompaniesList";

const App = () => {
  const [showTable, setShowTable] = useState<Boolean>(true);

  const handleToggle = () => {
    if (showTable) {
      setShowTable(false);
    } else {
      setShowTable(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Gestione Aziendale</h2>

        <ComplexButtons handleToggle={handleToggle} />

        {/* <ComButton /> */}
      </header>
      {/* I haven't put the condition here because 
      if not at every click it makes the call 
      so I pass the boolean value*/}
      <CompaniesList show={showTable} />
    </div>
  );
};

export default App;
