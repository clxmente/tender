import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function Swipe() {
  const [imgSrc, setImgSrc] = useState("/favicon.ico");
  const [foodTitle, setFoodTitle] = useState("Food Title");
  const [ingList, setIngList] = useState([]);
  const [foodList, setFoodList] = useState({});
  const [itemNum, setItemNum] = useState(0);
  const [itemID, setItemID] = useState("");
  const [itemURL, setItemURL] = useState("");

  function handleDislike() {
    // get a new recipe
    setItemNum(itemNum + 1);
    setIngList(foodList[itemNum].recipe.ingredientLines);
    setFoodTitle(foodList[itemNum].recipe.label);
    setImgSrc(foodList[itemNum].recipe.images.LARGE["url"]);
  }

  // split the url and recipe ID
  function break_address(url_add) {
    var data = url_add.split("://")
    data = data[1].split("edamam.owl#recipe_");

    if(data[1]){
        return [data[1]]
    }
  }


  async function handleLike() {
    // get a new recipe & save recipe ID to json file

    // save recipe
    const obj = {
      "recipeID": itemID[0],
      "title": foodTitle,
      "url": itemURL
    };
    const response = await fetch("/api/saverecipe", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const data = await response.json();
    console.log(data);
    // get a new recipe
    setItemNum(itemNum + 1);
    setItemID(break_address(foodList[itemNum].recipe.uri));
    setIngList(foodList[itemNum].recipe.ingredientLines);
    setFoodTitle(foodList[itemNum].recipe.label);
    setImgSrc(foodList[itemNum].recipe.images.LARGE["url"]);
  }

  useEffect(async () => {
    // query API for first batch of results
    const response = await fetch(
      `/api/getrecipes`
    );
    const data = await response.json();
    
    setItemID(break_address(data[itemNum].recipe.uri));
    setItemURL(data[itemNum].recipe.uri);
    setFoodList(data);
    setIngList(data[itemNum].recipe.ingredientLines); // get the ingredient list
    setFoodTitle(data[itemNum].recipe.label); // get the recipe title
    setImgSrc(data[itemNum].recipe.images.LARGE["url"]); // get image url
    
  }, [])

  return ( 
    <div className="flex justify-center">
      <div>
        <div className="w-96 h-96 lg:w-[600px] lg:h-[600px] object-cover rounded-md overflow-hidden drop-shadow-md">
          <Image
            src={imgSrc}
            alt={"Food Image"}
            width={600}
            height={600}
            priority
          />
        </div>
        <h1 className="font-bold text-lg mt-10">{foodTitle}</h1>
        <ul className="text-lg text-[#848484] w-96 lg:w-[600px] list-disc ml-5">
          {ingList.map((line) => {return <li key={line}>{line}</li>})}
        </ul>
        <div className="mt-5 grid grid-cols-2 gap-10">
          <button onClick={handleDislike} className="rounded-md drop-shadow-md bg-red-500 hover:bg-red-600 px-3 py-2 text-white font-semibold">Dislike</button>
          <button onClick={handleLike} className="rounded-md drop-shadow-md bg-green-500 hover:bg-green-600 px-3 py-2 text-white font-semibold">Like</button>
          <Link href={"/viewlikes"} passHref><button className="col-span-2 rounded-md drop-shadow-md bg-sky-500 hover:bg-sky-600 px-3 py-2 text-white font-semibold">View Liked Dishes/Restaurants</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Swipe;
