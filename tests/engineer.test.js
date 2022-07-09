const Employee = require("../library/general");
const Engineer = require("../library/engineer");

describe("Engineer", () => {
    describe("Engineer creation", () => {
        it("Creates an engineer object with a name, ID, email, and github", () => {
            const engineer = new Engineer("Amber Gray", 1, "amber@company.com", "ambgcodes");

            expect(engineer).toBeInstanceOf(Engineer);
            expect(engineer.name).toEqual("Amber Gray");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("amber@company.com");
            expect(engineer.github).toEqual("ambgcodes");
        });
    });
});