const inquirer = require("inquirer");
const AddEntriesFromIterable = require("es-abstract/2019/AddEntriesFromIterable");

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
      default:
        return;

    }
  })
}

createCMS();

/**@todo
 * create addDepartment();
 */

/**@todo
 * create addDepartment();
 */

/**@todo
 * create addDepartment();
 */

/**@todo
 * create addDepartment();
 */


/**@todo
 * create viewInfo();
 */

/**@todo
 * create updateRoles();
 */