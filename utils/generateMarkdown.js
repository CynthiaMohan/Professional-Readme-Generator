// const fs = require(fs);
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (!license) {
//     console.log("No license was selected");
//     return '';
//   }

//   return `
//     ## License


// ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

//   `;
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// // TODO: Create a function to generate markdown for README
// const generateMarkdown = (data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('./dist/Readme.md', data, err => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve({
//         ok: true,
//         message: 'File Created'
//       })
//     })
//   })

// }

// module.exports = generateMarkdown;
