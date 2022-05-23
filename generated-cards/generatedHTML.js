// create cards for manager, engineer, and intern to be created on the page once inputted
const managerCard = (manager) => {
    return `
    <div class = "col mb-4">
        <div class = "card">
            <div class = "card-header">
                <p>${manager.name}</p>
                <p>Manager</p>
            </div>

            <div class = "card-body">
                <p class = "id"> id: ${manager.id}</p>
                <p class = "email"> e-mail: ${manager.email}</p>
                <p class = "office"> office: ${manager.office}</p>
            </div>
        </div>
    </div>
    `;
}

const engineerCard = (engineer) => {
    return `
    <div class = "col mb-4">
        <div class = "card">
            <div class = "card-header">
                <p>${engineer.name}</p>
                <p>Manager</p>
            </div>

            <div class = "card-body">
                <p class = "id"> id: ${engineer.id}</p>
                <p class = "email"> e-mail: ${engineer.email}</p>
                <p class = "gitHub"> github: ${engineer.gitHub}</p>
            </div>
        </div>
    </div>
    `;
}

const internCard = (intern) => {
    return `
    <div class = "col mb-4">
        <div class = "card">
            <div class = "card-header">
                <p>${intern.name}</p>
                <p>Manager</p>
            </div>

            <div class = "card-body">
                <p class = "id"> id: ${intern.id}</p>
                <p class = "email"> e-mail: ${intern.email}</p>
                <p class = "school"> school: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}