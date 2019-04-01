import React from "react";

const fakeData = [
  { postId: 1, author: "Lenz", title: "CoolesPost1", text: "Inhalt" },
  { postId: 2, author: "John Doe", title: "Post2", text: "Inhalt2" },
  { postId: 3, author: "Lenz", title: "uncoolesPost3", text: "Inhalt3" }
];

export function Posts() {
  return (
    <React.Fragment>
      <h1>Posts Component</h1>
      <ul>
        {fakeData.map(function(row) {
          return (
            <li key={row.postId}>
              {row.author} schreibt: {row.title}
              <br />
              <pre>{row.text}</pre>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
