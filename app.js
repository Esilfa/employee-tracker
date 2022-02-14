
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

async function addEmployee() {
    let qry = "SELECT id as value, CONCAT(first_name, ' ', last_name) as name FROM employee"
    connection.query(qry, async (err, employees) => {
        qry = "Select id as value, title as name FROM roles"
        connection.query(qry, async (err, roles) => {
            const newEmp = await inquirer.prompt(questions.addEmployee(roles, employees));
            qry = "Insert into role Set?"
            connection.query(qry, newEmp, function (err) {
                if (err) throw err;
                console.log("New employee was added successfully!");
                start();
            });
        })
    })
}
async function addNewRole() {
    const roleDetails = await inquirer.prompt(addRole)
    connection.query("Insert into role Set?", {
        title: roleDetails.titleRole,
        salary: roleDetails.salary,
        department_id: roleDetails.departmentIDrole
    },
        function (err) {
            if (err) throw err;
            console.log("New department was added successfully!");
            start();
        }
    );
}

