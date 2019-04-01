import React from "react"; // Import für jede react Komponente benötigt
import { checkPropTypes } from "prop-types";

export function MeineKomponente({ name: string, children }) {
  // const { name, begruessung } = props; // destructuring
  return (
    <div>
      <nav>
        <a href="">Startseite</a>
        <a href="">Post</a>
        <a href="">Nöues Post erstellen</a>
      </nav>
      {children}
    </div>
  );
}
