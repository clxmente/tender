import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import Head from "next/head";
import RestaurantCard from "../../components/RestaurantCard";

function Swipe({ restaurantList }) {
  const [itemNum, setItemNum] = useState(0);

  function handleDislike() {
    console.log("disliked");
    // get a new restaurant
    setItemNum(itemNum + 1);
  }

  function handleLike() {
    console.log("liked");

    // make restaurant object
    const obj = {
      restaurantID: restaurantList[itemNum]["establishmentId"],
      name: restaurantList[itemNum]["name"],
      url: restaurantList[itemNum]["webUrl"],
      streetAddress: restaurantList[itemNum]["address1"],
      secondaryAddress: restaurantList[itemNum]["address2"],
      city: restaurantList[itemNum]["city"],
      state: restaurantList[itemNum]["state"],
      zip: restaurantList[itemNum]["zip"],
      phone: restaurantList[itemNum]["phone"],
      categories: restaurantList[itemNum]["categories"],
      description: restaurantList[itemNum]["overviewText"],
    };

    // save to session storage
    // first retrieve the current list of liked restaurants
    var curr_restaurants = JSON.parse(
      window.localStorage.getItem("restaurants")
    );
    // if there have been no liked this session, make it an empty list
    if (!curr_restaurants) {
      curr_restaurants = [];
    }
    // add the liked object to the session array of likes
    var liked_restaurants = [...curr_restaurants, obj];
    console.log(liked_restaurants);
    // write to the session storage again with the new added restaurant
    window.localStorage.setItem(
      "restaurants",
      JSON.stringify(liked_restaurants)
    );

    // get a new restaurant
    setItemNum(itemNum + 1);
  }

  return (
    <div>
      <Head>
        <title>Tender: View Restaurants</title>
      </Head>
      <div className="flex justify-center my-12 mx-12">
        <div className="max-w-5xl">
          <div>
            <RestaurantCard
              name={restaurantList[itemNum]["name"]}
              description={ReactHtmlParser(
                restaurantList[itemNum]["overviewText"]
              )}
              address1={restaurantList[itemNum]["address1"]}
              address2={restaurantList[itemNum]["address2"]}
              city={restaurantList[itemNum]["city"]}
              state={restaurantList[itemNum]["state"]}
              zip={restaurantList[itemNum]["zip"]}
              phone={restaurantList[itemNum]["phone"]}
              categories={restaurantList[itemNum]["categories"]}
            />
          </div>
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
            <Link href={"/likes"} passHref>
              <button className="col-span-2 rounded-md drop-shadow-md bg-sky-500 hover:bg-sky-600 px-3 py-2 text-white font-semibold">
                View Liked Dishes/Restaurants
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Swipe.getInitialProps = async (ctx) => {
  const restallergies = JSON.parse(
    window.localStorage.getItem("rest_allergies")
  );
  const restdiet = JSON.parse(window.localStorage.getItem("rest_diet"));
  const lat_long = JSON.parse(window.localStorage.getItem("lat_long"));

  // default is fullerton,ca
  let payload = {
    freeText: null,
    placeName: "",
    stateCode: "",
    zipCode: null,
    latitude: lat_long[0],
    longitude: lat_long[1],
    glutenFree: restdiet.includes("Gluten-Free") ? "I" : "N",
    vegetarian: restdiet.includes("Vegetarian") ? "I" : "N",
    vegan: restdiet.includes("Vegan") ? "I" : "N",
    dairyFree: restallergies.includes("Dairy") ? "C" : "N",
    eggFree: restallergies.includes("Egg") ? "C" : "N",
    soyFree: restallergies.includes("Soy") ? "C" : "N",
    peanutFree: restallergies.includes("Peanuts") ? "C" : "N",
    treeNutFree: restallergies.includes("Tree Nuts") ? "C" : "N",
    fishFree: restallergies.includes("Fish") ? "C" : "N",
    shellfishFree: restallergies.includes("Shellfish") ? "C" : "N",
    wheatFree: restallergies.includes("Wheat") ? "C" : "N",
    other: "N",
    picknicPicks: true,
    picknicPicksPossible: true,
    localsOnly: false,
    drMenuAvailable: false,
    publishedIngredients: false,
    partnered: false,
    sponsored: false,
    allergyExcellence: false,
    experienceIs: [],
    restaurantIs: [],
    searchRadius: 5,
  };

  const res = await fetch("https://tender.vercel.app/api/getRestaurants", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await res.json();

  console.log(json);

  return { restaurantList: json };
};

export default Swipe;
