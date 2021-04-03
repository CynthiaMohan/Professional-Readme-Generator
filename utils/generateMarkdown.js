// // const fs = require(fs);
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   let licenseStr = '';
//   if (!license) {
//     console.log("No license was selected");
//     return '';
//   }
//   else {
//     for (let i = 0; i < license.length; i++) {
//       const licenseBadge = license[i];
//       console.log(licenseBadge);
//       licenseStr += `
// ![badmath](https://img.shields.io/static/v1?label=license&message=${licenseBadge}&color=green)`;
//     }
//   }
//   return (licenseStr);
// }


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let licenseStr = '';
//   if (!license) {
//     console.log("No license was selected");
//     return '';
//   }
//   else {
//     for (let i = 0; i < license.length; i++) {
//       const licenseLink = license[i];
//       console.log(licenseLink);
//       licenseStr += `
// [${licenseLink}](https://choosealicense.com/licenses/${licenseLink})
// <br />`;
//     }
//   }
//   return (licenseStr);
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }


// //function checking for any credits
// function contributing(credit) {
//   let creditstr = credit.split(' ');
//   let retStr = '';
//   console.log(creditstr);
//   if (!credit) {
//     console.log("No credits");
//     return '';
//   }
//   else {
//     for (let i = 0; i < creditstr.length; i++) {
//       retStr += `
// * ${creditstr[i]}<br />`;
//     }

//   }
//   return (retStr);
// }

// //function generating badges for technologies used
// function tech(technologiesUsed) {
//   let techStr = '';
//   if (!technologiesUsed) {
//     console.log("No tech was selected");
//     return '';
//   }
//   else {
//     for (let i = 0; i < technologiesUsed.length; i++) {
//       const techBadge = technologiesUsed[i];
//       console.log(techBadge);
//       techStr += `
// ![badmath](https://img.shields.io/static/v1?label=tech&message=${techBadge}&color=informational)`;
//     }
//   }
//   return (techStr);
// }
// // // TODO: Create a function to generate markdown for README
// // const generateMarkdown = (data) => {
// //   return new Promise((resolve, reject) => {
// //     fs.writeFile('./dist/Readme.md', data, err => {
// //       if (err) {
// //         reject(err);
// //         return;
// //       }
// //       resolve({
// //         ok: true,
// //         message: 'File Created'
// //       })
// //     })
// //   })

// // }


// module.exports = generateMarkdown;
