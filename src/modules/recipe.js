import { useState } from "react";
import Fraction from "fractional";
import { RecipeElContext } from "../recipeContext.js";
import { FaEnvira } from "react-icons/fa";
import { useContext } from "react/cjs/react.development";
import { Fragment } from "react";

const Recipe = () => {
  const { recipeV, setRecipeV } = useContext(RecipeElContext);
  const id = recipeV.id;
  const ingredientes = recipeV.ingredients;
  const space = <Fragment>&nbsp;&nbsp;</Fragment>;

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
      <div class="recipe__ingredients">
        <h2 class="recipe__title_2 highlight_2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          {recipeV.ingredients.map((ing) => {
            return (
              <li class="recipe__ingredient">
                <FaEnvira />
                <div class="recipe__quantity">
                  {space}
                  {ing.quantity
                    ? new Fraction.Fraction(ing.quantity).toString()
                    : ""}
                  {space}
                </div>
                <div class="recipe__description">
                  <span class="recipe__unit"> {ing.unit} </span>
                  {ing.description}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Recipe;
