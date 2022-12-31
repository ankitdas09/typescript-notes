class Dog {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}
const newDog: Dog = new Dog("shotgun", 2);

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
	private name: string;
	private age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}
const John: Human = new Human("John", 20);
//console.log(John.name);
// Property 'name' is private and only accessible within class 'Human'.ts(2341)
//John.name = "John2";
// Property 'name' is private and only accessible within class 'Human'.ts(2341)

// What if we need to access the name property?

class Airplane {
	private modelName: string;
	private yearOfRelease: number;

	constructor(modelName: string, yearOfRelease: number) {
		this.modelName = modelName;
		this.yearOfRelease = yearOfRelease;
	}

	public getModelName() {
		return this.modelName;
	}
}
const A380: Airplane = new Airplane("A380", 2010);
console.log(A380.getModelName());
// OUTPUT : A380

export {};
