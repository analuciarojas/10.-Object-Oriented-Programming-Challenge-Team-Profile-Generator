const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

// Generate manager card HTML section

const generateManager = function (manager) {
    return `
    <div>
        <div>
            <div>
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i></i>
            </div>
            <div>
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
    <div>
        <div>
            <div>
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i></i>
            </div>
            <div>
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
    <div>
        <div>
            <div>
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i></i>
            </div>
            <div>
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
    </head>
    <body>
        <header>
            <nav>
                <span >Team Profile</span>
            </nav>
        </header>
        <main>
            <div>
                <div>
                    <!--This is where the employee cards go -->
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
    </html>
  `;
  }

  
module.exports = generateHTML; 