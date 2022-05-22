const inquirer = require('inquirer');
const fs = require('fs');

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
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
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
        console.log(filename);
        console.log(data);
        fs.writeFile(filename, `
# ${data.title}

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

        
        `, (err) =>
            err ? console.log(err) : console.log('Success!'))

    })
