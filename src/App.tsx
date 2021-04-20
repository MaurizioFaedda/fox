import React from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import ComplexButtons from "./containers/ComplexButtons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Gestione Aziendale</h2>

        {/* button 1 - show companies */}
        <ComplexButtons />

        {/* button 2 - show users */}
        {/* <ComButton /> */}
      </header>
    </div>
  );
}

export default App;
