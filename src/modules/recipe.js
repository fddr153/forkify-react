import { useState } from "react";
import Fraction from "fractional";
import { RecipeContext } from "../myContext";
import { FaEnvira } from "react-icons/fa";
import { useContext } from "react/cjs/react.development";
import { Fragment } from "react";
import { GiBookmarklet } from "react-icons/gi";

const Recipe = () => {
  const [changeBM, reloadBM] = useState();
  const { value2, value3 } = useContext(RecipeContext);
  const [recipeV, setRecipeV] = value2;
  const [bookmarks, setBookmarks] = value3;
  if (!recipeV?.id) return <div className="recipe"></div>;
  const id = recipeV.id;
  const ingredientes = recipeV.ingredients;
  const space = <Fragment>&nbsp;&nbsp;</Fragment>;
  //revisar si esta bookmarked
  const manageBookmarks = function (e) {
    e.preventDefault();
    if (!recipeV.bookmarked && bookmarks.length >= 5) {
      alert("Solo se pueden agregar hasta 5 Bookmarks");
      return;
    }
    if (!recipeV.bookmarked) {
      recipeV.bookmarked = true;
      bookmarks.push(recipeV);
      setBookmarks(bookmarks);
    } else {
      recipeV.bookmarked = false;
      const index = bookmarks.findIndex((el) => el.id === recipeV.id);
      bookmarks.splice(index, 1);
      setBookmarks(bookmarks);
    }
    setRecipeV(recipeV);
    reloadBM(bookmarks.length);
  };
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
          <button
            className={
              "bookmark_recipe_btn_" +
              (recipeV.bookmarked ? "marked" : "normal")
            }
            onClick={manageBookmarks}
          >
            <GiBookmarklet />
            <span>{recipeV.bookmarked ? "Bookmarked" : "Add Bookmark"}</span>
          </button>
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
