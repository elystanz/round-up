// a general database to hold employee information -- other profiles will extend this one
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    generalName () {
        return this.name;
    }

    generalId () {
        return this.id;
    }

    generalEmail () {
        return this.email;
    }

};

module.exports = Employee;