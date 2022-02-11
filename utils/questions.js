const { removeListener } = require("./connection");

module.exports = {
    initialQuestion: {
        type: "list",
        message: "What would you like to do?",
        name: "initial",
        choices: ["Add Employee",
            "Add Department",
            "Add Role",
            "View Departments",
            "View Employees",
            "Update Employee's Role",
            "View All Employees by Manager",
            "Remove Employee",
            "View All Employees by Department",
            "View All Roles",
            "Add a Role",
            "Remove Roles",
            "Exit"
        ]
    },
    addEmployee: (role, employees) => [{
        type: "input",
        message: "What is the employee's first name?",
        name: "first_name",
    },
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "last_name",
    },
    {
        type: 'input',
        message: "What is the employee's roleID",
        name: 'role_id',
        choices: roles,
    },
    {
        type: "list",
        message: "Who is your employee's manager?",
        name: "manager_id",
        choices: employees
    }],

    addDepartmentQuestions: {
        type: "input",
        message: "What is the department name?",
        name: "department_name",
    },
    addRole: [{
        type: "input",
        message: "What is your new role tittle?",
        name: "titleRole",
    },
    {
        type: "input",
        message: "What is the salary for this role?",
        name: "salary",
    },
    {
        type: "input",
        message: "What is the department id for this role?",
        name: "departmentIDrole",
    }],
    removeRole: {
        type: 'list',
        message: "What is the employee's role?",
        name: "roleRemoval",
        choices: ["Manager", "Associate", "Soft"]
    },
    quit: {
        type: 'list',
        message: "Are you sure you want to quit?",
        name: 'quit',
        choices: ["Yes", "No"]
    },
    removeEmployee: {
        type: 'list',
        message: "What is the employee's role",
        name: "employeeRemoval",
        choices: ["Manager", "Associate", "Soft"]
    }


}