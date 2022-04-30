// import Data from "../../data/restaurants.json";

//! Uncomment this section when you want to make real API calls

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed." });
  }

  const response = await fetch(
    "https://search.picknic.app/api/v1/establishmentsearch",
    {
      method: "POST",
      body: JSON.stringify(req.body),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const json = await response.json();
  return res.status(200).json(json);
}

//! --------------------------------------
/* 
// Return an example response to save api calls
export default async function handler(req, res) {
  return res.status(200).json(Data);
}
 */
