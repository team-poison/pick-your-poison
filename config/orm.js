// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(vals, num) {

  for (var i = 0; i < num; i++) {
    vals.push("?");
  }

  return vals.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SHOW columns FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      var colHeadings = [];
      for (var i = 3; i < result.length; i++) {
        colHeadings.push(result[i]["Field"])
      }
      cb(colHeadings);
    });
  },

  getLocation: function(tableInput, drinkName, cb) {
    var queryString = "SELECT * FROM " + tableInput;
    queryString += " WHERE " + drinkName + " =1";
    //console.log(queryString)

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      var restaurants = [];
      for (var i = 0; i < result.length; i++) {
        restaurants.push(result[i]["restaurant"])
      }
      cb(restaurants);
    });
  },

  getLocationInfo: function(tableInput, locationName, cb) {
    var queryString = "SELECT * FROM " + tableInput;
    queryString += " WHERE restaurant='";
    queryString += locationName+"'";
    console.log(queryString)

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result[0]);
    });
  },

  getRestaurantDrinks: function(tableInput, restaurantName, cb) {
    var queryString = "SELECT * FROM " + tableInput;
    queryString += " WHERE " + restaurant + " = " + restaurantName;
    //console.log(queryString)

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      var restaurants = [];
      for (var i = 0; i < result.length; i++) {
        restaurants.push(result[i]["restaurant"])
      }
      cb(restaurants);
    });
  },
  
  
  addRestaurant: function(table, restaurantName, restaurantInfo, cb) {
    var queryString = "INSERT INTO " + table;
    
    console.log("This is ORM!")
    console.log(restaurantInfo)

    var colNames = ['restaurant', 'blurb']

    for (var i = 0; i < restaurantInfo[2].length; i++) {
      colNames.push(restaurantInfo[2][i].replace(/ /g, "_"))
    };

    //console.log(cols);
    //console.log(vals);
    var quotedVals = ["'" + restaurantInfo[0] + "', " + "'" + restaurantInfo[1] + "'", restaurantInfo[3]].toString();
    console.log(quotedVals);

    queryString += " (";
    queryString += colNames.toString();
    
    queryString += ") ";
    queryString += "VALUES (";

    queryString += quotedVals;
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  addDrink: function(table, drinkName, cb) {
    var queryString = "ALTER TABLE " + table + " ADD COLUMN " + drinkName + " BOOLEAN DEFAULT 0;";

    //console.log(queryString)
    
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      //console.log(result);
      cb (result);
    });
  },

  updateInventory: function(table, restaurantName, restaurantInfo, cb) {
    
    var queryString = "UPDATE " + table;
    var colNames = ['restaurant', 'blurb']

    console.log("This is orm")
    for (var i = 0; i < restaurantInfo[2].length; i++) {
      colNames.push(restaurantInfo[2][i].replace(/ /g, "_"))
    };
    
    var cleanedRestaurntInput = [restaurantInfo[0], restaurantInfo[1]]
    for (var i = 0; i < restaurantInfo[3].length; i++) {
      cleanedRestaurntInput.push(restaurantInfo[3][i])
    }
    console.log(cleanedRestaurntInput);

    queryString += " SET ";

    var inputArray = []
    for (var i = 0; i < colNames.length; i++) {
       inputArray.push(colNames[i]+" = '"+String(cleanedRestaurntInput[i])+"'")
    }

    console.log(String(inputArray))

    queryString += String(inputArray)
    queryString += " WHERE restaurant = " + "'" + String(restaurantInfo[0]) + "'";

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

};

// Export the orm object for the model (cat.js).
module.exports = orm;