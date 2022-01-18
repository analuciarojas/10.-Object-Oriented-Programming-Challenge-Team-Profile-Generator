const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github){
        // Call employee constructor

        super (name, id, email);      
        this.github = github
    }

    // Returns engineer's GitHub 

    getGithub() {
        return this.github;
    }
    
    // Override role to engineer
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;
