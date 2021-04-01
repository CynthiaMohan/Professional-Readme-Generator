//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username (Required) :',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('Please enter your github username.');
                    return false;
                }
            }
        },
    ]);
}

//Create a function to write README file
// function writeToFile(fileName, data) {
//     const readmeData=generatePage();
//     fs.writeFile('./Readme.md', readmeData, err => {
//         if (err) throw new Error(err);
//         console.log('Page created! Check out Readme.md in this directory to see it!');
//     })
// }

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
