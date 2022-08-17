// TODO: Create a function that returns a license badge based on which license is passed in
let renderLicenseBadge = (license) => {
  // console.log(license)
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";

    case "Apache 2.0":
      return "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-yellow.svg)";

    case "BSD-3-Clause":
      return "![License: BSD-3](https://img.shields.io/badge/License-BSD%203--Clause-yellow.svg)";

    case "GPLv3":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-yellow.svg)";

    default:
      return "";
  }
};

// TODO: Create a function that returns the license link
let renderLicenseLink = (license) => {
  if (license !== "none") {
    return "![LicenseLink](#license)";
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license section of README
let renderLicenseSection = (license) => {
  switch (license) {
    case "MIT":
      return "License \n [MIT](https://choosealicense.com/licenses/mit/)";

    case "Apache 2.0":
      return "License \n [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)";

    case "BSD-3-Clause":
      return "License \n [BSD-3-Clause](https://choosealicense.com/licenses/bsd-3-clause-clear/)";

    case "GPLv3":
      return "License \n [GPLv3](https://www.gnu.org/licenses/gpl-3.0)";
    default:
      return "";
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (userInput) => {
  // console.log(userInput.dependencies);
  return `# ${userInput.projectTitle} 
   
# ${renderLicenseBadge(userInput.license[0])}

#### Table of Contents:
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contribution](#contribution)
6. [Tests](#tests)
7. [Questions](#questions)

### Description
* ${userInput.description}
### Installation
* ${userInput.dependencies}
### Usage 
* ${userInput.use}
### License
* ${renderLicenseSection(userInput.license[0])} 
### Contribution
* ${userInput.contribution}
### Tests
* ${userInput.test}

## Questions
* ${userInput.contribution}`;
};

module.exports = {
  generateMarkdown,
  renderLicenseLink,
  renderLicenseBadge,
  renderLicenseSection,
};
