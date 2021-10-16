const fs = require("fs");
const inquirer = require("inquirer");

const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const partyPeople = [];

// create function for generalized validation for questions that are required for the README
function validatorText(response) {
    // Make sure the response is not a number, and that it exists
	let validation = response && isNaN(response) ? true : 'This response is required & it needs to be text! Try again!'
	return validation;
};

function validatorNumber(response) {
    // Make sure the response is not a number, and that it exists
	let validation = response && !isNaN(response) ? true : 'This response is required & it need to be a number! Try again!'
	return validation;
};

// Prompt user to enter team manager name, employee ID, email address, office number
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is your team manager's name? ",
                validate: validatorText
            },
            {
                type: 'input',
                name: 'managerID',
                message: "What is your team manager's employee ID? ",
                validate: validatorNumber
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is your team manager's email address? ",
                validate: validatorText
            },
            {
                type: 'input',
                name: 'officeNum',
                message: "What is your team manager's office number? ",
                validate: validatorNumber
            }
        ])
        // then push answers object onto the array and prompt the user with next questions using separate function
        .then((answers) => {
            console.log(answers);
            const { managerName, managerID, managerEmail, officeNum } = answers;

            const manager = new Manager(managerName, managerID, managerEmail, officeNum);
            
            console.log(manager);
            partyPeople.push(manager);

            menuPrompt();
        });
}
// Present user with the options to add an engineer, add an intern, or finish building their team
function menuPrompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menuOption',
                message: "What would you like to do next?",
                choices: [
                    "Add An Engineer",
                    "Add An Intern",
                    "Finish Building My Team"
                ]
            }
        ])
        .then((selection) => {
            // if they want to add engineer, call engineer questions function
            if (selection.menuOption === "Add An Engineer") {  
                addEngineer();
                // else if they want to add inter, call intern questions function
            } else if (selection.menuOption === "Add An Intern") {
                addIntern();
                // else if they want to finish their team, call the finish team function
            } else if (selection.menuOption === "Finish Building My Team") {
                finishTeam();
            } else {
                console.log("SOMETHING WENT WRONG!")
            }
        })
}
// Prompt user to enter the engineer’s name, ID, email, and GitHub username
function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is your team engineer's name? ",
                validate: validatorText
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "What is your team engineer's employee ID? ",
                validate: validatorNumber
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is your team engineer's email address? ",
                validate: validatorText
            },
            {
                type: 'input',
                name: 'engineerGitHub',
                message: "What is your team engineer's GitHub username? ",
                validate: validatorText
            }
        ])
        .then((answers) => {
            console.log(answers);
            const { engineerName, engineerID, engineerEmail, engineerGitHub } = answers;

            const engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGitHub);
            
            console.log(engineer);
            partyPeople.push(engineer);

            menuPrompt();
        })
}
// Prompt user to enter the engineer’s name, ID, email, and GitHub username
function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is your intern's name? ",
                validate: validatorText
            },
            {
                type: 'input',
                name: 'internID',
                message: "What is your intern's employee ID? ",
                validate: validatorNumber
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is your intern's email address? ",
                validate: validatorText
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "Where did/does your team intern attend school? ",
                validate: validatorText
            }
        ])
        .then((answers) => {
            console.log(answers);
            const { internName, internID, internEmail, internSchool } = answers;

            const intern = new Intern(internName, internID, internEmail, internSchool);
            
            console.log(intern);
            partyPeople.push(intern);

            menuPrompt();
        })
}

function finishTeam() {
    console.log("We're finished!")
}

init();