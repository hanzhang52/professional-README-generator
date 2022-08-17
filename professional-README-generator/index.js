// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title for this project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description for this project?",
    },
    {
      type: "input",
      name: "installations",
      message: "Are there any installations required?",
    },
    {
      type: "input",
      name: "usage",
      message: "How will this project be used?",
    },
    {
      type: "input",
      name: "projectTitle",
      message: "What is your project name?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description for this project?",
    },
    {
      type: "checkbox",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "None"],
    },
    {
      type: "input",
      name: "dependencies",
      message: "What command should be run to install the dependencies?",
      default: "npm i",
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
      default: "npm test",
    },
    {
      type: "input",
      name: "use",
      message: "What does the user need to know about using the repo?",
    },
    {
      type: "input",
      name: "contribution",
      message: "Are there any contributors to this project?",
    },
  ]) // TODO: Create a function to write README file
  .then((userInput) => {
    const readmeContent = generateMarkdown.generateMarkdown(userInput);

    fs.writeFile("README.md", readmeContent, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
