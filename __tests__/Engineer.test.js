// import the Engineer class
const Engineer = require("../lib/Engineer");
// run test on the Engineer class
describe("Engineer", () => {
    // test the constructor's ability to initialize an instance of the class
    describe("Init", () => {
        // should create an instance of the class with the properties defined in constructor
        it("should create an instance of an engineer object when we call it with the new keyword", () => {
            // make instance of Engineer and store it in a variable
            const engineer1 = new Engineer("damien", 123, "damienluzzo33@gmail.com", "damienluzzo33");
            // make sure that the properties of the instantiated object returns the values it is supposed to
            expect(engineer1.name).toEqual("damien");
            expect(engineer1.id).toEqual(123);
            expect(engineer1.email).toEqual("damienluzzo33@gmail.com");
            expect(engineer1.github).toEqual("damienluzzo33");
        })
    })
    // test the getName method
    describe("getName", () => {
        // should return the name property as defined in constructor
        it("should return the name of the engineer instance that was created", () => {
            // make instance of Engineer and store it in a variable
            const engineer2 = new Engineer("damien", 123, "damienluzzo33@gmail.com", "damienluzzo33");
            // use the getName() method and store result in variable
            const result = engineer2.getName();
            // make sure the result returned is correct
            expect(result).toEqual("damien");
        })
    })
    // test the getId method
    describe("getId", () => {
        // should return the ID property as defined in constructor
        it("should return ID of the engineer instance that was created", () => {
            // make instance of Engineer and store it in a variable
            const engineer3 = new Engineer("damien", 123, "damienluzzo33@gmail.com", "damienluzzo33");
            // use the getId() method and store result in variable
            const result = engineer3.getId();
            // make sure the result returned is correct
            expect(result).toEqual(123);
        })
    })
    // test the getEmail method
    describe("getEmail", () => {
        // should return the email property as defined in constructor
        it("should return email of the Engineer instance that was created", () => {
            // make instance of Engineer and store it in a variable
            const engineer4 = new Engineer("damien", 123, "damienluzzo33@gmail.com", "damienluzzo33");
            // use the getEmail() method and store result in variable
            const result = engineer4.getEmail();
            // make sure the result returned is correct
            expect(result).toEqual("damienluzzo33@gmail.com");
        })
    })
    // test the getRole method
    describe("getRole", () => {
        // should return the string "Engineer"
        it("should return 'Engineer'", () => {
            // make instance of Engineer and store it in a variable
            const engineer5 = new Engineer("damien", 123, "damienluzzo33@gmail.com", "damienluzzo33");
            // use the getRole() method and store result in variable
            const result = engineer5.getRole();
            // make sure the result returned is correct
            expect(result).toEqual("Engineer");
        })
    })
    // test the getGithub method
    describe("getGithub", () => {
        // should return the github property as defined in constructor
        it("should return github username of the Engineer instance that was created", () => {
            // make instance of Engineer and store it in a variable
            const engineer6 = new Engineer("damien", 123, "damienluzzo33@gmail.com", "damienluzzo33");
            // use the getGithub() method and store result in variable
            const result = engineer6.getGithub();
            // make sure the result returned is correct
            expect(result).toEqual("damienluzzo33");
        })
    })
})