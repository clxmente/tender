import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Swipe() {
	const [imgSrc, setImgSrc] = useState("/starting_dish.jpg");
	const [foodTitle, setFoodTitle] = useState("Food Title");
	const [foodDesc, setFoodDesc] = useState(
		"Lore ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lorem sem. Mauris vehicula a."
	);

	function handleDislike() {
		axios
			.get(
				"https://random.imagecdn.app/v1/image?width=600&height=600&format=text"
			)
			.then((res) => {
				setImgSrc(res.data);
			});
	}

	function handleLike() {
		axios
			.get(
				"https://random.imagecdn.app/v1/image?width=600&height=600&format=text"
			)
			.then((res) => {
				setImgSrc(res.data);
			});
	}

	return (
		<div className="flex justify-center">
			<div>
				<div className="w-96 h-96 lg:w-[527px] lg:h-[424px] object-cover rounded-md overflow-hidden drop-shadow-md">
					<Image
						src={imgSrc}
						alt={"Food Image"}
						width={527}
						height={424}
						priority
					/>
				</div>
				<h1 className="font-bold text-lg mt-10">{foodTitle}</h1>
				<p className="text-lg text-[#848484] w-96 lg:w-[527px]">{foodDesc}</p>
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

export default Swipe;
