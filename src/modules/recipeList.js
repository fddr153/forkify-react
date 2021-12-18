const RecipeList = (props) => {
  return (
    <div className="recipeList">
      <a class="preview__link preview__link" href={"#" + props.value.id}>
        <div class="preview_maindiv">
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
