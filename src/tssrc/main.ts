//import {Task, State} from "./task";


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


export class Main{
	
	// constructor() {
	// 	// code...
	// };
	private _tasklist:Task[];

	public init () {
		this._tasklist = new Array<Task>();

		let t1 = new Task();
		t1.title = "Task 1";

		let t2 = new Task();
		t2.title = "Task 2";

		let t3 = new Task();
		t3.title = "Task 3";

		this._tasklist.push(t1);
		this._tasklist.push(t2);
		this._tasklist.push(t3);

		document.addEventListener('WebComponentsReady', function() {
	        
			console.log("WebComponentsReady");
	        
	      });

		return this._tasklist;
	}

	public get tasklist() : Task[] {
		return this._tasklist;
	}
}
//console.log(_tasklist);

