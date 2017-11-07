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

    var newData = data.map(function(string){
        return string.replace(/_/g, " ");
    });

    var drinks = {
      drink: newData
    }
    
    //console.log(newData);
    res.render("viewDrinks", drinks);
  });
});

router.get("/drink/:name", function(req, res) {
  var name = req.params.name.replace(/ /g, "_");
  drinksDB.getLocation(name, function(data) {
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

router.get("/managerOption/updateRestInventory", function(req,res) {
  res.render("updateRestInventory");
});

router.post("/managerOption/submitRestaurant", function(req, res) {
  
  //console.log(req.body.name);
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

router.post("/managerOption/updateInventory", function(req, res) {
  
  //console.log(req.body["input[]"])
  drinksDB.updateInventory(["restaurant"], [req.body["name"], req.body["input[]"]], function() {
    res.redirect("/");
  });
});

module.exports = router;
