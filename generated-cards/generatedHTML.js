// create cards for manager, engineer, and intern to be created on the page once inputted
function teamGenerator(team) {
    return team.map((employee) => {
        if (employee.getRole() === 'Manager') {
            return `
            <div class="row d-flex justify-content-center m-2">
                <div class="card m-3" style="width: 20rem;">
                    <div class="card-body">
                        <h5 class="card-title">Manager: ${employee.generalName}</h5>
                        <h6 class="card-subtitle mb-2 email">e-mail: ${employee.generalEmail}</h6>
                        <p class="card-text office">office: ${employee.office}</p>
                        <p class="card-text id">id: ${employee.generalId}</p>
                    </div>
                </div>
            </div>`
        } else if (employee.getRole() === 'Engineer') {
            return `
            <div class="row d-flex justify-content-center m-2">
                <div class="card m-3" style="width: 20rem;">
                    <div class="card-body">
                        <h5 class="card-title">Manager: ${employee.generalName}</h5>
                        <h6 class="card-subtitle mb-2 email">e-mail: ${employee.generalEmail}</h6>
                        <p class="card-text office">github: ${employee.getGit}</p>
                        <p class="card-text id">id: ${employee.generalId}</p>
                    </div>
                </div>
            </div>`
        } else if (employee.getRole() === 'Intern') {
            return `
            <div class="row d-flex justify-content-center m-2">
                <div class="card m-3" style="width: 20rem;">
                    <div class="card-body">
                        <h5 class="card-title">Manager: ${employee.generalName}</h5>
                        <h6 class="card-subtitle mb-2 email">e-mail: ${employee.generalEmail}</h6>
                        <p class="card-text office">school: ${employee.getSchool}</p>
                        <p class="card-text id">id: ${employee.generalId}</p>
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
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
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