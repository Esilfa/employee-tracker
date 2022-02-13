
const inquirer = require("inquirer");
const connection = require('./utils/connection')
const questions = require("./utils/questions")
const table = require("console.table");
const logo = require("asciiart-logo");
const { addEmployee, addDepartmentQuestions } = require("./utils/questions");

displayLogo()
start();

function displayLogo() {
    console.log(
        logo({
            name: 'Employee Management System',
            lineChars: 12,
            padding: 2,
            margin: 3,
            borderColor: 'blue',
            logoColor: 'purple',
            textColor: 'white',
        })
            .render()
    );
}
async function start() {

    const userChoice = await inquirer.prompt(questions.initialQuestion);
    switch (userChoice.initial) {
        case 'add an employee':
            addEmployee();
            break;
        case 'Add a department':
            addDepartmentQuestions();
            break;
        case "Add a role":
            addNewRole();
            break;
        case "View departments":
            printDepartments();
            break;
        case "View employees":
            printEmployees();
            break;
        case "Update employee role":
            updateRole();
            break;
        case "View all employees by manager":
            employeesByManager();
            break;
        case "Remove employee":
            rmEmployee();
            break;
        case "View all employees by department":
            employeesByDepartment();
            break;
        case "View all roles":
            printRoles();
            break;
        case "Remove roles":
            rmRole();
            break;
        case "Quit":
            connection.end();
            break;
        default:
            connection.end();














    }

}

