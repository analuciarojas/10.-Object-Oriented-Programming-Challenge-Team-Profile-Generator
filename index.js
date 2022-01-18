// Link to HTML page generator
const generateHTML = require('./src/generateHTML');

// Link to profiles 
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// Packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer');

const teamArray=[];

// Adding managers info 

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager\'s name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the manager\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team manager\'s id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the manager\'s id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager\'s email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the manager\'s email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager\'s office number?',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log('Please enter the manager\'s office number!');
                    return false;
                }
            }
        },
        // List prompt to ask if their is going to be another team member 
        {
            type: 'list',
            name: 'newMember',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'No more team members'],
        }
    ]).then(managerInfo => {

        // Saving manager information 
        const manager = new Manager (managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
        // Pushing this information to team array 
        teamArray.push(manager); 
        // If statements to see which function is going next 

        if(managerInfo.newMember=='Engineer'){
            engineerQuestions();
        }
        else if(managerInfo.newMember=='Intern'){
            internQuestions();
        }
        else{
            writeToFile('dist/index.html', generateHTML(teamArray));
        }
    })
};

// Adding engineer info

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer\'s id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer\'s email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s GitHub username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer\'s GitHub username!');
                    return false;
                }
            }
        },
        
        // List prompt to ask if their is going to be another team member 
        {
            type: 'list',
            name: 'newMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'No more team members'],
        }
    ])
    .then((engineerInfo) => {

        // Saving engineer information 
        const engineer = new Engineer(engineerInfo.id, engineerInfo.name, engineerInfo.email, engineerInfo.github);
        // Pushing this information to team array 
        teamArray.push(engineer);

        // If statements to see which function is going next 
        if(engineerInfo.newMember=='Engineer'){
            engineerQuestions();
        }
        else if(engineerInfo.newMember=='Intern'){
            internQuestions();
        }
        else{
            writeToFile('dist/index.html', generateHTML(teamArray));
        }
    })
};

// Adding intern info 

const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the intern\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the intern\'s id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the intern\'s email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s School?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the intern\'s School!');
                    return false;
                }
            }
        },
        
        // List prompt to ask if their is going to be another team member 
        {
            type: 'list',
            name: 'newMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'No more team members'],
        }
    ])
    .then((internInfo) => {

        // Saving engineer information 
        const intern = new Engineer(internInfo.id, internInfo.name, internInfo.email, internInfo.school);
        // Pushing this information to team array 
        teamArray.push(intern);

        // If statements to see which function is going next 
        if(internInfo.newMember=='Engineer'){
            engineerQuestions();
        }
        else if(internInfo.newMember=='Intern'){
            internQuestions();
        }
        else{
            writeToFile('dist/index.html', generateHTML(teamArray));
        }
    })
};

// Function to initialize program 

managerQuestions();

// Function to write HTML file

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file saved')
    });
};