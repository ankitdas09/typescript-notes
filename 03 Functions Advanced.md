### More on Functions

We can define functions like this:

```
type sum = {
	(p: string, q: string): boolean;
};
const sameStr: sum = (c, v) => {
	return c == v;
};
```

Also valid

```
type sum = (p: string, q: string) => boolean;

const sameStr: sum = (c, v) => {
	return c == v;
};
```

## Function overloading:

### Function overloading is a feature of object-oriented programming where two or more functions can have the same name but different parameters. When a function name is overloaded with different jobs it is called Function Overloading.

Function that can accept 3 as well as 4 parameters.

```
type Reservation = {
	departureDate: Date;
	returnDate?: Date;
	departingFrom: string;
	destination: string;
};

type Reserve = {
	(
		departureDate: Date,
		returnDate: Date,
		departingFrom: string,
		destination: string
	): Reservation | never;
	(
		departureDate: Date,
		departingFrom: string,
		destination: string
	): Reservation | never;
};

const makeTicket: Reserve = (
	departureDate: Date,
	returnDateOrDepartingFrom: string | Date,
	departingFromOrDestination: string,
	destination?: string
) => {
	if (returnDateOrDepartingFrom instanceof Date && destination) {
		return {
			departureDate: departureDate,
			returnDate: returnDateOrDepartingFrom,
			departingFrom: departingFromOrDestination,
			destination: destination,
		};
	} else if (typeof returnDateOrDepartingFrom === "string") {
		return {
			departureDate: departureDate,
			departingFrom: returnDateOrDepartingFrom,
			destination: departingFromOrDestination,
		};
	}
	throw new Error("Please provide valid information!");
};

```
