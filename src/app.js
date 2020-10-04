import React from "react";
import { render } from "react-dom";
import Pet from "./pet";
import SearchParams from "./searchParams";
const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams></SearchParams>
    </div>
  );
};
render(<App></App>, document.getElementById("root"));
