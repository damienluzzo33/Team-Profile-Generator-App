const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Init", () => {
        it("should create an instance of an Manager object when we call it with the new keyword", () => {
            const manager1 = new Manager("damien", 123, "damienluzzo33@gmail.com", 990);
            expect(manager1.name).toEqual("damien");
            expect(manager1.id).toEqual(123);
            expect(manager1.email).toEqual("damienluzzo33@gmail.com");
            expect(manager1.officeNum).toEqual(990);
        })
    })
    
    describe("getName", () => {
        it("should return the name of the manager instance that was created", () => {
            const manager2 = new Manager("damien", 123, "damienluzzo33@gmail.com", 990);
            const result = manager2.getName();
            expect(result).toEqual("damien");
        })
    })

    describe("getId", () => {
        it("should return ID of the manager instance that was created", () => {
            const manager3 = new Manager("damien", 123, "damienluzzo33@gmail.com", 990);
            const result = manager3.getId();
            expect(result).toEqual(123);
        })
    })

    describe("getEmail", () => {
        it("should return email of the manager instance that was created", () => {
            const manager4 = new Manager("damien", 123, "damienluzzo33@gmail.com", 990);
            const result = manager4.getEmail();
            expect(result).toEqual("damienluzzo33@gmail.com");
        })
    })

    describe("getRole", () => {
        it("should return 'Manager'", () => {
            const manager5 = new Manager("damien", 123, "damienluzzo33@gmail.com", 990);
            const result = manager5.getRole();
            expect(result).toEqual("Manager");
        })
    })
})