import { useContext, useState, useEffect } from "react";
import reactDom from "react-dom";
import { useDebugValue } from "react/cjs/react.production.min";
import { RecipeContext } from "../recipeListContext";

const Nav = () => {
  //VARIABLES DE CONTEXTO
  const { recipes, setRecipeList } = useContext(RecipeContext);
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

      console.log("ESTA ES LA DATA DEL JSON");
      console.log(data);
      console.log("Y ESTE EL VALOR DE RECIPES");
      setRecipeList(data.data.recipes);
    } catch (e) {
      throw e;
    }
  };
  return (
    <nav className="nav">
      <img src="/img/logo.png" alt="Logo" class="header__logo"></img>
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
    </nav>
  );
};

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Nav;
