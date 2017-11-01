// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
// <<<<<<< HEAD
  port: 8889,
  host: "localhost",
  user: "root",
  password: "root",
  database: "pyp_db"
// =======
//   socketPath:"/Applications/MAMP/tmp/mysql/mysql.sock", 

//   user: 'root',
//   password: 'root',
//   database: "drinks_db"
// >>>>>>> jason
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
