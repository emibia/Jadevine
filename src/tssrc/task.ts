
export enum State {	NotStarted=0,Running,Suspended,Deleted,Completed}

export enum Priority{Low = 0,Medium,High,veryHigh,EndOfTheWorld}

export class User  {
	
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
	
	constructor(propsObj?:Object) {
		propsObj = propsObj || {}; 
		Object.assign(this, propsObj);
	};

	public assignee: User;
	public priority: Priority;
	public status: State;
	public title: string;
	public description: string;
	public owner: User;
	public assignees: Array<User>;
	public startDate: Date;
	public endDate: Date;
	
	// constructor(argument) {
	// 	// code...
	// }

}