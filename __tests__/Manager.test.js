// import the Manager class
const Manager = require("../lib/Manager");
// run test on the Manager class
describe("Manager", () => {
    // test the constructor's ability to initialize an instance of the class
    describe("Init", () => {
        // should create an instance of the class with the properties defined in constructor
        it("should create an instance of an Manager object when we call it with the new keyword", () => {
            // make instance of Manager and store it in a variable
            const manager1 = new Manager("damien", 123, "damienluzzo33@gmail.com", 990);
            // make sure that the properties of the instantiated object returns the values it is supposed to
            expect(manager1.name).toEqual("damien");
            expect(manager1.id).toEqual(123);
            expect(manager1.email).toEqual("damienluzzo33@gmail.com");
            expect(manager1.officeNum).toEqual(990);
        })
    })
    // test the getName method
    describe("getName", () => {
        // should return the name property as defined in constructor
        it("should return the name of the manager instance that was created", () => {
            // make instance of Manager and store it in a variable
            const manager2 = new Manager("damien", 123, "damienluzzo33@gmail.com", 990);
            // use the getName() method and store result in variable
            const result = manager2.getName();
            // make sure the result returned is correct
            expect(result).toEqual("damien");
        })
    })
    // test the getId method
    describe("getId", () => {
        // should return the ID property as defined in constructor
        it("should return ID of the manager instance that was created", () => {
            // make instance of Manager and store it in a variable
            const manager3 = new Manager("damien", 123, "damienluzzo33@gmail.com", 990);
            // use the getId() method and store result in variable
            const result = manager3.getId();
            // make sure the result returned is correct
            expect(result).toEqual(123);
        })
    })
    // test the getEmail method
    describe("getEmail", () => {
        // should return the email property as defined in constructor
        it("should return email of the manager instance that was created", () => {
            // make instance of Manager and store it in a variable
            const manager4 = new Manager("damien", 123, "damienluzzo33@gmail.com", 990);
            // use the getEmail() method and store result in variable
            const result = manager4.getEmail();
            // make sure the result returned is correct
            expect(result).toEqual("damienluzzo33@gmail.com");
        })
    })
    // test the getRole method
    describe("getRole", () => {
        // should return the string "Manager"
        it("should return 'Manager'", () => {
            // make instance of Manager and store it in a variable
            const manager5 = new Manager("damien", 123, "damienluzzo33@gmail.com", 990);
            // use the getRole() method and store result in variable
            const result = manager5.getRole();
            // make sure the result returned is correct
            expect(result).toEqual("Manager");
        })
    })
})