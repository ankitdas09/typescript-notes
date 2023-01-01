"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Shorthand syntax for initial properties
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
const John = new Person("John", 22);
console.log(John.getName());
// OUTPUT : John
// *********************************************
// More control on Members of class
// *********************************************
// Person class has a flaw: We can assign any age
const Mark = new Person("Mark", -20);
// To fix this -->
// Inefficient way
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        if (age > 200 || age < 0) {
            throw new Error("Invalid age");
        }
    }
}
// const Jack = new Person2("Jack", -20);
// will throw an error
// Theres another problem with this approach
// constructor function only runs whenever a new instance is created
// therefore for public properties we can change the values after
// its instanciated and hence we can not perform the check again.
// Better method
// USING A MUTATOR
class Person3 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    // Setter method
    set age(age) {
        if (age > 200 || age < 0) {
            throw new Error("Invalid age provided.");
        }
        this._age = age;
    }
    // Getter method
    get age() {
        if (this._age === undefined) {
            throw new Error("Age is undefined.");
        }
        return this._age;
    }
}
const Jack = new Person3("Jack");
Jack.age = 20;
console.log(Jack.age);
