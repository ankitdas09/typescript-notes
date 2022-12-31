// Passing different types

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => {
	return [x, y];
};
const p1 = makeTuple(2, 3);
// const p1: [number, number]
const p2 = makeTuple("p", "q");
// const p2: [string, string]
const p3 = makeTuple("p", 2);
// const p3: [string, number]

// Typescript infers the type automatically, we can also define
const p4 = makeTuple<number, string>(2, "s");
// const p4: [number, string]

// Constraints on T
const makeFullName = <T extends { firstName: string; lastName: string }>(obj: T) => {
	return { ...obj, fullName: obj.firstName + " " + obj.lastName };
};
// here we can pass any objects but it must contain firstName and lastName
