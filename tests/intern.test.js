const Employee = require("../library/general");
const Intern = require("../library/intern");

describe("intern", () => {
    describe("intern creation", () => {
        it("Creates an intern object with a name, ID, email, and school", () => {
            const intern = new Intern("Amber Gray", 1, "amber@company.com", "SAE");

            expect(intern).toBeInstanceOf(Intern);
            expect(intern.name).toEqual("Amber Gray");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("amber@company.com");
            expect(intern.school).toEqual("SAE");
        });
    });
});