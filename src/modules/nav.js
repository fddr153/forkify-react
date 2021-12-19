import { useContext, useState, useEffect } from "react";
import reactDom from "react-dom";
import { useDebugValue } from "react/cjs/react.production.min";
import { RecipeContext } from "../myContext";
import Bookmarks from "./bookmarks";
const Nav = () => {
  //VARIABLES DE CONTEXTO
  const { value1 } = useContext(RecipeContext);
  const [recipes, setRecipeList] = value1;
  //console.log(setRecipeList);
  //VARIABLES DE ESTADO LOCAL
  const [search, setSearch] = useState("");
  //useEffect(console.log(recipes), recipes);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://forkify-api.herokuapp.com/api/v2/recipes/?search=" + search
      );
      const data = await res.json();
      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      setRecipeList(data.data.recipes);
    } catch (e) {
      throw e;
    }
  };
  return (
    <nav className="nav">
      <img src="/img/logo.png" alt="Logo" class="header__logo"></img>
      <div class="nav_to_right">
        <form class="search" onSubmit={handleClick}>
          <input
            type="text"
            class="search__field"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search over 1,000,000 recipes..."
          ></input>
          <button class="button-1" role="button">
            Search
          </button>
        </form>
        <Bookmarks />
      </div>
    </nav>
  );
};

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Nav;
