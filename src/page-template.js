//function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    let licenseStr = '';
    if (!license) {
        console.log("No license was selected");
        return '';
    }
    else {
        for (let i = 0; i < license.length; i++) {
            const licenseBadge = license[i];
            console.log(licenseBadge);
            licenseStr += `
![badmath](https://img.shields.io/static/v1?label=license&message=${licenseBadge}&color=green)`;
        }
    }
    return (licenseStr);
}
function renderLicenseLink(license) {
    let licenseStr = '';
    if (!license) {
        console.log("No license was selected");
        return '';
    }
    else {
        for (let i = 0; i < license.length; i++) {
            const licenseLink = license[i];
            console.log(licenseLink);
            licenseStr += `
[${licenseLink}](https://choosealicense.com/licenses/${licenseLink})
<br />`;
        }
    }
    return (licenseStr);
}


module.exports = data => {
    return `
# ${data.title}

${renderLicenseBadge(data.License)}

## Description
${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${data.install}

## Usage 
${data.usage}

## License

<br />
This Application is covered under : 
${renderLicenseLink(data.License)}


## Contributing
* [${data.credits}](https://github.com/${data.credits})


[Contributor Covenant](https://www.contributor-covenant.org/)

## Tests

## Questions
View my Github Profile at [${data.githubname}](http://github.com/${data.githubname})
<br />
Reach me with more questions <${data.email}>


`;
};