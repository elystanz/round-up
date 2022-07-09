const Employee = require("../library/general");
const Manager = require("../library/managers");

describe("manager", () => {
    describe("manager creation", () => {
        it("Creates an manager object with a name, ID, email, and office", () => {
            const manager = new Manager("Amber Gray", 1, "amber@company.com", 13);

            expect(manager).toBeInstanceOf(Manager);
            expect(manager.name).toEqual("Amber Gray");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("amber@company.com");
            expect(manager.office).toEqual(13);
        });
    });
});