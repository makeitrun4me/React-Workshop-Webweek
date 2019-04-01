import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { postsApi } from "../constants";
import { Card } from "@material-ui/core";
export function Posts() {
  const [status, setStatus] = useState("none"); // none or loading or error or done
  const [data, setData] = useState(null);

  useEffect(
    function() {
      setStatus("loading");
      fetch(postsApi)
        .then(function(result) {
          return result.json();
        })
        .then(function(jsonData) {
          setData(jsonData);
          setStatus("done");
        })
        .catch(function(error) {
          console.log(error);
          setStatus("error");
        });
    },
    [setStatus, setData]
  );

  if (status === "none") {
    return "";
  }

  if (status === "loading") {
    return "Loading";
  }

  if (status === "error") {
    return "Error";
  }

  return (
    <>
      {data.documents.map(function(document) {
        return (
          <Card key={document.name}>
            <h2>{document.fields.title.stringValue}</h2>
            <h5>Autor: {document.fields.author.stringValue}</h5>
            <pre>{document.fields.text.stringValue}</pre>
          </Card>
        );
      })}
    </>
  );
}
