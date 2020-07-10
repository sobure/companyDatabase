// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

//extend vehicile to employee 
const Employee = require( './Employee.js')


class Engineer extends Employee{ 

    

    constructor(name,id,email, getRole, github) 
{       super(Employee)
        this.name = name; 
        this.id = id; 
        this.email = email; 
        this.getRole= getRole; 
        this.github = github;




        this.Employee = "Engineer"
        this.getRole = "Engineer"
        this.github = "GitHubUser"
        this.name = Engineer.prototype.getRole;
        this.id = Employee.prototype.getId;
        this.getRole = Engineer.prototype.getRole;
        this.email = Employee.prototype.getEmail;
        this.email = Employee.prototype.getEmail;

    }

    getRole() {return this.Employee} 
    getGithub() { return this.github};

    

    }

    //const Engineer = new Employee;//
// `getGitHub()` method 
module.exports = Engineer
    
