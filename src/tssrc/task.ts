
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
		this._priority = Priority.Low;
		this._status = State.Running;
		propsObj = propsObj || {}; 
		Object.assign(this, propsObj);
	};

	private _assignee: User;
	private _priority: Priority;
	private _status: State;
	private _title: string;
	private _description: string;
	private _owner: User;
	private _assignees: Array<User>;
	private _startDate: Date;
	private _endDate: Date;
	
	get user() : User {
		return this._assignee;
	}
	get status() : State {
		return this.status;
	}

	get title() : string{ return this._title;}
	set title(titleStr:string){this._title=titleStr}
	// constructor(argument) {
	// 	// code...
	// }
}