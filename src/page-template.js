// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    let licenseStr = '';
    if (!license) {
        console.log("No license was selected");
        return '';
    }
    else {
        for (let i = 0; i < license.length; i++) {
            const licenseBadge = license[i];
            // console.log(licenseBadge);
            licenseStr += `
![badmath](https://img.shields.io/static/v1?label=license&message=${licenseBadge}&color=green)`;
        }
    }
    return (licenseStr);
}

// a function that returns the license link
function renderLicenseLink(license) {
    let licenseStr = '';
    if (!license) {
        console.log("No license was selected");
        return '';
    }
    else {
        for (let i = 0; i < license.length; i++) {
            const licenseLink = license[i];
            // console.log(licenseLink);
            licenseStr += `
[${licenseLink}](https://choosealicense.com/licenses/${licenseLink})
<br />`;
        }
    }
    return (licenseStr);
}

//function checking for any credits
function contributing(credit) {
    let creditstr = credit.split(' ');
    let retStr = '';
    // console.log(creditstr);
    if (!credit) {
        console.log("No credits");
        return '';
    }
    else {
        for (let i = 0; i < creditstr.length; i++) {
            retStr += `
* ${creditstr[i]}<br />`;
        }

    }
    return (retStr);
}

//function generating badges for technologies used
function tech(technologiesUsed) {
    let techStr = '';
    if (!technologiesUsed) {
        console.log("No tech was selected");
        return '';
    }
    else {
        for (let i = 0; i < technologiesUsed.length; i++) {
            const techBadge = technologiesUsed[i];
            console.log(techBadge);
            techStr += `
![badmath](https://img.shields.io/static/v1?label=tech&message=${techBadge}&color=informational)`;
        }
    }
    return (techStr);
}

const markdown = require('../utils/generateMarkdown');

module.exports = data => {
    return `
# ${data.title}

${renderLicenseBadge(data.License)}
${tech(data.tech)}

## Description
${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${data.install}

## Usage 
${data.usage}

## License

This Application is covered under : 
${renderLicenseLink(data.License)}


## Contributing
${contributing(data.credits)}


[Contributor Covenant](https://www.contributor-covenant.org/)

## Tests

## Questions
View my Github Profile at [${data.githubname}](http://github.com/${data.githubname})
<br />
Reach me with more questions <${data.email}>


`;
};