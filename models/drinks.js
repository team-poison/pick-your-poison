// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var drinks = {
  all: function(cb) {
    orm.all("drinks", function(res) {
      cb(res);
    });
  },

  getLocation: function(drinkName, cb) {
    orm.getLocation("drinks", drinkName, function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("drinks", cols, vals, function(res) {
      cb(res);
    });
  },
  // For restaurants
  update: function(objColVals, condition, cb) {
    orm.update("drinks", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = drinks;
