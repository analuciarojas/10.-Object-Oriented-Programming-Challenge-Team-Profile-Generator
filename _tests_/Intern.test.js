// Intern constructor 

const Intern = require('../lib/Intern');

test("Can create school.", () => {
    const testSchool = "UC Davis";
    const employeeExample = new Intern("Ana Lucia", 1, "analurojasr@gmail.com", testSchool);
    expect(employeeExample.school).toBe(testSchool);
});

// Testing School trough getSchool 

test("Gets School trough getSchool", () => {
    const testSchool = "UC Davis";
    const employeeExample = new Intern("Ana Lucia", 1, "analurojasr@gmail.com", testSchool);
    expect(employeeExample.getSchool()).toBe(testSchool);
});

// Testing role trough getRole 

test("Gets role trough getRole", () => {
    const returnValue = "Intern";
    const employeeExample = new Intern("Ana Lucia", 1, "analurojasr@gmail.com", "analuciarojas");
    expect(employeeExample.getRole()).toBe(returnValue);
});

