import "./App.css";
import Nav from "./modules/nav";
import { useState } from "react";
import { RecipeContext } from "./recipeListContext.js";
import { RecipeElContext } from "./recipeContext.js";

import Dashboard from "./modules/dashboard";
import Recipe from "./modules/recipe";
import { Fade } from "react-awesome-reveal";

//import { useState, useEffect } from "react";
//body container fixed NO-SCROLL
//nav -Logo - Search -Bookmarks: recipeList
//container: - dashboard: recipeList on Fade Scroll (No pagination)
//           - recipeView on fade animation
function App() {
  const [recipes, setRecipeList] = useState([]);
  const [recipeV, setRecipeV] = useState({});

  return (
    <Fade>
      <div className="App">
        <div className="glass">
          <RecipeContext.Provider value={{ recipes, setRecipeList }}>
            <Nav />
            <div className="container">
              <RecipeElContext.Provider value={{ recipeV, setRecipeV }}>
                <Dashboard />
                <Recipe />
              </RecipeElContext.Provider>
            </div>
          </RecipeContext.Provider>
        </div>
      </div>
    </Fade>
  );
}

export default App;
