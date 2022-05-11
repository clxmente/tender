import { useState } from "react";
import Head from "next/head";
import Liked from "../components/LikedRecipe";
import Link from "next/link";
import LikedRestaurant from "../components/LikedRestaurant";

export default function Likes({
  LikedRecipes,
  LikedRestaurants,
  FeaturedRecipes,
}) {
  const [viewState, setViewState] = useState("recipes");

  function changeToRecipes() {
    setViewState("recipes");
  }
  function changeToRestaurants() {
    setViewState("restaurants");
  }

  // no likes
  if (
    LikedRecipes.length == 0 &&
    LikedRestaurants.length == 0 &&
    FeaturedRecipes.length == 0
  ) {
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
                I&apos;m starving...
              </p>
            </a>
          </Link>
        </div>
      </div>
    );
  } else {
    // generate likes if there is at least one like
    const liked_recipes = LikedRecipes.map((recipe) => {
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

    const liked_restaurants = LikedRestaurants.map((restaurant) => {
      return (
        <LikedRestaurant
          key={restaurant.restaurantID}
          url={restaurant.url}
          name={restaurant.name}
          description={restaurant.description}
          address1={restaurant.streetAddress}
          address2={restaurant.secondaryAddress}
          city={restaurant.city}
          state={restaurant.state}
          zip={restaurant.zip}
          phone={restaurant.phone}
          categories={restaurant.categories}
        />
      );
    });

    const featured_recipes = FeaturedRecipes.map((featured) => {
      return (
        <Liked
          key={featured.recipeID}
          label={featured.title}
          score={featured.spoonScore}
          readyIn={featured.readyIn}
          button={"Featured Recipe"}
          url={featured.url}
          image={featured.image}
          servings={featured.servings}
          aggregateLikes={featured.aggregateLikes}
          summary={featured.summary}
        />
      );
    });

    // display cards
    if (viewState == "recipes") {
      return (
        <div className="my-12">
          <Head>
            <title>Tender: Recipe Likes</title>
          </Head>
          <div className="ml-6">
            <button
              onClick={() => {
                changeToRecipes();
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 drop-shadow-md"
            >
              Recipes
            </button>
            <button
              onClick={() => {
                changeToRestaurants();
              }}
              className="inline-flex items-center ml-2 px-4 py-2 border border-gray-300 text-base font-semibold rounded-md text-indigo-600 bg-white hover:bg-gray-50 drop-shadow-md"
            >
              Restaurants
            </button>
          </div>
          <div className="mx-6 my-6 grid grid-cols-1 gap-3">
            {liked_recipes}
            {featured_recipes}
          </div>
        </div>
      );
    } else {
      return (
        <div className="my-12">
          <Head>
            <title>Tender: Restaurant Likes</title>
          </Head>
          <div className="ml-6">
            <button
              onClick={() => {
                changeToRecipes();
              }}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-semibold rounded-md text-indigo-600 bg-white hover:bg-gray-50 drop-shadow-md"
            >
              Recipes
            </button>
            <button
              onClick={() => {
                changeToRestaurants();
              }}
              className="inline-flex items-center ml-2 px-4 py-2 border border-transparent text-base font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 drop-shadow-md"
            >
              Restaurants
            </button>
          </div>
          <div className="mx-6 my-6 grid grid-cols-1 gap-3">
            {liked_restaurants}
          </div>
        </div>
      );
    }
  }
}

Likes.getInitialProps = async (ctx) => {
  var recipes = JSON.parse(window.localStorage.getItem("recipes"));
  var restaurants = JSON.parse(window.localStorage.getItem("restaurants"));
  var featuredRecipes = JSON.parse(
    window.localStorage.getItem("featuredRecipes")
  );

  if (!recipes) {
    recipes = [];
  }

  if (!restaurants) {
    restaurants = [];
  }

  if (!featuredRecipes) {
    featuredRecipes = [];
  }

  return {
    LikedRecipes: recipes,
    LikedRestaurants: restaurants,
    FeaturedRecipes: featuredRecipes,
  };
};
