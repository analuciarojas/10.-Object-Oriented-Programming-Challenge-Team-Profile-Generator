const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // Call employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // Override role to manager
    getRole () {
        return "Manager";
    }
}

module.exports = Manager; 