// use general.js to bring in constructor, expand upon that for engineer
const general = require('./general');

class engineer extends general {
    constructor (name, id, email) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGit () {
        return this.gitHub;
    }

    getRole () {
        return "engineer";
    }
};

module.exports = engineer;