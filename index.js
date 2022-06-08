// required modules
const inquirer = require('inquirer');
const fs = require('fs');
const generatedHTML = require('./generated-cards/generatedHTML');

// profile library
const Manager = require('./library/managers');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');

// set team into an array
const teamArray = [];

// set questions for each employee type
const managerQ = [
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
]

const employeeQ = [
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
    }
];

const engineerQ = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter engineer name'
    },

    {
        type: 'input',
        name: 'id',
        message: 'Enter engineer ID'
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter engineer email'
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter engineer GitHub username',
            // when: (input) => input.role === 'engineer'
    }
];

const internQ = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter intern name'
    },

    {
        type: 'input',
        name: 'id',
        message: 'Enter intern ID'
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter intern email'
    },

    {
        type: 'input',
        name: 'school',
        message: 'Enter intern school',
            // when: (input) => input.role === 'intern' 
    }
];

async function setTeam() {
    await inquirer.prompt(managerQ).then(async(answers) => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.office
        );

        teamArray.push(manager);
        
        let employeeType
        while (employeeType != 'finish building team') {
            await inquirer.prompt(employeeQ).then(async(answer) => {
                employeeType = answer.role;
                
                if (employeeType === 'engineer') {
                    await inquirer.prompt(engineerQ).then(async(answers) => {
                        const engineer = new Engineer(
                            answers.name,
                            answers.id,
                            answers.email,
                            answers.github
                        );
                        teamArray.push(engineer);
                    });
                } if (employeeType === 'intern') {
                    await inquirer.prompt(internQ).then(async(answers) => {
                        const intern = new Intern(
                            answers.name,
                            answers.id,
                            answers.email,
                            answers.school
                        );
                        teamArray.push(intern);
                    });
                }
            });
        }
    });

    const data = generatedHTML(teamArray)
    fs.writeFile('index.html', data, (error) => {
        if (error) {
            return console.error('An error has occurred!');
        } else console.log('Success!')
    });
};

setTeam();