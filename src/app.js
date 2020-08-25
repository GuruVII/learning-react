import React from "react";
import { render } from "react-dom";
import Pet from "./pet";
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Besa",
      animal: "Dog",
      breed: "Lake Terrier",
    }),
    React.createElement(Pet, { name: "Metka", animal: "cat", breed: "tabby" }),
    React.createElement(Pet, {
      name: "Lord",
      animal: "Dog",
      breed: "German Shepard",
    }),
    React.createElement(Pet, {
      name: "Potato",
      animal: "Pony",
      breed: "Lipicanec",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
