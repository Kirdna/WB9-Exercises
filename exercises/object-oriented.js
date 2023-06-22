"use strict";


class Person {
    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;


    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, id, jobTitle, payRate) {
        super(firstName, lastName)
        this.employeeId = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;

    }

    getIntro() {

        let intro =
            "Hi! I'm " + this.getFullName() + " and I am a " +
            this.jobTitle;
        return intro;
    }
    getGrossPay(hoursWorked) {

        return this.payRate * hoursWorked
    }

}

console.log(`-----------Excercise 1----below-----------`);

let Nerio = new Person("Nerio", "Guio");
console.log(Nerio.getFullName());

let Angel = new Person("Angel", "Soto");
console.log(Angel.getFullName());


console.log(`-----------Excercise 2-----below-----------`);

Angel = new Employee(1, "Angel", "Soto", "Welder", 170.50);
console.log(`Employee ${Angel.getFullName()} created`);
console.log(`Job title is ${Angel.jobTitle}`);
console.log(`Pay rate is $${Angel.payRate}`);

console.log(`-----------Excercise 2 test ----below-----------`);


Nerio = new Employee("Nerio", "Guio", 2, "Full stack developer", 100.50);
console.log(`Employee ${Nerio.getFullName()} created`);
console.log(`Job title is ${Nerio.jobTitle}`);
console.log(`Pay rate is $${Nerio.payRate}`);


console.log(`-----------Excercise 2----below-----------`);
let Kameron = new Employee("Kameron", "W", 2, "Engineer", 170.50);
console.log(`Employee ${Kameron.getFullName()} created`);
console.log(`Gross pay is ${Kameron.getGrossPay(2)}`);