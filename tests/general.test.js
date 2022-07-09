const Employee = require("../library/general");

describe("Employee", () => {
    describe("Employee creation", () => {
        it("Creates an employee object with a name, ID, and email", () => {
            const employee = new Employee("Amber Gray", 1, "amber@company.com");

            expect(employee).toBeInstanceOf(Employee);
            expect(employee.name).toEqual("Amber Gray");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("amber@company.com");
        });
    });
});