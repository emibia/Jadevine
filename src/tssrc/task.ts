
enum State {	NotStarted=0,Running,Suspended,Deleted,Completed}

enum Priority{Low = 0,Medium,High,veryHigh,EndOfTheWorld}

class User  {
	
private _firstName: string;
private _lastName: 	string;

	constructor(firstName: string, lastName: string) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	get fullName(): string {
		return this._firstName +' '+this._lastName;
	}

	get firstName(): string {
		return this._firstName;
	}

	get lastName(): string {
		return this._lastName;
	}

	set firstName(newName: string) {
		this._firstName = newName;
	}

	set lastName(newName: string) {
		this._lastName = newName;
	}
}

export class Task {
	
	assignee: User;
	priority: Priority;
	status: State;
	title: string;
	description: string;
	owner: User;
	assignees: Array<User>;
	startDate: Date;
	endDate: Date;

	constructor() { }
	// constructor(argument) {
	// 	// code...
	// }


}