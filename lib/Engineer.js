const Employee = require("./Employee");

// create Manager parent class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
    // * `getRole() overridden to return `'Engineer'` 
    getRole() {
        console.log("Engineer");
        return "Engineer"
    }
    // create method to print the github profile of the engineer
    getGithub() {
        console.log(this.github);
    }
}

module.exports = Engineer;