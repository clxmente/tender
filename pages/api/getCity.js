export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Only GET requests allowed." });
  }

  // regular expression to match a 5 digit zip code
  const regex = /^[0-9]{5}$/;
  if (req.query.zipCode === "undefined" || !regex.test(req.query.zipCode)) {
    return res.status(422).json({
      message: "Unprocessable Entity: please provide a valid zip code",
    });
  }

  // if nothing is wrong with the zip code, make the API call
  const api_response = await fetch(
    `https://api.openweathermap.org/geo/1.0/zip?zip=${req.query.zipCode},US&appid=${process.env.GEO_KEY}`
  );

  const api_json = await api_response.json();
  return res.status(200).json({ ...api_json });
}
