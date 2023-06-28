var mysql = require('mysql2');
require('dotenv').config()

// get an environment variable
const DB_USER = process.env['DB_USER'];
const DB_PASS = process.env['DB_PASS'];

var con = mysql.createConnection({
  host: "localhost",
  user: DB_USER,
  password: DB_PASS
});

// con.connect((err) => {
//   if (err) throw err;
//   console.log("Connected!");
// });

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  let sql = "SELECT * FROM database.user;";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("From database, result: " + JSON.stringify(result));
  });
});