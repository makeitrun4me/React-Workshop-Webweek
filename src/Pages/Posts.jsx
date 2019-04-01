import React from "react";

const fakeData = [
  { author: "Lenz", title: "CoolesPost1", text: "Inhalt" },
  { author: "John Doe", title: "Post2", text: "Inhalt2" },
  { author: "Lenz", title: "uncoolesPost3", text: "Inhalt3" }
];

export function Posts() {
  return (
    <div>
      <h1>Posts Component</h1>
      <ul>
        {fakeData.map(function(row) {
          return (
            <li>
              {row.author} schreibt: {row.title}
              <br />
              <pre>{row.text}</pre>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
