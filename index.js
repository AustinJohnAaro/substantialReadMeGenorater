// TODO: Include packages needed for this application
let inquirer = require("inquirer");
let fs = require("fs");
let util = require("util");

// Links to README template 

let ReadMeGenerator = require('./src/ReadMeTemplate');
let ReadMeGenerator = require('./src/ReadMeTemplate');
let createFile = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
let promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'username',
            message:'Enter GitHub username:'

        },
        {
            type:'input',
            name:'Project title',
            message:'What is the project title?'
        },
        {
            type:'input',
            name:'description',
            message:'Describe the project:'
        },
        {
            type:'input',
            name:'installation',
            message:'What are the steps required toinstall your project?'
        },
        {
            type:'input',
            name:'usage',
            message:'Provide instructions and examples for use. Include screenshots as needed:'
            
        },
        {
            type:'input',
            name:'installation',
            message:'What are the steps required toinstall your project?',
            choices: ['GNU AGPL', 'GNU LGPL', 'Mozilla', 'Apache', 'MIT', 'Boost Software']
        },
        {
            type:'input',
            name:'features',
            message:'List project features/languages:',
        }

        
    ])
};
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    try{
        let data = await promptUser();
        let createContent = ReadMeTemplate(data);

        await createFile('./dist/README.md', createContent);
        console.log('Successfully created README.md');
    } catch(err) {
        console.log(err);
    }
};

// Function call to initialize app
init();
