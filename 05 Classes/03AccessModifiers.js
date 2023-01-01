"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const newDog = new Dog("shotgun", 2);
newDog.name = "rifle";
console.log(newDog);
// OUTPUT Dog { name: 'rifle', age: 2 }
// the name property has been changed because by default, all properties of
// a class are public
// CHANGE OF PROPERTY
//                  OUTSIDE  CHILD  PARENT
// PUBLIC     ->    YES      YES    YES
// PROTECTED  ->    NO       YES    YES
// PRIVATE    ->    NO       NO     YES
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const John = new Human("John", 20);
//console.log(John.name);
// Property 'name' is private and only accessible within class 'Human'.ts(2341)
//John.name = "John2";
// Property 'name' is private and only accessible within class 'Human'.ts(2341)
// What if we need to access the name property?
class Airplane {
    constructor(modelName, yearOfRelease) {
        this.modelName = modelName;
        this.yearOfRelease = yearOfRelease;
    }
    getModelName() {
        return this.modelName;
    }
}
const A380 = new Airplane("A380", 2010);
console.log(A380.getModelName());
