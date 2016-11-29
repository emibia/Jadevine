export var State;
(function (State) {
    State[State["NotStarted"] = 0] = "NotStarted";
    State[State["Running"] = 1] = "Running";
    State[State["Suspended"] = 2] = "Suspended";
    State[State["Deleted"] = 3] = "Deleted";
    State[State["Completed"] = 4] = "Completed";
})(State || (State = {}));
export var Priority;
(function (Priority) {
    Priority[Priority["Low"] = 0] = "Low";
    Priority[Priority["Medium"] = 1] = "Medium";
    Priority[Priority["High"] = 2] = "High";
    Priority[Priority["veryHigh"] = 3] = "veryHigh";
    Priority[Priority["EndOfTheWorld"] = 4] = "EndOfTheWorld";
})(Priority || (Priority = {}));
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
export class Task {
    constructor(propsObj) {
        this._priority = Priority.Low;
        this._status = State.Running;
        propsObj = propsObj || {};
        Object.assign(this, propsObj);
    }
    ;
    get user() {
        return this._assignee;
    }
    get status() {
        return this.status;
    }
    get title() { return this._title; }
    set title(titleStr) { this._title = titleStr; }
}
