// Set up MySQL connection.
var mysql = require("mysql");

// if (process.env.JAWSDB_URL) {
var connection = mysql.createConnection(process.env.JAWSDB_URL){
  port: 3306,
  host: "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "eqaqvvtuaacc451b",
  password: "i64leo8n26rdrdvr",
  database: "hcprff39kr3hkz24"
};
// } else {
//   var connection = mysql.createConnection({
//   // <<<<<<< HEAD
//     port: 3306,
//     host: "localhost",
//     user: "root",
//     password: "joguktong1!",
//     database: "pyp_db"
  // =======
  //   socketPath:"/Applications/MAMP/tmp/mysql/mysql.sock", 

  //   user: 'root',
  //   password: 'root',
  //   database: "drinks_db"
  // >>>>>>> jason
  // });
// };

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
