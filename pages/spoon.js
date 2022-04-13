import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

function Spoon({ recipeList }) {
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
			recipeID: recipeList["recipes"][itemNum]["id"],
			title: recipeList["recipes"][itemNum]["title"],
			url: recipeList["recipes"][itemNum]["sourceUrl"],
			servings: recipeList["recipes"][itemNum]["servings"],
			mealType: recipeList["recipes"][itemNum]["dishTypes"][0],
			readyIn: recipeList["recipes"][itemNum]["readyInMinutes"],
			image: recipeList["recipes"][itemNum]["image"],
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
		<div className="flex justify-center my-12 mx-12">
			<div>
				<div className="h-80 w-80 m-auto md:w-[600px] md:h-[400px] object-cover overflow-hidden drop-shadow-md">
					<div className="flex justify-center">
						<Image
							src={recipeList["recipes"][0]["image"]}
							alt={"Food Image"}
							width={400}
							height={400}
							className="rounded-md"
							priority
						/>
					</div>
				</div>
				<h1 className="font-bold text-lg mt-10">
					{recipeList["recipes"][0]["title"]}
				</h1>
				<p className="text-[#848484] text-sm md:w-[600px] bg-gray-50">
					{ReactHtmlParser(recipeList["recipes"][0]["summary"])}
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

Spoon.getInitialProps = async (ctx) => {
	const allergies = JSON.parse(window.sessionStorage.getItem("allergies"));
	const diet = JSON.parse(window.sessionStorage.getItem("diet"));
	const mealTypes = JSON.parse(window.sessionStorage.getItem("mealTypes"));
	const cuisine = JSON.parse(window.sessionStorage.getItem("cuisine"));

	var unformatted_tags = "";

	if (allergies.length !== 0) {
		allergies.map((str) => {
			unformatted_tags += str + ",";
		});
	}
	if (diet.length !== 0) {
		diet.map((str) => {
			unformatted_tags += str + ",";
		});
	}
	if (mealTypes.length !== 0) {
		mealTypes.map((str) => {
			unformatted_tags += str + ",";
		});
	}
	if (cuisine.length !== 0) {
		cuisine.map((str) => {
			unformatted_tags += str + ",";
		});

		console.log(allergies);
	}

	var formatted = unformatted_tags.toLowerCase().slice(0, -1);

	const res = await fetch(
		"https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert&apiKey=794b6f8756b14fe79a759e8e579aa8a3"
	);
	const json = await res.json();

	console.log(json);

	return { recipeList: json };
};

export default Spoon;
