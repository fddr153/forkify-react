import "./App.css";
import Nav from "./modules/nav";
import { useState } from "react";
import { RecipeContext } from "./recipeListContext.js";

//import { useState, useEffect } from "react";
//body container fixed NO-SCROLL
//nav -Logo - Search -Bookmarks: recipeList
//container: - dashboard: recipeList on Fade Scroll (No pagination)
//           - recipeView on fade animation
function App() {
  const [recipes, setRecipeList] = useState([]);

  return (
    <div className="App">
      <body className="glass">
        <RecipeContext.Provider value={{ recipes, setRecipeList }}>
          <Nav />
        </RecipeContext.Provider>

        <div className="container"></div>
      </body>
    </div>
  );
}

export default App;
