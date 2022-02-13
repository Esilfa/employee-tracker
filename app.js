
const inquirer = require("inquirer");
const connection = require ('./utils/connection')
const questions = require ("./utils/questions")
const table = require("console.table");

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
    async function start(){
        
    }
    
