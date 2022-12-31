// Use "extends" keywords to use inheriance

class User {
	name: string;
	email: string;
	age: number;
	constructor(name: string, email: string, age: number) {
		this.name = name;
		this.email = email;
		this.age = age;
	}
}

//child class
class Admin extends User {
	isAdmin: boolean = true;
}

const user = new User("John", "john@email.com", 22);
const admin = new Admin("Admin", "admin@email.com", 24);
console.log("user", user);
console.log("admin", admin);

// the "super" method
class Editor extends User {
	currentProjects: number;

	constructor(name: string, email: string, age: number, currentProjects: number) {
		super(name, email, age);
		this.currentProjects = currentProjects;
	}
}
const editor = new Editor("john", "john@editor.com", 23, 2);

console.log(editor);
export {};
