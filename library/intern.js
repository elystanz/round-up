// use general.js to bring in constructor, expand upon that for manager
const Employee = require('./general');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "Intern";
    }
};

module.exports = Intern;