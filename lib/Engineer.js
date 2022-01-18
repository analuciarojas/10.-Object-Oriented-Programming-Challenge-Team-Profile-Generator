const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(id, name, email, github){
        // Call employee constructor

        super(id, name, email)
        this.github = github
    }

    // Returns engineer's GitHub 

    getGithub() {
        return this.github
    }
    
    // Override role to engineer
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;
