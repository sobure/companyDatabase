// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js')

class Intern extends Employee{
    constructor(name,id,email, getRole, school) 
{       super(Employee)
        this.name = name; 
        this.id = id; 
        this.email = email; 
        this.getRole= getRole; 
        this.school = school;

        this.getRole = "Intern"
        this.Employee = "Intern"
        this.getRole = "Intern"
        this.school = "UCLA"
        this.name = Intern.prototype.getRole;
        this.id = Employee.prototype.getId;
        this.getRole = Intern.prototype.getRole;
        this.email = Employee.prototype.getEmail;  
}

getRole() { return this.Employee}
getSchool() {return this.school}
}
module.exports = Intern 