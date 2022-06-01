// use general.js to bring in constructor, expand upon that for engineer
const Employee = require('./general');

class Engineer extends Employee {
    constructor (name, id, email) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGit () {
        return this.gitHub;
    }

    getRole () {
        return "Engineer";
    }
};

module.exports = Engineer;