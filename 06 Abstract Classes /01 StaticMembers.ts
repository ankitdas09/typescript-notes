// Static properties and methods

// Static members are the properties or methods that can be accessed
// without instantiating the class

class Automobile {
	public static color: string = "green";
	public static calculateMileage(kms: number, litres: number) {
		return kms / litres;
	}
}
console.log(Automobile.color);
console.log(Automobile.calculateMileage(230, 18));

// Where to use static properties or methods?
// -> A helper class is a perfect example

// -> Eg: Math object in JS
const pi = Math.PI;
console.log(pi);
export {};
