// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./src/page-template');
// TODO: Create an array of questions for user input
const questions = [
    {
        //Github Username
        type: 'input',
        name: 'githubname',
        message: 'What is your github username? (Required)',
        validate: username => {
            if (username) {
                return true;
            }
            else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    {
        //Title of Project/readme
        type: 'input',
        name: 'title',
        message: 'What is the title of the Project? (Required)',
        validate: title => {
            if (title) {
                return true;
            }
            else {
                console.log("Please enter a title for your Readme.");
                return false;
            }
        }
    },
    {
        //Installation
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
    },
    {
        //Usage 
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of your project',
    },
    {
        //Credits
        type: 'input',
        name: 'credits',
        message: 'Please list your collaborators (if any) with their github links',
    },
    {
        //License
        type: 'checkbox',
        name: 'License',
        message: 'Please choose a license:',
        choices: ['agpl-3.0', 'gpl-3.0', 'lgpl-3.0', 'mpl-2.0', 'apache-2.0', 'mit', 'bsl-1.0', 'unlicense']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(userAnswers => {
            console.log(userAnswers);
            const pageReadme = generateReadme(userAnswers);
            fs.writeFile('./Readme.md', pageReadme, err => {
                if (err) {
                    throw new Error(err);
                }
                console.log('Readme created!');
            })
        })
        .catch(err => {
            if (err) {
                console.log(err);
            }
        });
}

// Function call to initialize app
init();