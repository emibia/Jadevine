import User = require("user");
import State = require("state");



enum Priority{
	Low = 0,
	Medium,
	High,
	SuperHigh,
	EndOfTheWorld
}

class Task {
	
	let assignee: User;
	let priority: Priority;
	let status: State;

	constructor(argument) {
		// code...
	}


}