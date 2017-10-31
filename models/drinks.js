// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var restaurants = {
  allDrinks: function(cb) {
    orm.allDrinks("restaurants", function(res) {
      cb(res);
    });
  },

  getLocation: function(drinkName, cb) {
    orm.getLocation("restaurants", drinkName, function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("restaurants", cols, vals, function(res) {
      cb(res);
    });
  },
  // For restaurants
  update: function(objColVals, condition, cb) {
    orm.update("restaurants", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = restaurants;
