let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
let fs = require("fs");

let jsonParser = bodyParser.json();
let app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/url", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.get("/bruh", (req, res, next) => {
  res.json({"nacken": "klatscher"});
});

app.post("/process_post", jsonParser, (req, res, next) => {
  response = req.body;
  let s = `${Object.keys(response)[0]}: ${response.bixby}`;

  fs.writeFile("./data.txt", s, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File written successfully!");
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});