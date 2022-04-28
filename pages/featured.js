import Head from "next/head";
// import Liked from "../components/Liked";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";

// calls
// https://api.spoonacular.com/recipes/complexSearch?sort="popularity"&number=25&addRecipeInformation=true&apiKey=2704730fe7d2455e92b80b33c17aa675
// https://api.spoonacular.com/recipes/complexSearch?sort="healthiness"&number=25&addRecipeInformation=true&apiKey=2704730fe7d2455e92b80b33c17aa675

export default function Featured({ featuredList, healthyList }) {
	const [popItemNum, setPopItemNum] = useState(0);
	const [healthItemNum, setHealthItemNum] = useState(0);
	const [viewState, setViewState] = useState("popularity");

	function changeToPopularity() {
		setViewState("popularity");
	}

	function changeToHealthiness() {
		setViewState("healthiness");
	}

	function handlePopDislike() {
		console.log("disliked");
		setPopItemNum(popItemNum + 1);
	}

	function handleHealthDislike() {
		console.log("disliked");
		setHealthItemNum(healthItemNum + 1);
	}

	function handlePopLike() {
		const obj = {
			recipeID: featuredList["featuredRecipes"][popItemNum]["id"],
			title: featuredList["featuredRecipes"][popItemNum]["title"],
			url: featuredList["featuredRecipes"][popItemNum]["sourceUrl"],
			servings: featuredList["featuredRecipes"][popItemNum]["servings"],
			mealType: featuredList["featuredRecipes"][popItemNum]["dishTypes"][0],
			readyIn: featuredList["featuredRecipes"][popItemNum]["readyInMinutes"],
			image: featuredList["featuredRecipes"][popItemNum]["image"],
			spoonScore:
				featuredList["featuredRecipes"][popItemNum]["spoonacularScore"],
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
		setPopItemNum(popItemNum + 1);

		console.log(obj);
	}

	// className="w-[600px] md:mx-auto lg:mx-auto mt-4 ml-10"
	if (viewState == "popularity") {
		return (
			<div>
				<Head>
					<title>Tender: Popular Recipes</title>
				</Head>
				<div className="flex justify-center mt-5 mb-8 mx-auto">
					<button
						onClick={() => {
							changeToPopularity();
						}}
						className="inline-block w-[125px] py-2 border border-transparent text-base font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 drop-shadow-md"
					>
						Popularity
					</button>
					<button
						onClick={() => {
							changeToHealthiness();
						}}
						className="inline-block w-[125px] ml-2 py-2 border border-gray-300 text-base font-semibold rounded-md text-indigo-600 bg-white hover:bg-gray-50 drop-shadow-md"
					>
						Healthiness
					</button>
				</div>

				<div className="flex justify-center mt-0 mb-12 mx-12">
					<div>
						<div className="h-80 w-80 mx-auto md:w-[600px] md:h-[400px] object-cover overflow-hidden drop-shadow-md">
							<div className="flex justify-center">
								<Image
									src={featuredList["featuredRecipes"][popItemNum]["image"]}
									alt={"Food Image"}
									width={400}
									height={400}
									className="rounded-md"
									priority
								/>
							</div>
						</div>

						<h1 className="font-bold text-lg mt-10">
							{featuredList["featuredRecipes"][popItemNum]["title"]}
						</h1>
						<h1 className="mb-1">
							{"Popularity Score: "}
							{featuredList["featuredRecipes"][popItemNum]["spoonacularScore"]}%
						</h1>
						<p className="text-[#848484] text-sm md:w-[600px] bg-gray-50">
							{ReactHtmlParser(
								featuredList["featuredRecipes"][popItemNum]["summary"]
							)}
						</p>
						<div className="mt-5 grid grid-cols-2 gap-10">
							<button
								onClick={handlePopDislike}
								className="rounded-md drop-shadow-md bg-red-500 hover:bg-red-600 px-3 py-2 text-white font-semibold"
							>
								Dislike
							</button>
							<button
								onClick={handlePopLike}
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
	} else {
		return (
			<div>
				<Head>
					<title>Tender: Healthy Recipes</title>
				</Head>
				<div className="flex justify-center mt-5 mb-8 mx-auto">
					<button
						onClick={() => {
							changeToPopularity();
						}}
						className="inline-block w-[125px] py-2 border border-transparent text-base font-semibold rounded-md bg-white text-indigo-600 hover:bg-gray-50 drop-shadow-md"
					>
						Popularity
					</button>
					<button
						onClick={() => {
							changeToHealthiness();
						}}
						className="inline-block w-[125px] ml-2 py-2 border border-gray-300 text-base font-semibold rounded-md bg-indigo-600 text-white hover:bg-indigo-700 drop-shadow-md"
					>
						Healthiness
					</button>
				</div>

				<div className="flex justify-center mt-0 mb-12 mx-12">
					<div>
						<div className="h-80 w-80 mx-auto md:w-[600px] md:h-[400px] object-cover overflow-hidden drop-shadow-md">
							<div className="flex justify-center">
								<Image
									src={featuredList["featuredRecipes"][popItemNum]["image"]}
									alt={"Food Image"}
									width={400}
									height={400}
									className="rounded-md"
									priority
								/>
							</div>
						</div>

						<h1 className="font-bold text-lg mt-10">
							{featuredList["featuredRecipes"][popItemNum]["title"]}
						</h1>
						<h1 className="mb-1">
							{"Popularity Score: "}
							{featuredList["featuredRecipes"][popItemNum]["spoonacularScore"]}%
						</h1>
						<p className="text-[#848484] text-sm md:w-[600px] bg-gray-50">
							{ReactHtmlParser(
								featuredList["featuredRecipes"][popItemNum]["summary"]
							)}
						</p>
						<div className="mt-5 grid grid-cols-2 gap-10">
							<button
								onClick={handlePopDislike}
								className="rounded-md drop-shadow-md bg-red-500 hover:bg-red-600 px-3 py-2 text-white font-semibold"
							>
								Dislike
							</button>
							<button
								onClick={handlePopLike}
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

	const res2 = await fetch("http://localhost:3000/api/getHealthy", {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const json2 = await res2.json();

	// console.log(json);

	return { featuredList: json, healthyList: json2 };
};
