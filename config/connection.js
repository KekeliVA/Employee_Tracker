const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "FEZDwwMU8q8!_",
  database: "employee_tracker_v2"
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id" + connection.threadId);
});

module.exports = connection;
