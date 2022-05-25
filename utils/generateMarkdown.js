// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else if (license === "MIT") {
    let licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    return licenseBadge
  } else if (license === "APACHE 2.0") {
    let licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    return licenseBadge
  } else if (license === "GPL 3.0") {
    let licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    return licenseBadge
  } else if (license === "BSD 3") {
    let licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    return licenseBadge
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license)
  return `
  # ${data.title}
  ${badge}
 
  ${data.description}

  ## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test](#test)
  - [Credits](#credits)
  - [License](#license)
  - [Contribute](#contribute)
  - [Questions](#questions)


  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Test

  If you would like to run some tests, please input the following command:
  ${data.test}

  ## Credits

  I would like to thank ${data.credit} for their support during the development of this application.

  ## License

  This project is licensed under ${data.license}.

  ## Questions

  If you have any questions, please direct them towards my email at ${data.email}.  
  You can find more of my work at github.com/${data.username}.

`;
}

module.exports = generateMarkdown;