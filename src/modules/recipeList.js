import { useContext, useState } from "react";

const recipeList = () => {
  return (
    <div className="recipeList">
      {recipes.map((recipe) => {
        <li class="preview">
          <a class="preview__link preview__link" href={recipe.id}>
            <figure class="preview__fig">
              <img src={recipe.img} alt={recipe.title} />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">{recipe.title}</h4>
              <p class="preview__publisher">{recipe.publisher}</p>
              <div class="preview__user-generated">
                <svg>
                  <use href="src/img/icons.svg#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>;
      })}
    </div>
  );
};
export default recipeList;
