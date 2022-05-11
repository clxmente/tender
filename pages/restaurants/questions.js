import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Checkbox from "../../components/Checkbox";

export default function RestaurantQuestions() {
  const [allergies, setAllergies] = useState([]);
  const [diet, setDiet] = useState([]);
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState();
  const [invalid, setInvalid] = useState(false);
  const [latlong, setLatlong] = useState([]);
  const [ready, setReady] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/getCity?zipCode=${zipCode}`);
    const status = response.status;
    if (status !== 200) {
      setInvalid(true);
      setReady(false);
      return;
    }
    const response_city = await response.json();
    console.log(response_city);

    // check if a city was found
    if (response_city["cod"] === "404") {
      setInvalid(true);
      setReady(false);
      return;
    }

    setCity(`${response_city["name"]}, ${response_city["country"]}`);
    setLatlong([response_city["lat"], response_city["lon"]]);
    if (response.status === 200) {
      setReady(true);
    }
  };

  return (
    <div className="relative pb-16 sm:pb-24">
      <Head>
        <title>Tender: Restaurant Questions</title>
      </Head>
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">
            <span className="block text-indigo-600 xl:inline">Select</span> Your
            Preferences Below
          </span>{" "}
        </h1>
        <p className="mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-4xl">
          These choices will affect the restaurants shown to you. You can
          customize your preferences by selecting from the checkboxes below,
          then clicking the button at the bottom of the screen. If you
          don&apos;t have any preferences, you don&apos;t have to select
          anything!
        </p>
        <div className="mt-5">
          <form onSubmit={() => handleSubmit}>
            <label htmlFor="zip" className="text-2xl font-bold">
              Enter Your Zip Code
            </label>
            <div className="block space-x-3 mt-3">
              <input
                type="text"
                className={invalid ? "inv-zipBox" : "v-zipBox"}
                placeholder="Zip Code (92801)"
                maxLength={5}
                autoComplete="off"
                id="zip"
                name="zip"
                onInput={(e) => {
                  setZipCode(e.target.value);
                  setInvalid(false);
                }}
              />
              <button
                type="submit"
                className="bg-indigo-600 px-3 py-2 text-white font-semibold rounded-lg hover:bg-indigo-700"
                onClick={(e) => handleSubmit(e)}
              >
                Find City
              </button>
            </div>
          </form>
          <p className={city ? `text-lg md:text-xl text-gray-500` : "hidden"}>
            City: {city}
          </p>
        </div>
        {/* Insert Grid of Questions Under this */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
          <div className="block">
            <h1 className="text-2xl font-bold mt-6">Intolerances</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-3">
              <Checkbox
                label="Gluten/Celiac"
                list={allergies}
                setList={setAllergies}
              />
              <Checkbox label="Dairy" list={allergies} setList={setAllergies} />
              <Checkbox label="Egg" list={allergies} setList={setAllergies} />
              <Checkbox label="Soy" list={allergies} setList={setAllergies} />
              <Checkbox
                label="Peanuts"
                list={allergies}
                setList={setAllergies}
              />
              <Checkbox
                label="Tree Nuts"
                list={allergies}
                setList={setAllergies}
              />
              <Checkbox label="Fish" list={allergies} setList={setAllergies} />
              <Checkbox
                label="Shellfish"
                list={allergies}
                setList={setAllergies}
              />
              <Checkbox label="Wheat" list={allergies} setList={setAllergies} />
            </div>
          </div>
          <div className="block">
            <h1 className="text-2xl font-bold mt-6">Dietary Choices</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
              <Checkbox label="Vegetarian" list={diet} setList={setDiet} />
              <Checkbox label="Vegan" list={diet} setList={setDiet} />
              <Checkbox label="Gluten-Free" list={diet} setList={setDiet} />
            </div>
          </div>
        </div>
        {/* END of checkboxes */}
        <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
          <div className="rounded-md shadow">
            <Link
              href={ready ? "/restaurants/swipe" : "/restaurants/questions"}
            >
              <a
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 md:py-4 md:text-lg md:px-10"
                onClick={() => {
                  window.localStorage.setItem(
                    "rest_allergies",
                    JSON.stringify(allergies)
                  );
                  window.localStorage.setItem(
                    "rest_diet",
                    JSON.stringify(diet)
                  );
                  window.localStorage.setItem(
                    "lat_long",
                    JSON.stringify(latlong)
                  );
                }}
              >
                Show me restaurants!
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
