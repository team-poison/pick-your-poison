// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var drinks = {
  all: function(cb) {
    orm.all("restaurants", function(res) {
      cb(res);
    });
  },

  getLocation: function(drinkName, cb) {
    orm.getLocation("restaurants", drinkName, function(res) {
      cb(res);
    });
  },

  getLocationInfo: function(locationName, cb) {
    orm.getLocationInfo("restaurants", locationName, function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  addRestaurant: function(restaurantName, restaurantInfo, cb) {
    //console.log(cols);
    //console.log(val);
    orm.addRestaurant("restaurants", restaurantName, restaurantInfo, function(res) {
      cb(res);
    });
  },

  updateInventory: function(restaurantName, restaurantInfo, cb) {
    console.log("This is models!")
    console.log(restaurantName)
    console.log(restaurantInfo)
    orm.updateInventory("restaurants", restaurantName, restaurantInfo, function(res) {
      cb(res);
    });
  },

  addDrink: function(drinkName, cb) {
    orm.addDrink("restaurants", drinkName, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = drinks;