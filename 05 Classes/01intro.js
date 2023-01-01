"use strict";
//Classes are a template for creating objects. They encapsulate data with code to work on that data.
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor() {
        //vars inside class are called properties
        this.name = "John";
        this.email = "john@email.com";
    }
    //functions inside class are called methods
    greet() {
        return "Hello!";
    }
}
const person = new Person(); // instance
console.log(person.greet());
const person2 = new Person(); // instance
// class that generate the same object everytime is of no use
// CONSTRUCTOR FUNCTION
// gets called whenever new instance is created
class Pet {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return this.name + " says hi!";
    }
}
const dog = new Pet("shotgun");
console.log(dog.greet());
