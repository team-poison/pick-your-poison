var express = require("express");

var router = express.Router();

var drinksDB = require("../models/drinks.js");

router.get("/", function(req, res) {
  drinksDB.allDrinks(function(data) {
    var hbsObject = {
      drink: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/:name", function(req, res) {
  drinksDB.getLocation(req.params.name, function(data) {
    var nameArray = [];
    var restobj = {nameArray};
    for(var i = 0; i<data.length; i++) {
      nameArray.push(data[i].restaurant);
    }
    res.render("index", restobj);
    console.log(restobj);
  });
});

// router.post("/", function(req, res) {
//   drinksDB.create([
//     "name", "location"
//   ], [
//     req.body.name, req.body.location
//   ], function() {
//     res.redirect("/");
//   });
// });

// router.put("/:name", function(req, res) {
//   var condition = "name = " + req.params.id;

//   console.log(req)

  // console.log("condition", condition);

  // drinksDB.update({
  //   location: req.body.location
  // }, condition, function() {
  //   res.redirect("/");
  // });
// });

// Export routes for server.js to use.
module.exports = router;
