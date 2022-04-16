import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

function Swipe({ recipeList }) {
  const [itemNum, setItemNum] = useState(0);

  function handleDislike() {
    console.log("disliked");
    // get a new recipe
    setItemNum(itemNum + 1);
  }

  function handleLike() {
    console.log("liked");
    // get a new recipe & save recipe ID to json file

    // make recipe object
    const obj = {
      recipeID: recipeList["recipes"][itemNum]["id"],
      title: recipeList["recipes"][itemNum]["title"],
      url: recipeList["recipes"][itemNum]["sourceUrl"],
      servings: recipeList["recipes"][itemNum]["servings"],
      mealType: recipeList["recipes"][itemNum]["dishTypes"][0],
      readyIn: recipeList["recipes"][itemNum]["readyInMinutes"],
      image: recipeList["recipes"][itemNum]["image"],
    };

    // save to session storage
    // first retrieve the current list of liked recipes
    var curr_recipes = JSON.parse(window.sessionStorage.getItem("recipes"));
    // if there have been no liked this session, make it an empty list
    if (!curr_recipes) {
      curr_recipes = [];
    }
    // add the liked object to the session array of likes
    var liked_recipes = [...curr_recipes, obj];
    console.log(liked_recipes);
    // write to the session storage again with the new added recipe
    window.sessionStorage.setItem("recipes", JSON.stringify(liked_recipes));

    // get a new recipe
    setItemNum(itemNum + 1);
  }

  return (
    <div className="flex justify-center my-12 mx-12">
      <div>
        <div className="h-80 w-80 m-auto md:w-[600px] md:h-[400px] object-cover overflow-hidden drop-shadow-md">
          <div className="flex justify-center">
            <Image
              src={recipeList["recipes"][itemNum]["image"]}
              alt={"Food Image"}
              width={400}
              height={400}
              className="rounded-md"
              priority
            />
          </div>
        </div>
        <h1 className="font-bold text-lg mt-10">
          {recipeList["recipes"][itemNum]["title"]}
        </h1>
        <p className="text-[#848484] text-sm md:w-[600px] bg-gray-50">
          {ReactHtmlParser(recipeList["recipes"][itemNum]["summary"])}
        </p>
        {/* <ul className="text-lg text-[#848484] w-96 lg:w-[400px] list-disc ml-5">
					{recipeList["recipes"][0]["extendedIngredients"].map(
						(ingObj, index) => {
							return <li key={index}>{ingObj["original"]}</li>;
						}
					)}
				</ul> */}
        <div className="mt-5 grid grid-cols-2 gap-10">
          <button
            onClick={handleDislike}
            className="rounded-md drop-shadow-md bg-red-500 hover:bg-red-600 px-3 py-2 text-white font-semibold"
          >
            Dislike
          </button>
          <button
            onClick={handleLike}
            className="rounded-md drop-shadow-md bg-green-500 hover:bg-green-600 px-3 py-2 text-white font-semibold"
          >
            Like
          </button>
          <Link href={"/viewlikes"} passHref>
            <button className="col-span-2 rounded-md drop-shadow-md bg-sky-500 hover:bg-sky-600 px-3 py-2 text-white font-semibold">
              View Liked Dishes/Restaurants
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

Swipe.getInitialProps = async (ctx) => {
  const allergies = JSON.parse(window.sessionStorage.getItem("allergies"));
  const diet = JSON.parse(window.sessionStorage.getItem("diet"));
  const mealTypes = JSON.parse(window.sessionStorage.getItem("mealTypes"));
  const cuisine = JSON.parse(window.sessionStorage.getItem("cuisine"));

  var unformatted_tags = "";

  if (allergies) {
    allergies.map((str) => {
      unformatted_tags += str + ",";
    });
  }
  if (diet) {
    diet.map((str) => {
      unformatted_tags += str + ",";
    });
  }
  if (mealTypes) {
    mealTypes.map((str) => {
      unformatted_tags += str + ",";
    });
  }
  if (cuisine) {
    cuisine.map((str) => {
      unformatted_tags += str + ",";
    });
  }

  var formatted = unformatted_tags.toLowerCase().slice(0, -1);
  if (!formatted) {
    formatted = "none";
  }

  let payload = {
    tags: formatted,
  };

  console.log(payload);

  const res = await fetch("http://localhost:3000/api/getRecipes", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await res.json();

  console.log(json);

  return { recipeList: json };
};

export default Swipe;
