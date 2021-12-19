import RecipeList from "./recipeList";
import { RecipeContext } from "../myContext.js";
import { useContext, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const Dashboard = () => {
  const { value1 } = useContext(RecipeContext);
  const [recipes, setRecipeList] = value1;
  if (!recipes) return <div></div>;
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
