// Similar to types
interface Person {
	name: string;
	email: string;
	age: number;
	phone?: number;
	greet: () => void;
}

const person: Person = {
	name: "John",
	email: "john@email.com",
	age: 22,
	phone: 99,
	greet: () => {
		console.log("Hello");
	},
};

// Inheritance in interfaces
// use "extends" keyword

interface User {
	name: string;
	email: string;
}

interface PowerUser extends User {
	department: string;
}

const admin2: PowerUser = {
	department: "devops",
	name: "John",
	email: "johndevops@emailprovider.com",
};

// Inheriting from multiple interfaces
interface UserInformation {
	address?: string;
	phone?: number;
}

enum Roles {
	admin = "admin",
	author = "author",
	editor = "editor",
}
interface UserRoles {
	role: Roles;
}

enum PermissionList {
	read = "read",
	write = "write",
	execute = "execute",
}
interface UserPermissions {
	permissions: PermissionList[];
}

interface AdminUser extends User, UserRoles, UserPermissions {
	numberOfUsersReporting: number;
}

const admin: AdminUser = {
	numberOfUsersReporting: 5,
	name: "John",
	email: "john@admin.com",
	role: Roles.admin,
	permissions: [PermissionList.read, PermissionList.execute, PermissionList.write],
};

console.log(admin);
export {};
