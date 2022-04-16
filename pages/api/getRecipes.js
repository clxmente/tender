import Data from "../../data/spoonacular_response.json";

//! Uncomment this section when you want to make real API calls
/*
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed." });
  }

  if (!req.body.tags) {
    return res
      .status(422)
      .json({ message: "Unprocessable Entity: missing tags" });
  }

  if (req.body.tags !== "none") {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=3&tags=${req.body.tags}&apiKey=${process.env.SPOON_KEY}`
    );
    const data = await response.json();
    return res.status(200).json(data);
  } else {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=25&apiKey=${process.env.SPOON_KEY}`
    );
    const data = await response.json();
    return res.status(200).json(data);
  }
}
*/
//! --------------------------------------

// Return an example response to save api calls
export default async function handler(req, res) {
  return res.status(200).json(Data);
}
