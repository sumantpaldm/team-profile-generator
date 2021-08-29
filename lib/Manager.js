const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNmb) {
        super(name, id, email);

        this.officeNmb = officeNmb;
    }

    getOfficeNumber() {
        return this.officeNmb;
    }

    getRole() {
        return "Manager";
    }
}


module.exports = Manager;






/*officeNumber

getRole() // Overridden to return 'Manager'*/