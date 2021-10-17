// create Employee class
class Employee {
    // create constructor to be used to initialize instances of Employee
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // method to return the employee name
    getName() {
        console.log(this.name);
        return this.name;
    }
    // method to return the employee id
    getId() {
        console.log(this.id);
        return this.id
    }
    // method to return the employee email
    getEmail() {
        console.log(this.email);
        return this.email
    }
    // method to return the string "Employee"
    getRole() {
        console.log("Employee");
        return "Employee"
    }
}
// export the Employee class
module.exports = Employee;