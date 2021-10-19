// import fs and inquirer
const fs = require('fs');
const inquirer = require('inquirer');
// import the Intern, Manager, and Engineer classes
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
// create empty array to collect user entries from inquirer prompts
const myTeamMembers = [];
// create empty array to collect team member data from class methods/properties
const allTeamMembers = [];
// declare global variables
let fullName, id, email, alt, altLabel, icon, role, altStuff, teamMemberObject, teamNameResponse;
// create function for generalized text validation for text response questions
function validatorText(response) {
	// Make sure the response is not a number, and that it exists
	let validation = response && isNaN(response) ? true : 'This response is required & it needs to be text! Try again!';
	return validation;
}
// create function for generalized number validation for number response questions
function validatorNumber(response) {
	// Make sure the response is not a number, and that it exists
	let validation =
		response && !isNaN(response) ? true : 'This response is required & it need to be a number! Try again!';
	return validation;
}

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
			// destructure the returned answers object
			const { managerName, managerID, managerEmail, officeNum } = answers;
			// create instance of Manager class
			const manager = new Manager(managerName, managerID, managerEmail, officeNum);
			// push manager instance onto the team member array
			myTeamMembers.push(manager);
			// call the menu prompt function
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
				message: 'What would you like to do next?',
				choices: [ 'Add Another Manager', 'Add An Engineer', 'Add An Intern', 'Finish Building My Team' ]
			}
		])
		.then((selection) => {
			// if they want to add another manager, call manager questions function
			if (selection.menuOption === 'Add Another Manager') {
				managerPrompt();
				// else if they want to add engineer, call engineer questions function
			} else if (selection.menuOption === 'Add An Engineer') {
				addEngineer();
				// else if they want to add inter, call intern questions function
			} else if (selection.menuOption === 'Add An Intern') {
				addIntern();
				// else if they want to finish their team, call the finish team function
			} else if (selection.menuOption === 'Finish Building My Team') {
				finishTeam();
			} else {
				console.log('SOMETHING WENT WRONG!');
			}
		});
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
			// create instance of Engineer class
			const engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGitHub);
			// push engineer instance onto the team member array
			myTeamMembers.push(engineer);
			// call the menu prompt function
			menuPrompt();
		});
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
				message: 'Where did/does your team intern attend school? ',
				validate: validatorText
			}
		])
		.then((answers) => {
			console.log(answers);
			const { internName, internID, internEmail, internSchool } = answers;
			// create instance of Intern class
			const intern = new Intern(internName, internID, internEmail, internSchool);
			// push intern instance onto the team member array
			myTeamMembers.push(intern);
			// call the menu prompt function
			menuPrompt();
		});
}

function teamName() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'title',
				massage: 'What is the name of your team? (Ex: The Avengers) '
			}
		])
		.then((answers) => {
			let teamNameResponse = answers.title;
			return teamNameResponse;
		});
}

// create function to parse the data received and create a manageable and dynamic
const finishTeam = () => {
	// call the team name function
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'title',
				massage: 'What is the name of your team? (Ex: The Avengers) '
			}
		])
		.then((answers) => {
			teamNameResponse = answers.title;
			// loop through the objects in the team member array
			for (let member of myTeamMembers) {
				// get name, id, email, and role from objects using the inherited employee methods
				fullName = member.getName();
				id = member.getId();
				email = member.getEmail();
				role = member.getRole();
				// store team title in variable to add to the html string

				// conditionally call methods and create icons based on the employee's type
				if (role === 'Manager') {
					alt = member.getOfficeNum();
					altLabel = 'Office';
					icon = `<i class="fas fa-coffee"></i>`;
				} else if (role === 'Intern') {
					alt = member.getSchool();
					altLabel = 'School';
					icon = `<i class="fas fa-graduation-cap"></i>`;
				} else if (role === 'Engineer') {
					alt = member.getGithub();
					altLabel = 'GitHub';
					icon = `<i class="fas fa-glasses"></i>`;
				}
				// create an object from the rendered values
				teamMemberObject = {
					fullName: fullName,
					id: id,
					email: email,
					altLabel: altLabel,
					alt: alt,
					role: role,
					icon: icon
				};
				// after we build the object with the team member's data, push it onto the allTeamMembers array of objects
				allTeamMembers.push(teamMemberObject);
			}
			// call function to generate html based on data passed in
			generateHtml(allTeamMembers, teamNameResponse);
		});
};

// create function to generate html text dynamically
function generateHtml(team, name) {
	// add initial html to the htmlString
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
    <link rel="stylesheet" href="./dist/styles.css">
    <title>${name}</title>
</head>

<body>
    <nav class="navbar navbar-dark justify-content-center">
        <span id="title-text" class="navbar-brand mb-0 h1">
            <i class="fas fa-user-friends"></i>${name}
        </span>
    </nav>

    <div id="team-cards" class="container d-flex flex-wrap justify-content-center align-items-center">
    `;
	// loop through the team members in the team data array and dynamically insert data into team member bootstrap card
	for (let teamMember of team) {
		// if the team member has a github profile, then dynamically create a link to the github profile
		if (teamMember.altLabel === 'GitHub')
			altStuff = `<a href="https://github.com/${teamMember.alt}">${teamMember.alt}</a>`;
		else altStuff = teamMember.alt;
		htmlString = htmlString.concat(`
<div class="card m-2" style="min-width: 20rem;">
    <div class="card-body">
        <h5 class="card-title">${teamMember.fullName}</h5>
        <h5 class="card-title">${teamMember.icon} ${teamMember.role}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${teamMember.id}</li>
        <li class="list-group-item"><a href="mailto:${teamMember.email}"Email: ${teamMember.email}</a></li>
        <li class="list-group-item">${teamMember.altLabel}: ${altStuff}</li>
    </ul>
</div>
`);
	}
	// add ending html to the html string
	htmlString = htmlString.concat(`
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
</body>

</html>`);
	// call the function to create the html file for the html string created
	createHtmlFile(htmlString);
}
// create function to use fs to create an index.html that displays team members
function createHtmlFile(html) {
	fs.writeFile('dist/index.html', `${html}`, (err) => {
		err ? console.log(err) : console.log('Your HTML Document Was Successfully Generated!');
	});
}
// initialize app when index.js is run in the console
managerPrompt();
