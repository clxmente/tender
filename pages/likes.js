import Head from "next/head";
import Liked from "../components/Liked";

export default function Likes({ LikedRecipes }) {
  const liked_cards = LikedRecipes.map((recipe) => {
    return (
      <Liked
        key={recipe.recipeID}
        label={recipe.title}
        score={recipe.healthScore}
        readyIn={recipe.readyIn}
        button={"Recipe"}
        url={recipe.url}
        image={recipe.image}
        servings={recipe.servings}
        aggregateLikes={recipe.aggregateLikes}
        summary={recipe.summary}
      />
    );
  });

  return (
    <div>
      <Head>
        <title>Tender: Likes</title>
      </Head>
      <div className="mx-6 my-6 grid grid-cols-1 gap-3">{liked_cards}</div>
    </div>
  );
}

Likes.getInitialProps = async (ctx) => {
  var recipes = JSON.parse(window.sessionStorage.getItem("recipes"));

  if (!recipes) {
    recipes = [];
  }

  return { LikedRecipes: recipes };
};
