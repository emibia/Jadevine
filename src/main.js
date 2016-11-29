import { Task, State, Priority } from "./task";
// enum State {	NotStarted=0,Running,Suspended,Deleted,Completed}
//enum Priority{Low = 0,Medium,High,veryHigh,EndOfTheWorld}
export class User {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set firstName(newName) {
        this._firstName = newName;
    }
    set lastName(newName) {
        this._lastName = newName;
    }
}
// export class Task {
// 	constructor(propsObj?:Object) {
// 		this._priority = Priority.Low;
// 		this._status = State.Running;
// 		propsObj = propsObj || {}; 
// 		Object.assign(this, propsObj);
// 	};
// 	private _assignee: User;
// 	private _priority: Priority;
// 	private _status: State;
// 	private _title: string;
// 	private _description: string;
// 	private _owner: User;
// 	private _assignees: Array<User>;
// 	private _startDate: Date;
// 	private _endDate: Date;
// 	get user() : User {
// 		return this._assignee;
// 	}
// 	get status() : State {
// 		return this.status;
// 	}
// 	get title() : string{ return this._title;}
// 	set title(titleStr:string){this._title=titleStr}
// 	// constructor(argument) {
// 	// 	// code...
// 	// }
// }
;
export class Main {
    init() {
        this._tasklist = new Array();
        let t1 = new Task();
        t1.title = "Task 1";
        let t2 = new Task();
        t2.title = "Task 2";
        let t3 = new Task();
        t3.title = "Task 3";
        this._tasklist.push(t1);
        this._tasklist.push(t2);
        this._tasklist.push(t3);
        document.addEventListener('WebComponentsReady', function () {
            console.log("WebComponentsReady");
        });
        return this._tasklist;
    }
    get tasklist() {
        return this._tasklist;
    }
    /**
     * set tasklsetTst
     */
    set tasklist(tasklist) {
        this._tasklist = tasklist;
    }
}
;
export { State, Priority };
