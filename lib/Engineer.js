// import the Employee class
const Employee = require("./Employee");
// extend Employee class to create Engineer sub class
class Engineer extends Employee {
    // create constructor with added github param
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // getRole() overridden to return 'Engineer' 
    getRole() {
        console.log("Engineer");
        return "Engineer";
    }
    // create method to print the github profile of the engineer
    getGithub() {
        console.log(this.github);
        return this.github;
    }
}
// export the Engineer class
module.exports = Engineer;