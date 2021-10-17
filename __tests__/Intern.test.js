const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Init", () => {
        it("should create an instance of an intern object when we call it with the new keyword", () => {
            const intern1 = new Intern("damien", 123, "damienluzzo33@gmail.com", "UC Santa Barbara");
            expect(intern1.name).toEqual("damien");
            expect(intern1.id).toEqual(123);
            expect(intern1.email).toEqual("damienluzzo33@gmail.com");
            expect(intern1.school).toEqual("UC Santa Barbara");
        })
    })
    
    describe("getName", () => {
        it("should return the name of the intern instance that was created", () => {
            const intern2 = new Intern("damien", 123, "damienluzzo33@gmail.com", "UC Santa Barbara");
            const result = intern2.getName();
            expect(result).toEqual("damien");
        })
    })

    describe("getId", () => {
        it("should return ID of the intern instance that was created", () => {
            const intern3 = new Intern("damien", 123, "damienluzzo33@gmail.com", "UC Santa Barbara");
            const result = intern3.getId();
            expect(result).toEqual(123);
        })
    })

    describe("getEmail", () => {
        it("should return email of the Intern instance that was created", () => {
            const intern4 = new Intern("damien", 123, "damienluzzo33@gmail.com", "UC Santa Barbara");
            const result = intern4.getEmail();
            expect(result).toEqual("damienluzzo33@gmail.com");
        })
    })

    describe("getRole", () => {
        it("should return 'Intern'", () => {
            const intern5 = new Intern("damien", 123, "damienluzzo33@gmail.com", "UC Santa Barbara");
            const result = intern5.getRole();
            expect(result).toEqual("Intern");
        })
    })

    describe("getSchool", () => {
        it("should return school of the Intern instance that was created", () => {
            const intern6 = new Intern("damien", 123, "damienluzzo33@gmail.com", "UC Santa Barbara");
            const result = intern6.getSchool();
            expect(result).toEqual("UC Santa Barbara");
        })
    })
})