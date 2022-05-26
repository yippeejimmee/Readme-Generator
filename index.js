// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//brings in the inquirer npm for use

const fs = require('fs');
//brings in the fs npm for use

const generateMarkdown = require('./utils/generateMarkdown')
//includes the generateMarkdown file which contains the badge creation method and the method to create markdown for file

// TODO: Create an array of questions for user input

//the list of all the questions 
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
        //stores the string README.md in filename variable

        fs.writeFile(filename, generateMarkdown(data), (err) => err ? console.log(err) : console.log('Success!'))
        //takes the data from the inquirer and performs writefile to create a file with the name README.md
        //passes in data from the inquirer into the generateMarkdown method to create the markdown of the file
        //if there is an error, will throw the error, else it will console log success
    });