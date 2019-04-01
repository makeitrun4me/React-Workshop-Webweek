import * as React from "react";
import { render } from "react-dom";
import { MeineKomponente } from "./MeineKomponente";

import "./styles.css";

// *****************

function App() {
  const [status, setStatus] = React.useState("index"); // fuer Navigation

  function indexOnClick(event: Event) {
    // innere verschachtelte Funktion
    event.preventDefault();
    setStatus("index");
  }
  function postsOnClick(event: Event) {
    // innere verschachtelte Funktion
    event.preventDefault();
    setStatus("index");
  }
  function newOnClick(event: Event) {
    // innere verschachtelte Funktion
    event.preventDefault();
    setStatus("index");
  }

  // const stauts = React.useState("index")[0];
  return (
    <div className="App">
      <nav>
        <a href="" onClick={indexOnClick}>
          Startseite
        </a>{" "}
        <br />
        <a href="" onClick={postsOnClick}>
          Post
        </a>{" "}
        <br />
        <a href="" onClick={newOnClick}>
          Nöues Post erstellen
        </a>
      </nav>
      <main>
        <h1>Welcome to Christophs Sandbox on Github</h1>
        <h2>Start editing to see some magic happen!</h2>

        <div>jsx wird von babel in javascript transpiliert</div>
        <MeineKomponente name="uebergebenerName">
          <h5>Child element: Einen schönen Tag</h5>
        </MeineKomponente>
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
