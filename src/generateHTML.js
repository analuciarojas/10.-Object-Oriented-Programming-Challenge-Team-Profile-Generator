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