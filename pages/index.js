import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import colors from "tailwindcss/colors";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <link rel="icon" href="../public/favicon.ico"></link>

      <main className="mx-[25%] place-items-center text-center mt-16 px-4 sm:mt-24 justify-center overflow-hidden">
        <h1 className="lg:text-6xl md:text-5xl sm:text-4xl tracking-tight font-extrabold text-gray-900 whitespace-pre-wrap max-w-screen-2xl">
          <span className="place-items-center text-left justify-center md:break-words">
            Find New Foods {""}
            <span className="text-indigo-600">On the Fly!</span>
          </span>
        </h1>
        <p className="block lg:text-lg md:text-lg sm:text-lg md:break-words mt-3 place-content-center text-base whitespace-pre-wrap sm:whitespace-normal text-gray-500 sm:mt-3 md:text-5x1 max-w-screen-xl">
          Having trouble deciding where to eat or what to cook? Our easy to use
          application will help you figure out a place to eat from a single
          swipe, help you find awesome recipes, and help you track your food
          habits and nutrition!{" "}
        </p>

        <div className="tracking-tight">
          <div className={styles.grid}>
            <Link href={"/sq"}>
              <a className={styles.card}>
                <h2>Browse Recipes &rarr;</h2>
                <p>
                  Cooking is a staple. Discover new recipes to expand your
                  culinary horizons.
                </p>
              </a>
            </Link>

            <a href="#" className={styles.card2}>
              <h2>Browse Restaurants &rarr;</h2>
              <p>
                In a rush with little time to cook? Find new restaurants around
                you.
              </p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
