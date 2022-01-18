// Engineer constructor 

const Engineer = require("../lib/Engineer");


test("Test to see if it can create a github", () => {
    const testGithub = "analuciarojas";
    const employeeExample = new Engineer("Ana Lucia", 1, "analurojasr@gmail.com", testGithub);
    expect(employeeExample.github).toBe(testGithub);
});

// Testing github trough getGitHub 

test("Gets GitHib trough getGithub", () => {
    const testGithub = "analuciarojas";
    const employeeExample = new Engineer("Ana Lucia", 1, "analurojasr@gmail.com", testGithub);
    expect(employeeExample.getGithub()).toBe(testGithub);
});

// Testing role trough getRole 

test("Gets role trough getRole", () => {
    const returnValue = "Engineer";
    const employeeExample = new Engineer("Ana Lucia", 1, "analurojasr@gmail.com", "analuciarojas");
    expect(employeeExample.getRole()).toBe(returnValue);
});
