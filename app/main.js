(function () {'use strict';

const task_1 = require("./task");
let taskList = new Array();
let t1 = new task_1.Task();
t1.title = "Task 1";
let t2 = new task_1.Task();
t2.title = "Task 2";
let t3 = new task_1.Task();
t3.title = "Task 3";
taskList.push(t1);
taskList.push(t2);
taskList.push(t3);
console.log(taskList);
document.addEventListener('WebComponentsReady', function () {
});
}());
//# sourceMappingURL=main.js.map