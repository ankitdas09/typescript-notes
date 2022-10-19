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
