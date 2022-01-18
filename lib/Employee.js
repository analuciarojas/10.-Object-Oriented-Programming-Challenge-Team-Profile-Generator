//  Constructor 

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // Returns employee's name

    getName () {
        return this.name;
    }

    // Returns employee's ID

    getId () {
        return this.id;
    }   

    // Returns employee's email

    getEmail () {
        return this.email;
    }

    // Returns employee's type of job

    getRole () {
        return 'Employee'; 
    }
};

module.exports = Employee; 