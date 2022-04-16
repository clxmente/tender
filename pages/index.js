import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="my-12 mx-12">
      <Head>
        <title>Tender</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main className="md:mx-[25%] place-items-center text-center mt-16 sm:mt-24 justify-center overflow-hidden">
        <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900 whitespace-pre-wrap">
          <span className="place-items-center text-left justify-center md:break-words">
            Find New Foods {""}
            <span className="text-indigo-600">On the Fly!</span>
          </span>
        </h1>
        <p className="block lg:text-lg md:text-lg md:break-words mt-3 place-content-center text-base whitespace-pre-wrap sm:whitespace-normal text-gray-500 sm:mt-3 md:text-5x1 max-w-screen-xl">
          Having trouble deciding where to eat or what to cook? Our easy to use
          application will help you figure out a place to eat from a single
          swipe, help you find awesome recipes, and help you track your food
          habits and nutrition!{" "}
        </p>

        <div className="tracking-tight justify-center flex">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-7 max-w-xl">
            <Link href={"/recipes/questions"} passHref>
              <a className="bg-indigo-600 text-white text-left p-4 rounded-lg hover:bg-indigo-700 drop-shadow-md">
                <h2 className="text-2xl font-semibold">
                  Browse Recipes &rarr;
                </h2>
                <p className="text-base max-w-xs">
                  Cooking is a staple. Discover new recipes to expand your
                  culinary horizons.
                </p>
              </a>
            </Link>

            <Link href={"/restaurants/questions"} passHref>
              <a className="bg-white text-indigo-600 text-left p-4 rounded-lg hover:bg-gray-100 drop-shadow-md">
                <h2 className="text-2xl font-semibold">
                  Browse Restaurants &rarr;
                </h2>
                <p className="text-base max-w-xs">
                  In a rush with little time to cook? Find new restaurants
                  around you.
                </p>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
