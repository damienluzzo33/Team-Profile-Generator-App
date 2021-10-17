const Employee = require("./Employee");

// create Manager parent class
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;
    }
    // `getRole() overridden to return `'Manager'` 
    getRole() {
        console.log("Manager");
        return "Manager";
    }
    
    getOfficeNum() {
        console.log(this.officeNum);
        return this.officeNum;
    }
}

module.exports = Manager;