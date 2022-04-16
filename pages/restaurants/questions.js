import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Checkbox from "../../components/Checkbox";

export default function RestaurantQuestions() {
  const [allergies, setAllergies] = useState([]);
  const [diet, setDiet] = useState([]);

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
            <Link href={"/swipe"}>
              <a
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 md:py-4 md:text-lg md:px-10"
                onClick={() => {
                  window.sessionStorage.setItem(
                    "rest_allergies",
                    JSON.stringify(allergies)
                  );
                  window.sessionStorage.setItem(
                    "rest_diet",
                    JSON.stringify(diet)
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
