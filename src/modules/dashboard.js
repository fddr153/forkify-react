import RecipeList from "./recipeList";
import { RecipeContext } from "../recipeListContext.js";
import { useContext, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const Dashboard = () => {
  const { recipes, setRecipeList } = useContext(RecipeContext);
  return (
    <div className="dashboard invisible-scrollbar">
      <Fade>
        {recipes.map((recipe) => (
          <RecipeList value={recipe} />
        ))}
      </Fade>
    </div>
  );
};
export default Dashboard;
