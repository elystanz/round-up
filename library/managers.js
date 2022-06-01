// use general.js to bring in constructor, expand upon that for manager
const Employee = require('./general');

class Manager extends Employee {
    constructor (name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }

    getRole () {
        return "Manager";
    }
};

module.exports = Manager;