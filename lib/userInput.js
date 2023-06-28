const inquirer = require('inquirer');

async function getUserInput() {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter 3 letters of text for your logo:',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color for the text:',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for your logo:',
        choices: ['Circle', 'Triangle', 'Square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color for the shape:',
      },
    ]);
  
    return userInput;
  }

  module.exports = getUserInput;

  