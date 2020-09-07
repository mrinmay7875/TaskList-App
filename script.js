// Selecting All the elements
const taskInputField = document.querySelector(".task-input-field");
const addTaskBtn = document.querySelector(".add-task-btn");
const deleteTaskBtn = document.querySelector(".delete-task-btn");
const taskList = document.querySelector(".task-list");
const showAllTaskBtn = document.querySelector(".show-all-task-btn");

//This array will store all the tasks and store them in localStorage
let taskListArray;

//=======================================================

// All the function definitions goes here
// This function fetches tasks from the localStorage
function fetchTasksFromLocalstorage() {
  if (localStorage.getItem("tasks") === null) {
    taskListArray = [];
  } else {
    taskListArray = JSON.parse(localStorage.getItem("tasks"));
  }
  return taskListArray;
}
//This function takes task content and creates <li> element with the delete icon and inserts it into the tasklist
function createNewListItemElement(taskContent) {
  let newListItemElement = document.createElement("li");
  newListItemElement.className = "task-list-item";
  //Create a text node and append into the <span> element, here the actual task content will be stored in span element
  let newTextNode = document.createTextNode(taskContent);
  let newSpanElement = document.createElement("span");
  newSpanElement.appendChild(newTextNode);
  newSpanElement.className = "newTaskContent";

  newListItemElement.appendChild(newSpanElement);

  // Create delete icon and append into list item element
  let deleteIcon = document.createElement("i");
  deleteIcon.className = "far fa-trash-alt fa-sm delete-icon";
  newListItemElement.appendChild(deleteIcon);

  // Adding deleteSingleTask addEventListener to the delete icons
  deleteIcon.addEventListener("click", deleteSingleTask);
  // Append new task element in the <UL>
  taskList.appendChild(newListItemElement);
}

//========================================================
//Defining addNewTask() function which will add new task in the taskList
function addNewTask() {
  // Fetch the new task from Input value
  let newTask = taskInputField.value;

  // Create an li element for the new task and assign the className
  if (newTask === ""|| newTask == null || newTask == undefined) {
    alert("Please enter a valid task...");
  } else {
    //This function will take the new task as the input and return us a list item element and add it in the tasklist array
    createNewListItemElement(newTask);
    //Push the new task in the tasklist array and then store it into the localStorage
    taskListArray = fetchTasksFromLocalstorage();
    taskListArray.push(newTask);
    //Store the array of tasks in the localStorage
    localStorage.setItem("tasks", JSON.stringify(taskListArray));
  }
}
//==========================================================================

//Delete All task button
function deleteAllTasks() {
  taskList.innerHTML = "";
  localStorage.clear();
}

//Delete a single task
function deleteSingleTask(event) {
  event.target.parentElement.remove();
}

// This function fetches tasks from localStorage and show them in browser
function displayTasks() {
  taskListArray = fetchTasksFromLocalstorage();
  if (taskListArray.length == 0) {
    // alert("No tasks found");
    taskList.textContent = "No tasks found!";
  } else {
    taskListArray.forEach((element) => {
      createNewListItemElement(element);
    });
  }
}
// All functions definitions ends here-------------------------

//Adding eventlisteners to the Buttons

// Adding new task addEventListener to the Add Task button
addTaskBtn.addEventListener("click", addNewTask);

//Adding deleteAllTask event listener to the Delele All Task button
deleteTaskBtn.addEventListener("click", deleteAllTasks);

//When we refresh the page or open the page after closing the page then it will show you all the tasks.

showAllTaskBtn.addEventListener("click", displayTasks);
