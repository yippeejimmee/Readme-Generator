// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input


inquirer
    .prompt([{
            type: 'input',
            name: 'username',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: "Describe your project."
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How do you run tests on your application?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'What does user need to know about contributing to the repo?',
        },
        {
            type: 'input',
            name: 'credit',
            message: 'Is there anyone you want to thank?',
        },
    ])
    .then((data) => {
        const filename = "README.md";
        fs.writeFile(filename, generateMarkdown(data), (err) => err ? console.log(err) : console.log('Success!'))
    });

// const questions = [

// ];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('README.md', generateMarkdown(data))
// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();