const taskInputField = document.querySelector(".task-input-field");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskList = document.querySelector(".task-list");
const deleteTaskBtn = document.querySelector(".clear-task-btn");

// Add new task Button

let taskArray = [];
function addNewTask() {
  let newTask = taskInputField.value;
  let newListItemElement = document.createElement("li");
  newListItemElement.className = "task-list-item";
  let newTextNode = document.createTextNode(newTask);
  newListItemElement.appendChild(newTextNode);

  taskList.appendChild(newListItemElement);
}
addTaskBtn.addEventListener("click", addNewTask);

// Delete All task button
function deleteTasks() {
  taskList.innerHTML = "";
}

deleteTaskBtn.addEventListener("click", deleteTasks);
