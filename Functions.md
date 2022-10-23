## Functions in TS

We can define the types of parameters as well as the return type of the function in TS.

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
