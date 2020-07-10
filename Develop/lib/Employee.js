// TODO: Write code to define and export the Employee class
class Employee {

    constructor(name,id,email,getRole) { 
        this.name = name;
        this.id = id;
        this.email = email;
        this.Employee = "Employee";
        this.getRole = getRole; 
        
        this.getRole = Employee.prototype.getRole
    }
   
  
    getRole ()  {return this.Employee }
    getName() { return this.name }
    getId()   { return this.id }
    getEmail() {return this.email}
    //getRole() { return this.Employee}
                        }

module.exports = Employee