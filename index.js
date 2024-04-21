// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your project'
    },
    {
        type: 'list',
        name: 'License',
        message: 'Enter the license for your project',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'Mozilla Public License 2.0', 'BSD 3-Clause', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter any other contributors to your project'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe any tests you ran on the project'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your Github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    },
];

// TODO: Create a function to write README file
function writeToFile(README, data) {
    const content = generateMarkdown(data);

    fs.writeFile(README, content, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md file has been successfully created!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();
