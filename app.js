let express = require("express");
let app = express();

app.get("/url", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.get("/bruh", (req, res, next) => {
  res.json("Nackenklatscher");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});