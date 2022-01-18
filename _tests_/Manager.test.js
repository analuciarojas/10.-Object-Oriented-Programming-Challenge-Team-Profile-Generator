// Manager constructor 

const Manager = require('../lib/Manager');

test("Test to see if it can create an Office Number", () => {
    const testOfficeNumber = 123;
    const employeeExample = new Manager("Ana Lucia", 1, "analurojasr@gmail.com", testOfficeNumber);
    expect(employeeExample.officeNumber).toBe(testOfficeNumber);
});

// Testing role trough getRole 

test("Gets role trough getRole", () => {
    const returnValue = "Manager";
    const employeeExample = new Manager("Ana Lucia", 1, "analurojasr@gmail.com", "analuciarojas");
    expect(employeeExample.getRole()).toBe(returnValue);
});

