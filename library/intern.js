// use general.js to bring in constructor, expand upon that for manager
const general = require('./general');

class intern extends general {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "intern";
    }
};

module.exports = intern;