// import the Employee class
const Employee = require("./Employee");
// extend Employee class to create Manager sub class
class Manager extends Employee {
    // create constructor with added office number param
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
    }
    // getRole() overridden to return 'Manager' 
    getRole() {
        console.log("Manager");
        return "Manager";
    }
    // create method to return the office number of the Manager
    getOfficeNum() {
        console.log(this.officeNum);
        return this.officeNum;
    }
}
// export the MAnager class
module.exports = Manager;