// use general.js to bring in constructor, expand upon that for manager
const general = require('/general');

class manager extends general {
    constructor (name, id, email, office) {
        super(name, id, email);

        this.office = office;
    }
};

module.exports = manager;