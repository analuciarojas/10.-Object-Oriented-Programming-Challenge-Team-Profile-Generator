const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

// Generate manager card HTML section

const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header" id="card-header">
                <h3 id="h3">${manager.name}</h3>
                <h4 id="h4">Manager</h4><i class="material-icons" id="i">local_cafe</i>
            </div>
            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// Generate engineer card HTML section 

const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
        <div class="card-header" id="card-header">
            <h3 id="h3">${engineer.name}</h3>
                <h4 id="h4">Engineer</h4><i class="material-icons" id="i">engineering</i>
            </div>
            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

// Generate intern card HTML section 

const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header" id="card-header">
                <h3 id="h3">${intern.name}</h3>
                <h4 id="h4">Intern</h4><i class="material-icons" id="i">school</i>
            </div>
            <div class="card-body">
                <p>ID: ${intern.id}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}


// Generating corresponding data to corresponding employee

generateHTML = (data) => {

    // Array for each employee

    eachEmployee = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // If your role is the manager push the information and call to generate HTML card 

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            eachEmployee.push(managerCard);
        }

        // If your role is the engineer push the information and call to generate HTML card 

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            eachEmployee.push(engineerCard);
        }

        // If your role is intern push the information and call to generate HTML card 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            eachEmployee.push(internCard);
        }
    }

    // Create a string
    const employeeCards = eachEmployee.join('')
    // Go to the base page to then generate each one of the cards 
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// It generates HTML structure and calls for employee cards function 
const generateTeamPage = function (employeeCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;600&display=swap" rel="stylesheet">   
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="title">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    <!--This is where the employee cards go -->
                    ${employeeCards}
                </div>
            </div>
        </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
  `;
  }

  
module.exports = generateHTML; 