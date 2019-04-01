import * as React from "react";
import { render } from "react-dom";
import { MeineKomponente } from "./MeineKomponente";

import "./styles.css";

// *****************

/**
 * funktion muss mit use beginnen! React HOOK
 * @param target mit React use damit nicht immer neu regerendert wird
 * @param setStatus
 */
function useNavigationHandler(target: string, setStatus) {
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
  function postsOnClick(event: Event) {
    // innere verschachtelte Funktion
    event.preventDefault();
    setStatus("posts");
  }
  function newOnClick(event: Event) {
    // innere verschachtelte Funktion
    event.preventDefault();
    setStatus("new");
  }

  // const stauts = React.useState("index")[0];
  return (
    <div className="App">
      <nav>
        <a href="" onClick={indexOnClick as any}>
          Startseite
        </a>{" "}
        <br />
        <a href="" onClick={postsOnClick as any}>
          Post
        </a>{" "}
        <br />
        <a href="" onClick={newOnClick as any}>
          Nöues Post erstellen
        </a>
      </nav>
      <main>
        {status === "index" && <h1>Index</h1>}
        {status === "posts" && <h1>Posts</h1>}
        {status === "new" && <h1>Neur Post</h1>}

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

const rootElement = document.getElementById("root");
render(<App />, rootElement);
