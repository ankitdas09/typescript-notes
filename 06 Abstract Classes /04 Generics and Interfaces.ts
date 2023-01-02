// Inerfaces with generics
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

const Innova: Automobile<AutoMobileTypes, AutoMobileBrands, AutoMobileColors> = {
	type: AutoMobileTypes.car,
	brand: AutoMobileBrands.toyota,
	colors: [AutoMobileColors.silver, AutoMobileColors.white],
	description: "SUV car.",
};

const car: Automobile<string, string, number> = {
	type: "car",
	brand: "honda",
	colors: [54332, 34234],
	description: "car car.",
};

export {};
