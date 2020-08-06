const pet = ({ name, animal, breed }) => {
  console.log("breed", breed);
  console.log("animal", animal);
  console.log("name", name);
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(pet, {
      name: "Besa",
      animal: "Dog",
      breed: "Lake Terrier",
    }),
    React.createElement(pet, { name: "Metka", animal: "cat", breed: "tabby" }),
    React.createElement(pet, {
      name: "Lord",
      animal: "Dog",
      breed: "German Shepard",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
