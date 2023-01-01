"use strict";
// Improving classes
// Efficiecnt code
class Person {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
        this.testUsersAge(_age);
        this._age = _age;
    }
    testUsersAge(age) {
        if (age > 200 || age < 0) {
            throw new Error("Invalid age value.");
        }
        return age;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set age(age) {
        this.testUsersAge(age);
        this._age = age;
    }
    get age() {
        return this._age;
    }
}
