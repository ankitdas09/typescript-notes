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
