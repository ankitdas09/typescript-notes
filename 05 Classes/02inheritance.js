"use strict";
// Use "extends" keywords to use inheriance
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
//child class
class Admin extends User {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
}
const user = new User("John", "john@email.com", 22);
const admin = new Admin("Admin", "admin@email.com", 24);
console.log("user", user);
console.log("admin", admin);
// the "super" method
class Editor extends User {
    constructor(name, email, age, currentProjects) {
        super(name, email, age);
        this.currentProjects = currentProjects;
    }
}
const editor = new Editor("john", "john@editor.com", 23, 2);
console.log(editor);
