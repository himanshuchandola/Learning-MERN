const express = require("express");
const router = express.Router();

router.get("/getworld", (req, res) => {
  res.status(200).send("Hello World! this is node");
});

router.post("/postWorld", (req, res) => {
  res.status(200).send("Hello World! Post Request");
});

router.get("/notfound", (req, res) => {
  res.status(400).send("page not found");
});

// router.post("/signup", function (req, res) {
//   var name = req.body.name;
//   var email = req.body.email;
//   var pass = req.body.password;

//   var data = {
//     name: name,
//     email: email,
//     password: pass,
//   };
//   db.collection("details").insertOne(data, function (err, collection) {
//     if (err) throw err;
//     console.log("Data added");
//   });

//   return res.redirect("success.html");
// });

router
  .get("/", function (req, res) {
    res.set({
      "Access-control-Allow-Origin": "*",
    });
    return res.redirect("index.html");
  })

module.exports = router;
