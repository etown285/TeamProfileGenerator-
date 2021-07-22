const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Can set name via constructor arguments", () => {
        const name = "Steven";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Can set id via constructor argument", () => {
        const testValue = 100;
        const e = new Employee("Steven", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Can set email via constructor argument", () => {
        const testValue = "StevenPaul@test.com";
        const e = new Employee("Steven", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Steven";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 100;
            const e = new Employee("Steven", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "StevenPaul@test.com";
            const e = new Employee("Steven", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("steven", 1, "StevenPaul@test.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});