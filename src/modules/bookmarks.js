import { RecipeContext } from "../myContext.js";
import { useContext, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { GiBookmarklet } from "react-icons/gi";
import RecipeList from "./recipeList";

const Bookmarks = () => {
  const { value3 } = useContext(RecipeContext);
  const [bookmarks, setBookmarks] = value3;
  const [seeBookmarks, setSeeBookmarks] = useState(false);
  const renderBookmarks = function () {
    setSeeBookmarks(!seeBookmarks);
  };
  console.log(seeBookmarks);
  return (
    <li class="nav__item">
      <button
        class="nav__btn nav__btn--bookmarks"
        onMouseOver={renderBookmarks}
      >
        <GiBookmarklet />
        <span>Bookmarks</span>
      </button>
      <div class="bookmarks">
        {
          <ul class="bookmarks__list">
            <Fade>
              {bookmarks.map((bm) => (
                <RecipeList value={bm} />
              ))}
            </Fade>
          </ul>
        }
      </div>
    </li>
  );
};
export default Bookmarks;
