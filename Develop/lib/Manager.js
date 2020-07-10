// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Manager extends Employee{
    constructor(name,id,email, getRole, officeNumber) 
{       super(Employee)
        this.name = name; 
        this.id = id; 
        this.email = email; 
        this.getRole= getRole; 
        this.officeNumber = officeNumber;

        
        this.Employee = "Manager";
        this.getRole = "Intern";
        this.officeNumber = 100;
        this.name = Employee.prototype.getName;
        this.id = Employee.prototype.getId;
        this.getRole = Manager.prototype.getRole;
        this.email = Employee.prototype.getEmail;  
}

getRole() { return this.Employee}
getOfficeNumber() {return this.officeNumber}
}
module.exports = Manager