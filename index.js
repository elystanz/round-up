// required modules
const inquirer = require('inquirer');
const fs = require('fs');

// profile library
const theManager = require('./library/managers')


// consolidate team into array
const theTeam = [];

const manager = () => {
    inquirer.prompt([
        {
           type: 'input',
           name: 'name',
           message: 'Enter manager name' 
        },

        {
            type: 'input',
            name: 'id',
            message: 'Enter manager ID'
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter manager e-mail'
        },

        {
            type: 'input',
            name: 'office',
            message: 'Enter manager office number'
        }
    ])
    .then(addManager => {
        const {name, id, email, office} = addManager;
        const newManager = new theManager (name, id, email, office);
        theTeam.push(newManager);
    });
};

const addEmployees = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Please select employee role',
            choices: 
                [
                'engineer',
                'intern',
                'finish building team'
                ]
        },

        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name'
        },

        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID'
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email'
        },

        {
            type: 'input',
            name: 'gitHub',
            message: 'Enter employee GitHub username',
                when: (input) => input.role === 'engineer'
        },

        {
            type: 'input',
            name: 'school',
            message: 'Enter intern school',
                when: (input) => input.role === 'intern' 
        }

    ]).then(teamData => {
        let{name, id, email, role, gitHub, school} = teamData;

        if (role === 'engineer') {
            employee = new eningeer (name, id, email, gitHub);
        } else if (role === 'intern') {
            employee = new intern (name, id, email, school)
        } else if (role === 'finish building team') {
            return theTeam;
        }

        let employee;
        theTeam.push(employee);
    });
};

// write the inputted data to dynamic HTML, return error if not written
const writeHTML = teamData => {
    fs.writeHTML('./DIST/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team profile generated!")
        }
    });
};

manager();