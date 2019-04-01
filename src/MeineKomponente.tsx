import React from "react"; // Import für jede react Komponente benötigt
import { checkPropTypes } from "prop-types";

export function MeineKomponente({ name: string, children }) {
  // const { name, begruessung } = props; // destructuring
  return (
    <div>
      <h2>meine Komponente</h2>
      <h3>Hallo {name} )</h3>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>

      <h1>Angehaengte Children Elemente:</h1>
      {children}
    </div>
  );
}
