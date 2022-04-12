import Liked from "../components/Liked";
import Data from "../data/likedrecipes.json";

export default function viewlikes() {
  const liked_cards = Data.map((recipe) => {
    return (
      <Liked
        key={recipe.recipeID}
        label={recipe.title}
        description={`Calories: ${Math.round(recipe.calories)}`}
        button={"Recipe"}
        url={recipe.url}
      />
    );
  });

  return <div className="mx-6 my-6 grid grid-cols-1 gap-3">{liked_cards}</div>;
}
