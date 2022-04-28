import Data from "../../data/healthy_recipes.json";

// Return an example response to save api calls
export default async function handler(req, res) {
	return res.status(200).json(Data);
}
