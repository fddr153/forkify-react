import { RecipeElContext } from "../recipeContext.js";
import { useContext } from "react";

const RecipeList = (props) => {
  const { recipeV, setRecipeV } = useContext(RecipeElContext);

  const handleCLick = async function (e) {
    e.preventDefault();
    const id = props.value.id;
    if (!id) return;
    const res = await fetch(
      "https://forkify-api.herokuapp.com/api/v2/recipes/" + id
    );
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    let recipe = data.data.recipe;
    setRecipeV(recipe);
  };
  return (
    <div className="recipeList">
      <a
        class="preview__link preview__link"
        href={"#" + props.value.id}
        onClick={handleCLick}
      >
        <div className={"preview_maindiv preview_maindiv_normal"}>
          <figure class="preview__fig">
            <img
              src={props.value.image_url}
              alt={props.value.title}
              height="100%"
            />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">{props.value.title}</h4>
            <p class="preview__publisher">{props.value.publisher}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
export default RecipeList;
