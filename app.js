const inquirer = require("inquirer");
const orm = require("./config/orm");
// const { viewDepartments } = require("./config/orm");



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
        orm.viewDepartments();
        break;
      case "View Employees":
        orm.viewEmployees();
        break;
      case "View Roles":
        orm.viewRoles();
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
 * might have to change these function names around. currently the inquirer
 * functions match mthe names of my functions that are actually handling
 * data and I think that is, unsanitary? but shouldn't it not matter because
 * I'm accessing the orm object?
 */

function addDepartment() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the department name?",
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
    orm.addDepartment(answers.department);
    createCMS();
  })
}

// function to add an employee to the db, not sending data though
function addEmployee() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the first name of the employee?",
      name: "employeeFirstName",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Enter a valid employee name.";
      }
    },
    {
      type: "input",
      message: "What is the last name of the employee?",
      name: "employeeLastName",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Enter a valid employee name.";
      }
    },
    {
      // maybe I should use the expandable list type 
      // type: "expand"
      // {key: '1' value: employee},
      // https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
      type: "list",
      message: "What is the role of the employee?",
      name: "employeeRoleID",
      choices: ["1","2"],
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Enter a valid role."
      }
    },
    {
      type: "input",
      message: "What is the ID of their manager?",
      name: "employeeManager"
    }
  ]).then(answer => {
    Orm.employeeInsert(answer.employeeFirstName, answer.employeeLastName, 
      answer.employeeRoleID, answer.employeeManager);
    createCMS();
  })
}

// function to add a new role to the database, not breaking, but isn't sending 
// data to mysql
function addRole() {
  inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of the role?",
      name: "roleTitle"
    },
    {
      type: "input",
      message: "What is the salary of this role?",
      name: "roleSalary"
    },
    {
      type: "input",
      message: "What is the ID of the department this role belongs to?",
      name: "departmentId"
    }
  ]).then(answer => {
    orm.addRole(answer.roleTitle, answer.roleSalary, answer.departmentId);
    createCMS();
  })
}

/**@todo
 * create updateEmployeeRole();
 */


