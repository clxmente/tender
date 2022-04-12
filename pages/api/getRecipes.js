// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// returns a list of recipes

import Data from "../../data/ex_chicken_response.json";

//! Uncomment this section when you want to make real API calls
/* 
export default async function handler(req, res) {
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&imageSize=LARGE&random=true`
  );
  const data = await response.json();
  res.status(200).json(data["hits"]);
  return;
}
 */
//! --------------------------------------

// Return an example response to save api calls
export default async function handler(req, res) {
  res.status(200).json(Data);
  return;
}
