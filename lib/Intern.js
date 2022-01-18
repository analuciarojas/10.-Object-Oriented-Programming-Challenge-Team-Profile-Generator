const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        // Call employee constructor
        super (name, id, email);      
        this.school = school; 
    }
    // Returns intern's School 

    getSchool() {
        return this.school;
    }
    // Override role to intern
    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 