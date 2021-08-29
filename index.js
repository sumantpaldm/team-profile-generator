const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");

//local files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const resultFile = path.resolve(__dirname, "dist");
const finalPath = path.join(resultFile, "result.html")

const htmlTemplate = require("./src/template.js");
const { finished } = require("stream");

let team = [];




//manager info
const createManager = () => {
    console.log(`    ==========
    Input Manager's Info
    ==========`);
    inquirer
        .prompt([
            {
                type: "text",
                name: "name",
                message: "Enter your name (Required)",
                validate: (name) => {
                    if (name) {
                        return true;
                    } else {
                        console.log("Please enter your name!");
                        return false;
                    }
                },
            },
            {
                type: "text",
                name: "id",
                message: "Enter your employeed id (Required)",
                validate: (id) => {
                    if (id) {
                        return true;
                    } else {
                        console.log("Please enter your employee id!");
                        return false;
                    }
                },
            },
            {
                type: "text",
                name: "email",
                message: "Enter your email (Required)",
                validate: (email) => {
                    if (email) {
                        return true;
                    } else {
                        console.log("Please enter your email!");
                        return false;
                    }
                },
            },
            {
                type: "text",
                name: "officeNumber",
                message: "Enter your office number (Required)",
                validate: (officeNmb) => {
                    if (officeNmb) {
                        return true;
                    } else {
                        console.log("Please enter your office number!");
                        return false;
                    }
                },
            },
        ])
        .then(({ name, id, email, officeNmb }) => {
            const manager = new Manager(name, id, email, officeNmb);
            team.push(manager);
            selector();
        });
};

createManager();





//engineer info
createEngineer = () => {
    console.log(`    ==========
    Adding Engineer Info
    ==========`);
    inquirer
        .prompt([
            {
                type: "text",
                name: "engineerName",
                message: "Enter engineer's name (Required)",
                validate: (engineerName) => {
                    if (engineerName) {
                        return true;
                    } else {
                        console.log("Please enter engineer's name!");
                        return false;
                    }
                },
            },
            {
                type: "text",
                name: "engineerId",
                message: "Enter engineer's ID (Required)",
                validate: (engineerName) => {
                    if (engineerName) {
                        return true;
                    } else {
                        console.log("Please enter engineer's ID!");
                        return false;
                    }
                },
            },
            {
                type: "text",
                name: "engineerEmail",
                message: "Enter engineer's email (Required)",
                validate: (engineerEmail) => {
                    if (engineerEmail) {
                        return true;
                    } else {
                        console.log("Please enter engineer's email!");
                        return false;
                    }
                },
            },
            {
                type: "text",
                name: "engineerGithub",
                message: "Enter engineer's github username (Required)",
                validate: (engineerGithub) => {
                    if (engineerGithub) {
                        return true;
                    } else {
                        console.log("Please enter engineer's github username!");
                        return false;
                    }
                },
            },
        ])
        .then(({ engineerName, engineerId, engineerEmail, engineerGithub }) => {
            const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
            team.push(engineer);
            selector();
        });
};





//intern info
createIntern = () => {
    console.log(`    ==========
    Adding Intern Info
    ==========`);
    inquirer
        .prompt([
            {
                type: "text",
                name: "intName",
                message: "Enter intern's name (Required)",
                validate: (internName) => {
                    if (internName) {
                        return true;
                    } else {
                        console.log("Please enter intern's name!");
                        return false;
                    }
                },
            },
            {
                type: "text",
                name: "internId",
                message: "Enter intern's ID (Required)",
                validate: (internName) => {
                    if (internName) {
                        return true;
                    } else {
                        console.log("Please enter intern's ID!");
                        return false;
                    }
                },
            },
            {
                type: "text",
                name: "internEmail",
                message: "Enter intern's email (Required)",
                validate: (internEmail) => {
                    if (internEmail) {
                        return true;
                    } else {
                        console.log("Please intern's email!");
                        return false;
                    }
                },
            },
            {
                type: "text",
                name: "internSchool",
                message: "Enter school (Required)",
                validate: (internSchool) => {
                    if (internSchool) {
                        return true;
                    } else {
                        console.log("Please enter the school!");
                        return false;
                    }
                },
            },
        ])
        .then(({ internName, internId, internEmail, internSchool }) => {
            const intern = new Intern(internName, internId, internEmail, internSchool);
            team.push(intern);
            selector();
        });
};





//selector function
selector = () => {
    inquirer
        .prompt({
            type: "list",
            message: "What would you like to do?",
            name: "position",
            choices: ["Engineer", "Intern", "Finished"],
        })
        .then((data) => {
            switch (data.position) {
                case "Engineer": {
                    createEngineer();
                    break;
                }
                case "Intern": {
                    createIntern();
                    break;
                }
                default:
                    generateHTML();
            }
        });
};





//generating html
let generateHTML = () => {
    console.log("========       DONE!        =========")
    console.log(team)

    // fs.writeFileSync(finalPath, htmlTemplate(team), "utf-8");
};

