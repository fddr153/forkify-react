import "./App.css";
import Nav from "./modules/nav";
import { ContextProvider } from "./myContext.js";

import Dashboard from "./modules/dashboard";
import Recipe from "./modules/recipe";
import { Fade } from "react-awesome-reveal";

//import { useState, useEffect } from "react";
//body container fixed NO-SCROLL
//nav -Logo - Search -Bookmarks: recipeList
//container: - dashboard: recipeList on Fade Scroll (No pagination)
//           - recipeView on fade animation
function App() {
  return (
    <Fade>
      <div className="App">
        <div className="glass">
          <ContextProvider>
            <Nav />
            <div className="container">
              <Dashboard />
              <Recipe />
            </div>
          </ContextProvider>
        </div>
      </div>
    </Fade>
  );
}

export default App;
