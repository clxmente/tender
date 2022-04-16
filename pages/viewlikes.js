import Liked from "../components/Liked";

export default function ViewLikes({ LikedRecipes }) {
  const liked_cards = LikedRecipes.map((recipe) => {
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

ViewLikes.getInitialProps = async (ctx) => {
  var recipes = JSON.parse(window.sessionStorage.getItem("recipes"));

  if (!recipes) {
    recipes = [];
  }

  return { LikedRecipes: recipes };
};
