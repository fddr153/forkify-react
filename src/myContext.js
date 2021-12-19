import { createContext, useState } from "react";
export const RecipeContext = createContext(null);

export const ContextProvider = (props) => {
  const [recipes, setRecipeList] = useState([]);
  const [recipeV, setRecipeV] = useState({});
  const [bookmarks, setBookmarks] = useState([]);

  return (
    <RecipeContext.Provider
      value={{
        value1: [recipes, setRecipeList],
        value2: [recipeV, setRecipeV],
        value3: [bookmarks, setBookmarks],
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
