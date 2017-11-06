var express = require("express");
var router = express.Router();
var drinksDB = require("../models/drinks.js");

router.get("/", function(req, res) {
   res.render("viewOrCreate");
});

router.get("/managerOption", function(req, res) {
   res.render("managerOption");
});

router.get("/viewDrinks", function(req, res) {
  drinksDB.all(function(data) {
    var drinks = {
      drink: data
    }
    res.render("viewDrinks", drinks);
  });
});

router.get("/drink/:name", function(req, res) {
  drinksDB.getLocation(req.params.name, function(data) {
    var restaurants = {
      restaurant: data
    }
    res.render("viewRestaurants", restaurants)
  });
});

router.get("/restaurant/:name", function(req, res) {
  drinksDB.getLocationInfo(req.params.name, function(data) {
    var restaurantInfo = {
      restaurantInfo: data
    }
    res.render("showRestaurantInfo", restaurantInfo)
  });
});


// router.get("/drinks/:name", function(req, res) {
//   drinksDB.getLocation(req.params.name, function(data) {
//     var locationInfo = {
//       restaurant: data
//     }
//     console.log(locationInfo)
//     // console.log(data[0]["restaurant"])
//     // console.log(locationInfo.location)
//     res.render("partial/location", locationInfo)
//   });
// });

router.post("/managerOption/submitRestaurant", function(req, res) {
  
  console.log(req.body["input[]"])
  drinksDB.addRestaurant([
    "restaurant"], [
    req.body["name"], req.body["input[]"]
  ], function() {
    res.redirect("/");
  });
});

router.post("/managerOption/submitDrink", function(req, res) {
  
  console.log(req.body["input[]"])
  drinksDB.addRestaurant([
    "restaurant"], [
    req.body["name"], req.body["input[]"]
  ], function() {
    res.redirect("/");
  });
});

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
