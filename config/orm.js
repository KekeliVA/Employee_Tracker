let connection = require ("./connection");
const { query } = require("express");

let orm = {
  viewDepartments: function() {
    let queryString = "SELECT * from department";
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },

  viewEmployees: function() {
    let queryString = "SELECT * FROM employee";
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },

  viewRoles: function() {
    let queryString = "SELECT * FROM role";
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },

  addDepartment: function(departmentName) {
    let queryString = `INSERT INTO department (departmentName)` +
    `VALUES ${departmentName}`;
    connection.query((queryString, (err, result) => {
      if (err) throw err;
      console.log(result);
    }))
  },

  addRole: function(roleTitle, roleSalary, departmentId) {
    let queryString = "INSERT INTO role (title, salary, department_id)" +
    "VALUES(" + roleTitle + roleSalary + departmentId + ")";
    connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  }


}

module.exports = orm;