// Most important use of interfaces is with classes
enum AutoMobileTypes {
	car = "car",
	bus = "bus",
	van = "van",
	truck = "truck",
	bike = "bike",
}

enum AutoMobileBrands {
	honda = "honda",
	toyota = "toyota",
	tesla = "tesla",
}

enum AutoMobileColors {
	red = "red",
	blue = "blue",
	silver = "silver",
	white = "white",
}

interface Automobile<Type, Brand, Color> {
	type: Type;
	brand: Brand;
	colors: Color[];
	description: string;
}

// Create a class that will always return the properties defined in the interface
// use "implements" keyword

class Car implements Automobile<string, AutoMobileBrands, AutoMobileColors> {
	public type: string = "car";
	constructor(
		public brand: AutoMobileBrands,
		public colors: AutoMobileColors[],
		public description: string
	) {}
}

const innova: Car = new Car(
	AutoMobileBrands.toyota,
	[AutoMobileColors.silver, AutoMobileColors.white],
	"SUV Car."
);
console.log(innova);

// INTERFACES ARE THE BLUEPRINTS OF THE FINAL OBJECT PRODUCED BY THE CLASS
// CAN NOT HAVE PRIVATE/PROTECTED PROPERTIES OF THE ONES DEFINED IN THE INTERFACE
// BUT CAN HAVE ADDITIONAL PRIVATE/PROTECTED PROPERTIES

class Truck implements Automobile<string, AutoMobileBrands, AutoMobileColors> {
	// Error
	// private type: string = "truck";
	public type: string = "truck";
	constructor(
		public brand: AutoMobileBrands,
		public colors: AutoMobileColors[],
		public description: string,
		// valid
		private driverName: string
	) {}
}

export {};
