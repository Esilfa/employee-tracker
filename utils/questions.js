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
    addEmployee:(role, employees) =>[{
        type:"input",
        message:"What is the employee's first name?",
        name: "first_name",
    },
    {
        type:"input",
        message: "What is the employee's last name?",
        name: "last_name",
    }
]


}