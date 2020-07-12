
/* 

I. 'Employee' Class
        A. Constructor
            1. 'name', name of Employee
            2. 'id', identification number of Employee
            3. 'email', email of Emplopyee
        B. Methods
            1. getRoloe(), returns class name of Employee 
            2. getName(), returns name of Employee
            3. getId(), returns id of Employee
            4. getEmail(), returns email of Employee
    II. Module Export
        A.  'Employee', class exported via module export 

*/
class Employee 
    {
    constructor(name,id,email) 
    { 
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getRole()  { return  "Employee" }
    getName()  { return this.name    }
    getId()    { return this.id      }
    getEmail() { return this.email   }
    }     
module.exports = Employee