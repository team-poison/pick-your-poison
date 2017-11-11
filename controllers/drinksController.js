var express = require("express");
var router = express.Router();
var drinksDB = require("../models/drinks.js");

router.get("/", function(req, res) {
   res.render("viewOrCreate");
});

router.get("/managerOption", function(req, res) {
  res.render("managerOption");
});

router.get("/drink", function(req, res) {
   res.render("viewOrCreate");
});

router.get("/restaurant", function(req, res) {
   res.render("viewOrCreate");
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

router.get("/fillStockForm", function(req, res) {
  drinksDB.all(function(data) {

    var newData = data.map(function(string){
        return string.replace(/_/g, " ");
    });

    var drinks = {
      drink: newData
    }
    
    //console.log(newData);
    res.send(drinks);
  });
});


router.get("/drink/:name", function(req, res) {
  var name = req.params.name.replace(/ /g, "_");
  drinksDB.getLocation(name, function(data) {
    var restaurants = {
      restaurant: data
    }
    res.send(restaurants)
  });
});

router.get("/restaurant/:name", function(req, res) {
  console.log(req.params)
  drinksDB.getLocationInfo(req.params.name, function(data) {
    var restaurantInfo = {
      restaurantInfo: data
    }
    res.send(restaurantInfo)
  });
});

router.get("/managerOption/updateRestInventory", function(req,res) {
  res.render("updateRestInventory");
});

router.post("/managerOption/submitRestaurant", function(req, res) {
  
  console.log("This is controller!")
  console.log(req.body)
  drinksDB.addRestaurant([
    "restaurant"], [
    req.body["name"], req.body["blurb"], req.body["columns[]"], req.body["input[]"]
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

  console.log("This is router")
  console.log(req.body)
  
  drinksDB.updateInventory(["restaurant"], [
    req.body["name"], req.body["blurb"], req.body["columns[]"], req.body["input[]"]
    ], function() {
    res.redirect("/");
  });
});

module.exports = router;
