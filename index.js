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
function managerPrompt() {
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

let htmlArray = [];
let name, id, email, extra, extraName, icon;

function finishTeam() {
    console.log("We're finished!")
    for (let people of partyPeople) {
        let role = people.getRole();
        if (role === "Manager") {
            name = people.getName();
            id = people.getId();
            email = people.getEmail();
            extra = people.getOfficeNum();
            extraName = "Office";
            icon = `<i class="fas fa-mug-hot"></i>`;
        } else if (role === "Intern") {
            name = people.getName();
            id = people.getId();
            email = people.getEmail();
            extra = people.getSchool();
            extraName = "School";
            icon = `<i class="fas fa-user-graduate"></i>`;
        } else if (role === "Engineer") {
            name = people.getName();
            id = people.getId();
            email = people.getEmail();
            extra = people.getGithub();
            extraName = "GitHub";
            icon = `<i class="fas fa-atom"></i>`;
        }
        let obj = {
            name: name,
            id: id,
            email: email,
            extraName: extraName,
            extra: extra,
            role: role,
            icon: icon
        }
        htmlArray.push(obj);
    }
    generateHtml(htmlArray);
}

function generateHtml(htmlArray) {
    let htmlString = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="Description" content="Enter your description here" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <link rel="stylesheet" href="assets/css/style.css">
        <title>Title</title>
    </head>

    <body>

        <div id="team-cards" class="container d-flex flex-wrap justify-content-center align-items-center">
    `;
    console.log(htmlString);
    let extraStuff;
    for (let employee of htmlArray) {
        if (employee.extraName === "GitHub") {
            extraStuff = `<a href="https://github.com/${employee.extra}">${employee.extra}</a>`
        } else {
            extraStuff = employee.extra;
        }
        htmlString = htmlString.concat(
            `<div class="card" style="width: 18rem;">
                <div class="card-body" style="background-color: blue">
                    <h5 class="card-title">${employee.name}</h5>
                    <h5 class="card-title">${employee.icon} ${employee.role}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: ${employee.email}</li>
                    <li class="list-group-item">${employee.extraName}: ${extraStuff}</li>
                </ul>
            </div>`
        )
    }
    console.log(htmlString);
    htmlString = htmlString.concat(
        `</div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
        </body>
        
        </html>`
    )
    console.log(htmlString);
    writeHtml(htmlString);
}

function writeHtml(data) {
    fs.writeFile("index.html", `${data}`, (err) => {
        err ? console.log(err) : console.log("It works!")
    })
}

managerPrompt();