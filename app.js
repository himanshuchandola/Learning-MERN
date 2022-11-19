const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;
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

app.use(require("./router/auth"));

const middleware = (req, res, next) => {
  next();
};

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/sss");
var db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("connected");
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
  db.collection("details").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Data added");
  });

  return res.redirect("success.html");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
