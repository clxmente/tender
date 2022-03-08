import Head from "next/head";
import Image from "next/image";
import colors from "tailwindcss/colors";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<link rel="icon" href="../public/favicon.ico"></link>

			<main className="mx-[25%] place-items-center text-center mt-16 px-4 sm:mt-24 justify-center">
				<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 whitespace-nowrap sm:text-5xl md:text-6xl lg:text-5x1 x1:text-5x1 file:2x1:text-6x1 3x1:text-6x1">
					<span className="xl:inline place-items-center text-center justify-center">
						Find New Foods{" "}
						<span className="text-indigo-600">
							On the Fly!
						</span>
					</span>{" "}
				</h1>
				<p className="mt-3 place-content-center text-center justify-center text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl max-w-5x1">
					Having trouble deciding where to eat or what to cook? Our easy to use
					application will help you figure out a place to eat from a single
					swipe, help you find awesome recipes, and help you track your food
					habits and nutrition!{" "}
				</p>

				<div className={styles.grid}>
					<a href="#" className={styles.card}>
						<h2>Browse Recipes &rarr;</h2>
						<p>
							Cooking is a staple. Discover new recipes to expand your culinary
							horizons.
						</p>
					</a>

					<a href="#" className={styles.card2}>
						<h2>Browse Restaurants &rarr;</h2>
						<p>
							In a rush with little time to cook? Find new restaurants around
							you.
						</p>
					</a>
				</div>
			</main>
		</div>
	);
}
