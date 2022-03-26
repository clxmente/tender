import Link from "next/link";
import Checkbox from "../components/Checkbox";

export default function Questionnaire() {
	return (
		<div className="bg-gray-50 overflow-hidden">
			<div className="relative pt-6 pb-16 sm:pb-24">
				<main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
					<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
						<span className="block xl:inline">
							<span className="block text-indigo-600 xl:inline">Select</span>{" "}
							Your Preferences Below
						</span>{" "}
					</h1>
					<p className="mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
						These choices will affect the dishes shown to you. You can customize
						your preferences by selecting from the checkboxes below, then
						clicking the button at the bottom of the screen.
					</p>
					{/* Insert Grid of Questions Under this */}
					<div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
						<div className="block">
							<h1 className="text-2xl font-bold mt-6">Allergies</h1>
							<div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-3">
								<Checkbox label="Peanuts" />
								<Checkbox label="Gluten" />
								<Checkbox label="Dairy" />
								<Checkbox label="Egg" />
								<Checkbox label="Fish" />
								<Checkbox label="Sesame" />
								<Checkbox label="Soy" />
								<Checkbox label="Wheat" />
							</div>
						</div>
						<div className="block">
							<h1 className="text-2xl font-bold mt-6">Dietary Choices</h1>
							<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
								<Checkbox label="Keto" />
								<Checkbox label="No Sugar" />
								<Checkbox label="Pescatarian" />
								<Checkbox label="No Pork" />
								<Checkbox label="No Red Meat" />
								<Checkbox label="Vegan" />
								<Checkbox label="Vegeterian" />
							</div>
						</div>
					</div>
					{/* Cuisines and Type of Meal */}
					<div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
						<div className="block">
							<h1 className="text-2xl font-bold mt-6">Cuisines</h1>
							<div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-3">
								<Checkbox label="American" />
								<Checkbox label="Asian" />
								<Checkbox label="Indian" />
								<Checkbox label="French" />
								<Checkbox label="Italian" />
								<Checkbox label="Japanese" />
								<Checkbox label="Korean" />
								<Checkbox label="Mexican" />
							</div>
						</div>
						<div className="block">
							<h1 className="text-2xl font-bold mt-6">Type of Meal</h1>
							<div className="grid grid-cols-2 gap-3 mt-3">
								<Checkbox label="Breakfast" />
								<Checkbox label="Lunch" />
								<Checkbox label="Dinner" />
							</div>
						</div>
					</div>
					{/* END of checkboxes */}
					<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
						<div className="rounded-md shadow">
							<Link href={"/swipe"}>
								<a
									href="#"
									className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
								>
									Show me dishes!
								</a>
							</Link>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
