// Abstract classes CANT be instantiated
// "new" keyword can't be used

abstract class Department0 {
	protected constructor(protected name: string) {}
	// since constructor can only be used by child classes
	// a public contructor method makes no sense, that is why we marked it as protected
}
// const dept = new Department0("admin");
// Error: Cannot create an instance of an abstract class.ts(2511)

// Abstract properties

type Holidays = {
	date: Date;
	reason: string;
}[];

abstract class Department {
	// Abstract properties forces child classes to have a definition for that property
	protected abstract holidays: Holidays;

	protected constructor(protected name: string) {}

	public addHolidays(holidays: Holidays) {
		if (Array.isArray(holidays)) {
			for (let holiday of holidays) {
				this.holidays.push(holiday);
			}
		}
	}

	public printHolidays() {
		if (this.holidays.length === 0) return console.log("No holidays.");
		console.log("Holidays :");
		this.holidays.forEach((holiday, idx) => {
			console.log(`${idx + 1} . ${holiday.date} | ${holiday.reason}`);
		});
	}
}

class ITDepartment extends Department {
	// forced declaration of holidays
	protected holidays: Holidays = [];
	constructor() {
		super("IT Department");
	}
}

class AdminDepartment extends Department {
	// forced declaration of holidays
	protected holidays: Holidays = [];
	constructor() {
		super("Admin Department");
	}
}

const it = new ITDepartment();
it.addHolidays([
	{
		date: new Date("02 Jan 2022"),
		reason: "test",
	},
	{
		date: new Date("03 Feb 2022"),
		reason: "test",
	},
]);
it.printHolidays();
// Holidays :
// 1 . Sun Jan 02 2022 00:00:00 GMT+0530 (India Standard Time) | test
// 2 . Thu Feb 03 2022 00:00:00 GMT+0530 (India Standard Time) | test
export {};
