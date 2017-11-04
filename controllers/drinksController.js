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
    // replace(/_/g, "");
    var drinks = {
      drink: data
    }
    var numbers = [1, 2, 3, 4];

var newNumbers = numbers.map(function(number){
    return number * 2;
});
    console.log(data);
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
  
  //console.log(req.body["drinkName"]);
  drinksDB.addDrink(req.body["drinkName"], function() {
      res.redirect("/");
  });
});

module.exports = router;
