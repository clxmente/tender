export default async function handler(req, res) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=25&apiKey=${process.env.SPOON_KEY}`
  );
  const data = await response.json();
  res.status(200).json(data["recipes"]);
  return;
}
