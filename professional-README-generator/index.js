const questions = require("./questions");
const { writeFile } = require("./generateFile");
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  console.error(questions);
  writeFile();
}

// Function call to initialize app
init();
