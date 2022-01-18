// Employee constructor 

const Employee = require('../lib/Employee');

// test to see if it creates an object 

test("Can create employee object", () => {
    const employeeExample= new Employee();
    expect(typeof(employeeExample)).toBe("object");
})

// Testing name id and email 

test("Name id and email correctly", () => {
    const employee = new Employee('Ana Lucia', 1, 'analurojasr@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

// Testing name trough get name 

test("Gets name through getName", () => {
    const testName = "Ana Lucia";
    const employeeExample = new Employee(testName);
    expect(employeeExample.getName()).toBe(testName);
})

// Testing id trough get id 

test("Gets ID through getID", () => {
    const testID = 1;
    const employeeExample = new Employee("Ana Lucia", testID);
    expect(employeeExample.getId()).toBe(testID);
})

// Testing email trough get email 

test("Gets email through getEmail", () => {
    const testEmail = "analurojasr@gmail.com";
    const employeeExample = new Employee("Ana Lucia", 1, testEmail);
    expect(employeeExample.getEmail()).toBe(testEmail);
})

// Testing role trough get role 

test("Gets role through getRole", () => {
    const returnValue = "Employee";
    const employeeExample = new Employee("Ana Lucia", 1, "analurojasr@gmail.com");
    expect(employeeExample.getRole()).toBe(returnValue);
})