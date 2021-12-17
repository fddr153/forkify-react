import { useContext, useState } from "react";
import { RecipeContext } from "../recipeListContext";

const Nav = () => {
  const { recipes, setRecipeList } = useContext(RecipeContext);
  const [search, setSearch] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes/?search=" + search
    );
    const data = await res.json();
    setRecipeList(data.data.recipes);
    console.log(recipes);
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
