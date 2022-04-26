import Head from "next/head";
import Liked from "../components/Liked";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";

// call used for featured_restaurants.json
// https://api.spoonacular.com/recipes/complexSearch?sort="popularity"&number=25&addRecipeInformation=true&apiKey=2704730fe7d2455e92b80b33c17aa675

export default function Featured({ featuredList }) {
	const [itemNum, setItemNum] = useState(0);

	function handleDislike() {
		console.log("disliked");
		// get a new recipe
		setItemNum(itemNum + 1);
	}

	function handleLike() {
		const obj = {
			recipeID: featuredList["featuredRecipes"][itemNum]["id"],
			title: featuredList["featuredRecipes"][itemNum]["title"],
			url: featuredList["featuredRecipes"][itemNum]["sourceUrl"],
			servings: featuredList["featuredRecipes"][itemNum]["servings"],
			mealType: featuredList["featuredRecipes"][itemNum]["dishTypes"][0],
			readyIn: featuredList["featuredRecipes"][itemNum]["readyInMinutes"],
			image: featuredList["featuredRecipes"][itemNum]["image"],
			spoonScore: featuredList["featuredRecipes"][itemNum]["spoonacularScore"],
			// summary: featuredList["featuredRecipes"][itemNum]["summary"],
		};

		// save to session storage
		// first retrieve the current list of liked recipes
		var curr_recipes = JSON.parse(
			window.sessionStorage.getItem("featuredRecipes")
		);
		// if there have been no liked this session, make it an empty list
		if (!curr_recipes) {
			curr_recipes = [];
		}
		// add the liked object to the session array of likes
		var featured_recipes = [...curr_recipes, obj];
		console.log(featured_recipes);
		// write to the session storage again with the new added recipe
		window.sessionStorage.setItem(
			"featuredRecipes",
			JSON.stringify(featured_recipes)
		);

		// get a new recipe
		setItemNum(itemNum + 1);

		console.log(obj);
	}

	return (
		<div>
			<Head>
				<title>Tender: Featured Recipes</title>
			</Head>
			<div className="flex justify-center my-12 mx-12">
				<div>
					<div className="h-80 w-80 m-auto md:w-[600px] md:h-[400px] object-cover overflow-hidden drop-shadow-md">
						<div className="flex justify-center">
							<Image
								src={featuredList["featuredRecipes"][itemNum]["image"]}
								alt={"Food Image"}
								width={400}
								height={400}
								className="rounded-md"
								priority
							/>
						</div>
					</div>
					<h1 className="font-bold text-lg mt-10">
						{featuredList["featuredRecipes"][itemNum]["title"]}
						{" - Spoonacular Score: "}
						{featuredList["featuredRecipes"][itemNum]["spoonacularScore"]}
					</h1>
					<p className="text-[#848484] text-sm md:w-[600px] bg-gray-50">
						{ReactHtmlParser(
							featuredList["featuredRecipes"][itemNum]["summary"]
						)}
					</p>

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

Featured.getInitialProps = async (ctx) => {
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

	// console.log(payload);

	const res = await fetch("http://localhost:3000/api/getFeatured", {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const json = await res.json();

	// console.log(json);

	return { featuredList: json };
};
