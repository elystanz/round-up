// create cards for manager, engineer, and intern to be created on the page once inputted
function teamGenerator(team) {
    return team.map((employee) => {
        if (employee.getRole() === 'Manager') {
            return `
            <div class = "col mb-4">
                <div class = "card">
                    <div class = "card-header">
                        <p>${employee.generalName}</p>
                        <p>Manager</p>
                    </div>
        
                    <div class = "card-body">
                        <p class = "id"> id: ${employee.generalId}</p>
                        <p class = "email"> e-mail: ${employee.generalEmail}</p>
                        <p class = "office"> office: ${employee.office}</p>
                    </div>
                </div>
            </div>`
        } else if (employee.getRole() === 'Engineer') {
            return `
            <div class = "col mb-4">
                <div class = "card">
                    <div class = "card-header">
                        <p>${employee.generalName}</p>
                        <p>Manager</p>
                    </div>
        
                    <div class = "card-body">
                        <p class = "id"> id: ${employee.generalId}</p>
                        <p class = "email"> e-mail: ${employee.generalEmail}</p>
                        <p class = "gitHub"> github: ${employee.getGit}</p>
                    </div>
                </div>
            </div>`
        } else if (employee.getRole() === 'Intern') {
            return `
            <div class = "col mb-4">
                <div class = "card">
                    <div class = "card-header">
                        <p>${employee.generalName}</p>
                        <p>Manager</p>
                    </div>

                    <div class = "card-body">
                        <p class = "id"> id: ${employee.generalId}</p>
                        <p class = "email"> e-mail: ${employee.generalEmail}</p>
                        <p class = "school"> school: ${employee.getSchool}</p>
                    </div>
                </div>
            </div>`
        }
    });
}

function generatedHTML(team) {
    return `
    <DOCTYPE! html>
    <html lang='en'>
        <head>
            <meta charset='UTF-8'
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <meta name='viewport' content='width=<device-width>, initial-scale=1.0'>
            <title>Employee Round Up!</title>
            <link href='./style.css' rel='stylesheet'>
        </head>
        <body>
            <header>
                My Team
            </header>

            <div class='team'>
                ${teamGenerator(team)}
            </div>
        </body>
    </html>
    `
};

module.exports = generatedHTML;