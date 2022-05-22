const inquirer = require('inquirer');
const fs = require('fs');

const manager = () => {
inquirer
    .prompt([
        {
           type: 'input',
           name: 'name',
           message: 'Enter Manager Name' 
        },

        {
            type: 'input',
            name: 'id',
            message: 'Enter Manager ID'
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter Manager E-mail'
        },

        {
            type: 'input',
            name: 'office',
            message: 'Enter Manager Office Number'
        }
    ])
    .then(addManager => {
        const newManager = `${addManager.name
        .split(' ')
        .join('')}.json`;

        fs.writeFile(newManager, JSON.stringify(addManager, null, '\t'), err =>
        err ? console.log(err) : console.log('Manager added!')
        )});
    };

manager();