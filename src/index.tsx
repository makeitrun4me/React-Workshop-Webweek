import * as React from "react";
import { render } from "react-dom";
import { MeineKomponente } from "./MeineKomponente";

import "./styles.css";

// *****************

function App() {
  return (
    <div className="App">
      <h1>Welcome to Christophs Sandbox on Github</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div>jsx wird von babel in javascript transpiliert</div>
      <MeineKomponente name="uebergebenerName">
        <h5>Child element: Einen schönen Tag</h5>
      </MeineKomponente>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
