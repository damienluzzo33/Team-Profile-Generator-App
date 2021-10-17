const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Init", () => {
        it("should create an instance of an engineer object when we call it with the new keyword", () => {
            const engineer1 = new Engineer("damien", 123, "damienluzzo33@gmail.com", "damienluzzo33");
            expect(engineer1.name).toEqual("damien");
            expect(engineer1.id).toEqual(123);
            expect(engineer1.email).toEqual("damienluzzo33@gmail.com");
            expect(engineer1.github).toEqual("damienluzzo33");
        })
    })
    
    describe("getName", () => {
        it("should return the name of the engineer instance that was created", () => {
            const engineer2 = new Engineer("damien", 123, "damienluzzo33@gmail.com", "damienluzzo33");
            const result = engineer2.getName();
            expect(result).toEqual("damien");
        })
    })

    describe("getId", () => {
        it("should return ID of the engineer instance that was created", () => {
            const engineer3 = new Engineer("damien", 123, "damienluzzo33@gmail.com", "damienluzzo33");
            const result = engineer3.getId();
            expect(result).toEqual(123);
        })
    })

    describe("getEmail", () => {
        it("should return email of the Engineer instance that was created", () => {
            const engineer4 = new Engineer("damien", 123, "damienluzzo33@gmail.com", "damienluzzo33");
            const result = engineer4.getEmail();
            expect(result).toEqual("damienluzzo33@gmail.com");
        })
    })

    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            const engineer5 = new Engineer("damien", 123, "damienluzzo33@gmail.com", "damienluzzo33");
            const result = engineer5.getRole();
            expect(result).toEqual("Engineer");
        })
    })

    describe("getGithub", () => {
        it("should return github username of the Engineer instance that was created", () => {
            const engineer6 = new Engineer("damien", 123, "damienluzzo33@gmail.com", "damienluzzo33");
            const result = engineer6.getGithub();
            expect(result).toEqual("damienluzzo33");
        })
    })

})