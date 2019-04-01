import * as React from "react";
import { render } from "react-dom";
import { MeineKomponente } from "./MeineKomponente";
import { Index } from "./Pages/Index";
import { Posts } from "./Pages/Posts";
import { CreateNewPost } from "./Pages/CreateNewPost";

import { Paper, createMuiTheme } from "@material-ui/core";

import "./styles.css";
import { ThemeProvider } from "@material-ui/styles";

// *****************

/**
 * funktion muss mit use beginnen! React HOOK
 * @param target mit React use damit nicht immer neu regerendert wird
 * @param setStatus
 */
function useNavigationHandler(target, setStatus) {
  return React.useCallback(
    function(event) {
      event.preventDefault();
      setStatus(target);
    },
    [target, setStatus]
  );
}

function App() {
  const [status, setStatus] = React.useState("index"); // fuer Navigation

  const indexOnClick = useNavigationHandler("index", setStatus);
  function postsOnClick(event) {
    // innere verschachtelte Funktion
    event.preventDefault();
    setStatus("posts");
  }
  function newOnClick(event) {
    // innere verschachtelte Funktion
    event.preventDefault();
    setStatus("new");
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
          Posts
        </a>{" "}
        <br />
        <a href="" onClick={newOnClick}>
          Neues Post erstellen
        </a>
      </nav>
      <main>
        <Paper>
          <h1>Willkommen auf der Startseite</h1>
        </Paper>
        {status === "index" && <Index />}
        {status === "posts" && <Posts />}
        {status === "new" && <CreateNewPost />}

        {/* <h1>Welcome to Christophs Sandbox on Github</h1>
        <h2>Start editing to see some magic happen!</h2>

        <div>jsx wird von babel in javascript transpiliert</div>
        <MeineKomponente name="uebergebenerName">
          <h5>Child element: Einen schönen Tag</h5>
        </MeineKomponente> */}
      </main>
    </div>
  );
}

export function renderFkt() {
  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  });

  const rootElement = document.getElementById("root");
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    rootElement
  );
}
