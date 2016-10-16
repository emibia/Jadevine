import User = require("user");
import State = require("state");



enum Priority{
	Low = 0,
	Medium,
	High,
	veryHigh,
	EndOfTheWorld
}

class Task {
	
	let assignee: User;
	let priority: Priority;
	let status: State;
	let title: string;
	let description: string;
	let owner: User;
	let assignees: Array<User>;
	let startDate: Date;
	let endDate: Date;


	constructor(argument) {
		// code...
	}


}