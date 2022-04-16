const fs = require("fs");
const liked = require("../../data/likedrecipes.json");

export default async function handler(req, res) {
  // TODO: add a check to see if recipe id is already in likedrecipes.json
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed." });
  }

  const body = req.body;
  liked.push(body);
  fs.writeFileSync("data/likedrecipes.json", JSON.stringify(liked, null, 2)); // write to file
  res.status(201).json({ message: "Successfully added recipe" });
}
