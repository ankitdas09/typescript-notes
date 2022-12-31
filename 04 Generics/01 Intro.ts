// Generics
// angle brackets

let numArr: Array<number> = [2, 3, 4];

const lastElement = (arr: number[]) => {
	return arr[arr.length - 1];
};
// What if we want to use this function for an array of strings?

const lastElement2 = (arr: any[]) => {
	return arr[arr.length - 1];
};
// Here we are using "any type" which is not very type safe

// Generics come into rescue here

const lastElement3 = <T>(arr: T[]) => {
	return arr[arr.length - 1];
};

const e1 = lastElement3([3, 4, 5]);
// Typescript can infer the return type here, we can also explictly define the type
const e2 = lastElement3<number>([3, 4, 5]);
const e3 = lastElement3(["h", "j", "p"]);
const e4 = lastElement3<string>(["h", "j", "p"]);
export {};
