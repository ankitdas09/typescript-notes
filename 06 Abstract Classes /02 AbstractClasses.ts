// Abstract classes CANT be instantiated
// "new" keyword can't be used

abstract class Department {
	protected constructor(protected name: string) {}
	// since constructor can only be used by child classes
	// a public contructor method makes no sense, what why we marked it as protected
}
// const dept = new Department("admin");
// Error: Cannot create an instance of an abstract class.ts(2511)

class ITDepartment extends Department {}

class AdminDepartment extends Department {}
