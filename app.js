const express = require("express");
const path = require("path");
const app = express();
const port = 8080;
const cors = require("cors");

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/learningnode");
var db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("connection succeeded");
});

app.get("/getworld", (req, res) => {
  res.status(200).send("Hello World! this is node");
});

app.post("/postWorld", (req, res) => {
  res.status(200).send("Hello World! Post Request");
});

app.get("/notfound", (req, res) => {
  res.status(400).send("page not found");
});

app.post("/signup", function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var pass = req.body.password;

  var data = {
    name: name,
    email: email,
    password: pass,
  };
  db.collection("users").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("data added");
  });

  return res.redirect("success.html");
});

app
  .get("/", function (req, res) {
    res.set({
      "Access-control-Allow-Origin": "*",
    });
    return res.redirect("index.html");
  })
  .listen(3000);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
