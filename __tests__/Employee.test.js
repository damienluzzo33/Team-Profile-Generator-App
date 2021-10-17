// import the Employee class
const Employee = require("../lib/Employee");
// run test on the Employee class
describe("Employee", () => {
    // test the constructor's ability to initialize an instance of the class
    describe("Init", () => {
        // should create an instance of the class with the properties defined in constructor
        it("should create an instance of an Employee object when we call it with the new keyword", () => {
            // make instance of Employee and store it in a variable
            const employee1 = new Employee("damien", 123, "damienluzzo33@gmail.com");
            // make sure that the properties of the instantiated object returns the values it is supposed to
            expect(employee1.name).toEqual("damien");
            expect(employee1.id).toEqual(123);
            expect(employee1.email).toEqual("damienluzzo33@gmail.com");
        })
    })
    // test the getName method
    describe("getName", () => {
        // should return the name property as defined in constructor
        it("should return the name of the employee instance that was created", () => {
            // make instance of Employee and store it in a variable
            const employee2 = new Employee("damien", 123, "damienluzzo33@gmail.com");
            // use the getName() method and store result in variable
            const result = employee2.getName();
            // make sure the result returned is correct
            expect(result).toEqual("damien");
        })
    })
    // test the getId method
    describe("getId", () => {
        // should return the ID property as defined in constructor
        it("should return ID of the employee instance that was created", () => {
            // make instance of Employee and store it in a variable
            const employee3 = new Employee("damien", 123, "damienluzzo33@gmail.com");
            // use the getId() method and store result in variable
            const result = employee3.getId();
            // make sure the result returned is correct
            expect(result).toEqual(123);
        })
    })
    // test the getEmail method
    describe("getEmail", () => {
        // should return the email property as defined in constructor
        it("should return email of the employee instance that was created", () => {
            // make instance of Employee and store it in a variable
            const employee4 = new Employee("damien", 123, "damienluzzo33@gmail.com");
            // use the getEmail() method and store result in variable
            const result = employee4.getEmail();
            // make sure the result returned is correct
            expect(result).toEqual("damienluzzo33@gmail.com");
        })
    })
    // test the getRole method
    describe("getRole", () => {
        // should return the string "Employee"
        it("should return 'Employee'", () => {
            // make instance of Employee and store it in a variable
            const employee5 = new Employee("damien", 123, "damienluzzo33@gmail.com");
            // use the getRole() method and store result in variable
            const result = employee5.getRole();
            // make sure the result returned is correct
            expect(result).toEqual("Employee");
        })
    })
})