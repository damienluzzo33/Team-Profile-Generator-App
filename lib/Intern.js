const Employee = require("./Employee");

// create Manager parent class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    // * `getRole() overridden to return `'Intern'` 
    getRole() {
        console.log("Intern");
        return "Intern"
    }
    // create method to print the school of the intern
    getSchool() {
        console.log(this.school)
    }
}

module.exports = Intern;