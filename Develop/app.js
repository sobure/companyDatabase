const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const express = require("express");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const teamMembers = [];
const idArray = [];

appMenu()
function appMenu() {

    createManager()
    function createManager () {
    
    console.log('Team Assembly:');
    inquirer.prompt([ {
        type: "input",
        name: "managerName", 
        message: "Enter name?" ,
        validate: answer => 
        { 
        if (answer !== "" ) { return true; }
         return "Please enter at least one character ." }
    }
,
    {
        type: 'input',
        name: 'managerId',
        message: 'Enter manager id?',
        validate: answer => {
            const pass = answer.
            match(
                /^[1-9]\d*$/
             );
            if (pass) {
            return true;
        }
        return "Please enter a positve number greater than zero.";
    }  
 } ,
    {
        type: "input",
        name: "managerEmail",
        message: "Enter managers email? ", 
        validate: answer => { 
        const pass = answer.
        match(
            /\S+@\S+\.\S+/
            );
        if (pass) {
            return true;
        }
        return "Pleae enter a valid email address.";}

    },
    {
     type: "input",
     name: "managerOfficeNumber",
     message: "What is your manger's office number?",
     validate: answer => {
         const pass = answer.match(
             /^[1-9]\d*$/
         );
         if (pass) {
             return true;
         }
         return "Please enter a positive number greater than zero."; 
      }
    }
]).then(answers => {
    const manager = new Manager(answers.managName, answers.managerID, answers.mangerEmail, answers.managerOfficeNumber); teamMembers.push(manager);
    idArray.push(answers.managerId);
    console.log(idArray)
    //createTeam();
});
    }
}

//app.use(express.urlencoded({extend: true}));
//app.use(express.json())

// Displays the team
//app.get("/main", function(req, res){
  //  res.sendFile(path.join(__dirname,"main.html"));})
// app.get("/team")
//const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html") */
