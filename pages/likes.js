import Head from "next/head";
import Liked from "../components/Liked";
import Link from "next/link";

export default function Likes({ LikedRecipes }) {
  if (LikedRecipes.length == 0) {
    return (
      <div>
        <div className="pt-[100px]">
          <p className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl m-auto text-gray-900 text-left w-[70%]">
            Looks like there are no likes here.
          </p>
          <p className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl m-auto text-gray-900 text-left w-[70%]">
            Head back home to browse some food!
          </p>
        </div>
        <div className="flex justify-center">
          <Link href={"/"} passHref>
            <a className="w-[70%] mx-5">
              <p className="mt-5 p-3 pb-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 drop-shadow-md text-center text-2xl">
                I'm starving...
              </p>
            </a>
          </Link>
        </div>
      </div>
    );
  }

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
