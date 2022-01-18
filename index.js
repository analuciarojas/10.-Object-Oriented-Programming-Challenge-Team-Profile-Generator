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
            choices: ['Engineer', 'Intern', 'I don\'t want to add any more teamArray members'],
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

// Function to initialize program 

managerQuestions();

// Function to write HTML file

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file saved')
    });
};