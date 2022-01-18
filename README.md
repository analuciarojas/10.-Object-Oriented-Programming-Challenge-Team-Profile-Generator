# 10.-Object-Oriented-Programming-Challenge-teamArray-Profile-Generator

![JavaScript](https://img.shields.io/badge/javascript-100%25-yellowg)

## Description

This project consisted on creating a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Also including tests for each part of the code ensuring it passes all of them. 

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Snippets](#snippets)
* [Technologies](#technologies)
* [Preview](#preview)
* [Links](#links)

## Installation 

In order to use this application please install inquirer typing this into your command line. 

```  
npm install inquirer     
```  
Also, for tests please make sure you have jest installed. 
## Usage 

After installing npm inquirer, from the index.js file use the vs code integrated termial and type node index. Enter the requiered fields and answer properly. Finally, the corresponding HTML file will be created and stored in the ./dist folder.

## Snippets 

* **Running Tests**
```            
// Testing role trough get role 

test("Gets role through getRole", () => {
    const returnValue = "Employee";
    const employeeExample = new Employee("Ana Lucia", 1, "analurojasr@gmail.com");
    expect(employeeExample.getRole()).toBe(returnValue);
})
```   
* **Employee class**
```            
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
```  
* **Function to write HTML file**
```            

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('Your HTML file is created!')
    });
};
```           



## Technologies

* JavaScript
* Node.js
* Inquirer
* Jest 

## Preview

This is a an image of a team profile deployed HTML file using this application.  

![Team profile file](assets/images/preview.png)

## Links

* [URL of the Youtube walktrough video](https://youtu.be/oX1NmrXa88g)

* [URL of the GitHub repository](https://github.com/analuciarojas/10.-Object-Oriented-Programming-Challenge-Team-Profile-Generator)