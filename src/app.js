import React, { useState } from "react";
import { render } from "react-dom";
import { Router} from "@reach/router";
import SearchParams from "./searchParams";
import Details from "./Details";
import ThemeContext from './ThemeContext'
import Navbar from './Navbar'

const App = () => {
  const themeHook = useState('darkblue')
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Navbar></Navbar>
          <Router>
            <SearchParams path="/"></SearchParams>
            <Details path="/details/:id"></Details>
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
render(<App></App>, document.getElementById("root"));
