//Classes are a template for creating objects. They encapsulate data with code to work on that data.

class Person {
	//vars inside class are called properties
	name = "John";
	email = "john@email.com";
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
	name: string;

	constructor(name: string) {
		this.name = name;
	}

	greet() {
		return this.name + " says hi!";
	}
}
const dog = new Pet("shotgun");
console.log(dog.greet());
// now all properties are dynamic
export {};
