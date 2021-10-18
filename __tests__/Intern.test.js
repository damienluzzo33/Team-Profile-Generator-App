// import the Intern class
const Intern = require("../lib/Intern");
// run test on the Intern class
describe("Intern", () => {
    // test the constructor's ability to initialize an instance of the class
    describe("Init", () => {
        // should create an instance of the class with the properties defined in constructor
        it("should create an instance of an intern object when we call it with the new keyword", () => {
            // make instance of Intern and store it in a variable
            const intern1 = new Intern("damien", 123, "damienluzzo33@gmail.com", "UC Santa Barbara");
            // make sure that the properties of the instantiated object returns the values it is supposed to
            expect(intern1.name).toEqual("damien");
            expect(intern1.id).toEqual(123);
            expect(intern1.email).toEqual("damienluzzo33@gmail.com");
            expect(intern1.school).toEqual("UC Santa Barbara");
        })
    })
    // test the getName method
    describe("getName", () => {
        // should return the name property as defined in constructor
        it("should return the name of the intern instance that was created", () => {
            // make instance of Intern and store it in a variable
            const intern2 = new Intern("damien", 123, "damienluzzo33@gmail.com", "UC Santa Barbara");
            // use the getName() method and store result in variable
            const result = intern2.getName();
            // make sure the result returned is correct
            expect(result).toEqual("damien");
        })
    })
    // test the getId method
    describe("getId", () => {
        // should return the ID property as defined in constructor
        it("should return ID of the intern instance that was created", () => {
            // make instance of Intern and store it in a variable
            const intern3 = new Intern("damien", 123, "damienluzzo33@gmail.com", "UC Santa Barbara");
            // use the getId() method and store result in variable
            const result = intern3.getId();
            // make sure the result returned is correct
            expect(result).toEqual(123);
        })
    })
    // test the getEmail method
    describe("getEmail", () => {
        // should return the email property as defined in constructor
        it("should return email of the Intern instance that was created", () => {
            // make instance of Intern and store it in a variable
            const intern4 = new Intern("damien", 123, "damienluzzo33@gmail.com", "UC Santa Barbara");
            // use the getEmail() method and store result in variable
            const result = intern4.getEmail();
            // make sure the result returned is correct
            expect(result).toEqual("damienluzzo33@gmail.com");
        })
    })
    // test the getRole method
    describe("getRole", () => {
        // should return the string "Intern"
        it("should return 'Intern'", () => {
            // make instance of Intern and store it in a variable
            const intern5 = new Intern("damien", 123, "damienluzzo33@gmail.com", "UC Santa Barbara");
            // use the getRole() method and store result in variable
            const result = intern5.getRole();
            // make sure the result returned is correct
            expect(result).toEqual("Intern");
        })
    })
    // test the getSchool method
    describe("getSchool", () => {
        // should return name of school as defined in constructor
        it("should return school of the Intern instance that was created", () => {
            // make instance of Intern and store it in a variable
            const intern6 = new Intern("damien", 123, "damienluzzo33@gmail.com", "UC Santa Barbara");
            // use the getSchool() method and store result in variable
            const result = intern6.getSchool();
            // make sure the result returned is correct
            expect(result).toEqual("UC Santa Barbara");
        })
    })
})