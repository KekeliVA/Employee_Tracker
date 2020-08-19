const inquirer = require("inquirer");
const orm = require("./config/orm");


// First we need to call a function in charge of starting the general CLI

function createCMS()  {
  inquirer
    .prompt([
      {
      type: "list",
      name: "addViewOrUpdate",
      message: "What would you like to do?",
      choices: ["Add Department", "Add Employee", "Add Role",
       "View Departments", "View Roles", "View Employees", "Update Roles", "N/A"],
      validate: answer => {
        console.log(answer);
        if (answer === "N/A") {
          return answer;
        }
      }
    }
  ]).then(answers => {
    switch(answers.addViewOrUpdate) {
      case "Add Department":
        addDepartment();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "Add Role":
        addRole();
        break;
      case "View Departments":
        viewDepartments();
        break;
      case "View Employees":
        viewEmployees();
        break;
      case "View Roles":
        viewRoles();
        break;
      case "Update Roles":
        updateEmployeeRoles();
        break;
      case "N/A":
        return;

    }
  })
}

createCMS();

/**@todo
 * create addDepartment();
 */

function addDepartment() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the department name",
      name: "department",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Enter a valid department name";
      }
    }
  ]).then(answers => {
    // still need to create orm
    // will these methods break if they don't receive all arguments?
    // like will my queries just not work because they're expecting 3 arguments
    // instead of just one in some cases
    // I guess not because each orm method will correspond to what the table expects
    orm.insertInto(answers.department);
  })
}

/**@todo
 * create addEmployee();
 */

/**@todo
 * create addRole();
 */

/**@todo
 * create updateEmployeeRole();
 */

/**@todo
 * create viewDepartments();
 */


/**@todo
 * create viewEmployees();
 */

/**@todo
 * create viewRoles();
 */