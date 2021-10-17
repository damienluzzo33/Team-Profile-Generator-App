// import the Employee class
const Employee = require("./Employee");
// extend Employee class to create Intern sub class
class Intern extends Employee {
    // create constructor with add school param
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    // getRole() overridden to return the string 'Intern' 
    getRole() {
        console.log("Intern");
        return "Intern";
    }
    // create method to return the school of the intern
    getSchool() {
        console.log(this.school);
        return this.school;
    }
}
// export the Intern class
module.exports = Intern;