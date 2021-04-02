// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (!license) {
        console.log("No license was selected");
        return '';
    }
    else {
        for (let i = 0; i < license.length; i++) {
            const licenseBadge = license[i];
            console.log(licenseBadge);
            return `
## License
![badmath](https://img.shields.io/static/v1?label=license&message=${licenseBadge}&color=green)
  
    `;
        }
    }
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
[${data.License}](https://choosealicense.com/licenses/${data.License})

## Contributing
* [${data.credits}](https://github.com/${data.credits})


[Contributor Covenant](https://www.contributor-covenant.org/)

## Tests

## Questions

`;
};