## Types in TS

### Primitive Types:

1. Any
2. Unknown
3. Number
4. String
5. Bit Int
6. Boolean

Type inference: TS infers the types by its own
No explicit type declaration
Such as
`const number = 20`
`let string = “hello”`

When to declare type of variable
`let m;`
here res is to be initialised later
hence we need to declare its type
`let m:number;`

## Object types in TS

```
let person : {
	name: string;
	age: number;
} = {
	name: “hello”,
	age: 20
}

let article = {
    author: string;
    content: string;
    image?: string;
}
article = {
    //new article
}
```

Defining types of every object variable like this is not practical
Hence we have Type Aliases

```
type Article = {
    author: string;
	content: string;
    image?: string;
}

let newArticle:Article = {
    author: “test”,
    content:”test”,
    image:”test”
}
```

### The union types

```
type Dog = {
	name: string;
	barks: boolean;
	wags: boolean;
}

type Cat = {
	name: string;
	purrs: boolean;
}

type DogAndCat = Dog | Cat;

let dog : DogAndCat = {
	name: “dog”,
	barks: true,
	wags: true
}

let cat : DogAndCat = {
	name: “cat”,
	purrs: true
}

let hybrid : DogAndCat = {
	name: “hybrid”,
	barks: false,
	purrs: true,
	wags: true
}
```

### The intersection types

All properties are required

```
type Dog = {
	name: string;
	barks: boolean;
	wags: boolean;
}

type Cat = {
	name: string;
	purrs: boolean;
}

type HybridAnimal = Dog & Cat;

// All properties required
let hybrid : HybridAnimal = {
	name: “hybrid”,
	barks: false,
	purrs: true,
	wags: true
}
```

### Arrays

```
let a: number[] = [1, 2, 3];
let b: Array<string> = ["a", "b", "c"];
let c: (string | number)[] = ["a", "b", 1];
```

```
type Airplane = {
  flightNumber: string;
  airplaneModel: string;
  dateOfDeparture: string;
  timeOfDeparture: string;
  from: string;
  to: string;
  seats: {
    [key: string]: string;
  };
};

type Airplanes = Airplane[];

const airplanes: Airplanes = [
  {
    flightNumber: "SG102",
    airplaneModel: "A380",
    dateOfDeparture: "01/12/2022",
    timeOfDeparture: "23:30",
    from: "JFK",
    to: "DCA",
    seats: {
      "10A": "Mark Thomas",
      "10B": "John Jacobs",
    },
  },
  {
    flightNumber: "SG102",
    airplaneModel: "A380",
    dateOfDeparture: "01/12/2022",
    timeOfDeparture: "23:30",
    from: "JFK",
    to: "DCA",
    seats: {
      "10A": "Mark Thomas",
      "10B": "John Jacobs",
    },
  },
];
```
