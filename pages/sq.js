import Link from "next/link";
import { useState } from "react";
import Checkbox from "../components/Checkbox";

export default function Sq() {
  const [allergies, setAllergies] = useState([]);
  const [diet, setDiet] = useState([]);
  const [cuisine, setCuisine] = useState([]);
  const [mealTypes, setMealTypes] = useState([]);

  return (
    <div className="relative pb-16 sm:pb-24">
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">
            <span className="block text-indigo-600 xl:inline">Select</span> Your
            Preferences Below
          </span>{" "}
        </h1>
        <p className="mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          These choices will affect the dishes shown to you. You can customize
          your preferences by selecting from the checkboxes below, then clicking
          the button at the bottom of the screen. If you don't have any
          preferences, you don't have to select anything!
        </p>
        {/* Insert Grid of Questions Under this */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
          <div className="block">
            <h1 className="text-2xl font-bold mt-6">Intolerances</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-3">
              <Checkbox label="Dairy" list={allergies} setList={setAllergies} />
              <Checkbox label="Egg" list={allergies} setList={setAllergies} />
              <Checkbox
                label="Gluten"
                list={allergies}
                setList={setAllergies}
              />
              <Checkbox label="Grain" list={allergies} setList={setAllergies} />
              <Checkbox
                label="Peanut"
                list={allergies}
                setList={setAllergies}
              />
              <Checkbox
                label="Seafood"
                list={allergies}
                setList={setAllergies}
              />
              <Checkbox
                label="Sesame"
                list={allergies}
                setList={setAllergies}
              />
              <Checkbox
                label="Shellfish"
                list={allergies}
                setList={setAllergies}
              />
              <Checkbox label="Soy" list={allergies} setList={setAllergies} />
              <Checkbox label="Wheat" list={allergies} setList={setAllergies} />
            </div>
          </div>
          <div className="block">
            <h1 className="text-2xl font-bold mt-6">Dietary Choices</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
              <Checkbox label="Gluten Free" list={diet} setList={setDiet} />
              <Checkbox label="Ketogenic" list={diet} setList={setDiet} />
              <Checkbox label="Vegetarian" list={diet} setList={setDiet} />
              <Checkbox label="Vegan" list={diet} setList={setDiet} />
              <Checkbox label="Ovo-Vegetarian" list={diet} setList={setDiet} />
              <Checkbox
                label="Lacto-Vegetarian"
                list={diet}
                setList={setDiet}
              />
              <Checkbox label="Pescatarian" list={diet} setList={setDiet} />
              <Checkbox label="Paleo" list={diet} setList={setDiet} />
            </div>
          </div>
        </div>
        {/* Cuisines and Type of Meal */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
          <div className="block">
            <h1 className="text-2xl font-bold mt-6">Cuisines</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-3">
              <Checkbox label="African" list={cuisine} setList={setCuisine} />
              <Checkbox label="American" list={cuisine} setList={setCuisine} />
              <Checkbox label="Chinese" list={cuisine} setList={setCuisine} />
              <Checkbox label="European" list={cuisine} setList={setCuisine} />
              <Checkbox label="French" list={cuisine} setList={setCuisine} />
              <Checkbox label="Indian" list={cuisine} setList={setCuisine} />
              <Checkbox label="Italian" list={cuisine} setList={setCuisine} />
              <Checkbox label="Japanese" list={cuisine} setList={setCuisine} />
              <Checkbox label="Korean" list={cuisine} setList={setCuisine} />
              <Checkbox label="Mexican" list={cuisine} setList={setCuisine} />
              <Checkbox label="Thai" list={cuisine} setList={setCuisine} />
              <Checkbox
                label="Vietnamese"
                list={cuisine}
                setList={setCuisine}
              />
            </div>
          </div>
          <div className="block">
            <h1 className="text-2xl font-bold mt-6">Type of Meal</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-3">
              <Checkbox
                label="Main Course"
                list={mealTypes}
                setList={setMealTypes}
              />
              <Checkbox
                label="Dessert"
                list={mealTypes}
                setList={setMealTypes}
              />
              <Checkbox
                label="Appetizer"
                list={mealTypes}
                setList={setMealTypes}
              />
              <Checkbox label="Salad" list={mealTypes} setList={setMealTypes} />
              <Checkbox
                label="Breakfast"
                list={mealTypes}
                setList={setMealTypes}
              />
              <Checkbox label="Soup" list={mealTypes} setList={setMealTypes} />
              <Checkbox label="Snack" list={mealTypes} setList={setMealTypes} />
            </div>
          </div>
        </div>
        {/* END of checkboxes */}
        <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
          <div className="rounded-md shadow">
            <Link href={"/spoon"}>
              <a
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-500 hover:bg-sky-600 md:py-4 md:text-lg md:px-10"
                onClick={() => {
                  window.sessionStorage.setItem(
                    "allergies",
                    JSON.stringify(allergies)
                  );
                  window.sessionStorage.setItem("diet", JSON.stringify(diet));
                  window.sessionStorage.setItem(
                    "cuisine",
                    JSON.stringify(cuisine)
                  );
                  window.sessionStorage.setItem(
                    "mealTypes",
                    JSON.stringify(mealTypes)
                  );
                }}
              >
                Show me dishes!
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
