'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//import {Task, State} from "./task";
(function (State) {
    State[State["NotStarted"] = 0] = "NotStarted";
    State[State["Running"] = 1] = "Running";
    State[State["Suspended"] = 2] = "Suspended";
    State[State["Deleted"] = 3] = "Deleted";
    State[State["Completed"] = 4] = "Completed";
})(exports.State || (exports.State = {}));
(function (Priority) {
    Priority[Priority["Low"] = 0] = "Low";
    Priority[Priority["Medium"] = 1] = "Medium";
    Priority[Priority["High"] = 2] = "High";
    Priority[Priority["veryHigh"] = 3] = "veryHigh";
    Priority[Priority["EndOfTheWorld"] = 4] = "EndOfTheWorld";
})(exports.Priority || (exports.Priority = {}));
class User {
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
class Task {
    constructor(propsObj) {
        this._priority = exports.Priority.Low;
        this._status = exports.State.Running;
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
class Main {
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
}
//console.log(_tasklist);

exports.User = User;
exports.Task = Task;
exports.Main = Main;