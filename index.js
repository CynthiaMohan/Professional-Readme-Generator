//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = information => {
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
                    console.log('Please enter you name.')
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
        {
            type: 'input',
            name: 'project',
            message: 'Enter project title (Required):',
            validate: title => {
                if (title) {
                    return true;
                }
                else {
                    console.log('Please enter the project title.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your project about?',
            validate: description => {
                if (description) {
                    return true;
                }
                else {
                    console.log('Please enter a description about your Project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How should your project be installed?',
            validate: install => {
                if (install) {
                    return true;
                }
                else {
                    console.log('Please enter installation instructions for your Project.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'usageInfo',
            message: 'Would you like to enter usage information:',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information:',
            when: ({ usageInfo }) => usageInfo
        },
        {
            type: 'checkbox',

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
    questions().then(information => {
        console.log(information);
    });

}

// Function call to initialize app
init();
