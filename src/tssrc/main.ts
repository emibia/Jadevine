import { Task } from "./task";

export class Main{
	
	// constructor() {
	// 	// code...
	// };

	public init () {
		let taskList = new Array<Task>();

		let t1 = new Task();
		t1.title = "Task 1";

		let t2 = new Task();
		t2.title = "Task 2";

		let t3 = new Task();
		t3.title = "Task 3";

		taskList.push(t1);
		taskList.push(t2);
		taskList.push(t3);


		document.addEventListener('WebComponentsReady', function() {
	        
			console.log("WebComponentsReady");
	        
	      });

		return taskList;
	}
}

//console.log(taskList);

