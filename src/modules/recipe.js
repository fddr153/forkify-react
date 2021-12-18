import { useState } from "react";
import Fraction from "fractional";
import { RecipeElContext } from "../recipeContext.js";

import { useContext } from "react/cjs/react.development";

const Recipe = () => {
  const { recipeV, setRecipeV } = useContext(RecipeElContext);
  const id = recipeV.id;
  const ingredientes = recipeV.ingredients;
  if (!id) return <div className="recipe"></div>;

  return (
    <div className="recipe invisible-scrollbar">
      <div className="recipe_top_container">
        <div class="recipe__details">
          <h1 class="recipe__title highlight">
            <span>{recipeV.title}</span>
          </h1>
          <div class="recipe__info">
            <span class="recipe__info-text">
              Preparation: {recipeV.cooking_time} minutes
            </span>
            <span class="recipe__info-text">
              Ingredients for: {recipeV.servings} servings
            </span>
          </div>
        </div>
        <figure class="recipe__fig">
          <img
            src={recipeV.image_url}
            alt={recipeV.title}
            class="recipe__img"
          />
        </figure>
      </div>
    </div>
  );
};
export default Recipe;
