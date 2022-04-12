import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function Swipe({ recipeList }) {
  const [itemNum, setItemNum] = useState(0);

  function handleDislike() {
    console.log("disliked");
    // get a new recipe
    setItemNum(itemNum + 1);
  }

  // split the url and recipe ID
  function break_address(url_add) {
    var data = url_add.split("://");
    data = data[1].split("edamam.owl#recipe_");

    if (data[1]) {
      return [data[1]];
    }
  }

  async function handleLike() {
    console.log("liked");
    // get a new recipe & save recipe ID to json file

    // save recipe
    const obj = {
      recipeID: break_address(recipeList[itemNum]["recipe"]["uri"])[0],
      title: recipeList[itemNum]["recipe"]["label"],
      url: recipeList[itemNum]["recipe"]["url"],
      calories: recipeList[itemNum]["recipe"]["calories"],
      mealType: recipeList[itemNum]["recipe"]["mealType"][0],
    };
    const response = await fetch("/api/saveRecipe", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    // get a new recipe
    setItemNum(itemNum + 1);
  }

  return (
    <div className="flex justify-center mb-20">
      <div>
        <div className="w-96 h-96 lg:w-[600px] lg:h-[600px] object-cover rounded-md overflow-hidden drop-shadow-md">
          <Image
            src={recipeList[itemNum]["recipe"]["images"]["LARGE"]["url"]}
            alt={"Food Image"}
            width={600}
            height={600}
            priority
          />
        </div>
        <h1 className="font-bold text-lg mt-10">
          {recipeList[itemNum]["recipe"]["label"]}
        </h1>
        <ul className="text-lg text-[#848484] w-96 lg:w-[600px] list-disc ml-5">
          {recipeList[itemNum]["recipe"]["ingredientLines"].map((line) => {
            return <li key={line}>{line}</li>;
          })}
        </ul>
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
  const res = await fetch("http://localhost:3000/api/getRecipes");
  const json = await res.json();

  return { recipeList: json };
};

export default Swipe;
