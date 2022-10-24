## Functions in TS

### We can define the types of parameters as well as the return type of the function in TS.

```
function intro(name: string, age: number): string{
    return `My name is ${name} and age is ${age}`
}

const intro2 = function intro(name: string, age: number): string{
    return `My name is ${name} and age is ${age}`
}

const intro3 = (name: string, age: number): string => {
    return `My name is ${name} and age is ${age}`
}
```

### Default and optional parameters

```
function intro(name: string, age: number, country?: string): string{
    return `My name is ${name} and age is ${age}`
}

console.log(intro(name: "TEST")) //Error
console.log(intro(name: "TEST", age: 20))
console.log(intro(name: "TEST", age: 20, country: "CANADA"))
```

### Custom parameters and return types

```
enum ageUnit {
  years = "years",
  months = "months",
}

type Person = {
  name: string;
  age: number;
  ageUnit: ageUnit;
  country: string;
};

let person: Person = {
  name: "Scott",
  age: 30,
  ageUnit: ageUnit.years,
  country: "USA",
};

function convertAgeToMonths(person: Person): Person {
  person.age = person.age * 12;
  person.ageUnit = ageUnit.months;
  return person;
}

console.log(convertAgeToMonths(person));
```

### Function call signatures

What if one of the properties of the person type needs to be a method?

```
enum ageUnit {
  years = "years",
  months = "months",
}

type Person = {
  name: string;
  age: number;
  ageUnit: ageUnit;
  country: string;
  greet: (greeting: string) => string; //Function call signature
};

let person: Person = {
  name: "Scott",
  age: 30,
  ageUnit: ageUnit.years,
  country: "USA",
  greet: (greeting) => {
    return `${greeting} ${person.name}`;
  },
};

console.log(person.greet("Good Morning"));
```

A better syntax

```
enum ageUnit {
  years = "years",
  months = "months",
}

type greetingFunction = (greeting : string) => string;

type Person = {
  name: string;
  age: number;
  ageUnit: ageUnit;
  country: string;
  greet: greetingFunction;
};
```
