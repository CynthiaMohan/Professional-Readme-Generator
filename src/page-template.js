module.exports = (data) => {
    return `
# ${data.title}


## Table of Contents 

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation
${data.install}

## Usage 
${data.usage}

## Credits
${data.credits}

## License
[${data.License}](https://choosealicense.com/licenses/${data.License})

`;
};