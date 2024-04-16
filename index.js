// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Enter a description of your project'
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Enter a table of contents for your project'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Describe how to install your project'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Describe how to use your project'
    },
    {
        type: 'input',
        name: 'License',
        message: 'Enter the license for your project'
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Enter any other contributors to your project'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Describe any tests you ran on the project'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Enter your Github username'
    },
];

// TODO: Create a function to write README file
function writeToFile(README.md, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
