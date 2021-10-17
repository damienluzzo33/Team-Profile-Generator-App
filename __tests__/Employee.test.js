const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Init", () => {
        it("should create an instance of an Employee object when we call it with the new keyword", () => {
            const employee1 = new Employee("damien", 123, "damienluzzo33@gmail.com");
            expect(employee1.name).toEqual("damien");
            expect(employee1.id).toEqual(123);
            expect(employee1.email).toEqual("damienluzzo33@gmail.com");
        })
    })
    
    describe("getName", () => {
        it("should return the name of the employee instance that was created", () => {
            const employee2 = new Employee("damien", 123, "damienluzzo33@gmail.com");
            const result = employee2.getName();
            expect(result).toEqual("damien");
        })
    })

    describe("getId", () => {
        it("should return ID of the employee instance that was created", () => {
            const employee3 = new Employee("damien", 123, "damienluzzo33@gmail.com");
            const result = employee3.getId();
            expect(result).toEqual(123);
        })
    })

    describe("getEmail", () => {
        it("should return email of the employee instance that was created", () => {
            const employee4 = new Employee("damien", 123, "damienluzzo33@gmail.com");
            const result = employee4.getEmail();
            expect(result).toEqual("damienluzzo33@gmail.com");
        })
    })

    describe("getRole", () => {
        it("should return 'Employee'", () => {
            const employee5 = new Employee("damien", 123, "damienluzzo33@gmail.com");
            const result = employee5.getRole();
            expect(result).toEqual("Employee");
        })
    })
})