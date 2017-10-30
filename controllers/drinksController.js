var express = require("express");

var router = express.Router();

var drinksDB = require("../models/drinks.js");

router.get("/", function(req, res) {
  drinksDB.all(function(data) {
    var hbsObject = {
      drink: data
    };
    console.log(hbsObject)
    res.render("index", hbsObject);
  });
});

router.get("/:name", function(req, res) {
  drinksDB.getLocation(req.params.name, function(data) {
    console.log(data[0]["restaurant"])
    // console.log(locationInfo.location)
    res.render("index", data["restaurant"])
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
