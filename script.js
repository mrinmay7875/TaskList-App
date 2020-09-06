const taskInputField = document.querySelector(".task-input-field");
const addTaskBtn = document.querySelector(".add-task-btn");
const deleteTaskBtn = document.querySelector(".clear-task-btn");

const taskList=document.querySelector(".task-list")

let taskArray = [];
function addNewTask() {
  // Fetch the new task from Input value
  let newTask = taskInputField.value;
  // Create an li element for the new task and 
  // assign the className
  let newListItemElement = document.createElement("li");
  newListItemElement.className = "task-list-item";
  // Create a text node and append into the <p> element</p>
  let newTextNode = document.createTextNode(newTask);
  let newPelement=document.createElement("span");
  newPelement.appendChild(newTextNode);
  newPelement.className="newTaskContent"
 
  newListItemElement.appendChild(newPelement);

  // Create delete icon and append into list item element
let deleteItem=document.createElement("i");
  deleteItem.className ="far fa-trash-alt fa-sm delete-icon"
newListItemElement.appendChild(deleteItem);

// Append new task element in the <UL>
taskList.appendChild(newListItemElement);


  addDeleteEvents();
}
// Add new task addEventListener
addTaskBtn.addEventListener("click", addNewTask);

// Delete All task button
function deleteAllTasks() {
  taskList.innerHTML = "";
}
//Delete all task eventlistener
deleteTaskBtn.addEventListener("click", deleteAllTasks);



// function to add delete events to all delete icons
function addDeleteEvents(){
  let  allDeleteIcons=document.querySelectorAll(".delete-icon")
  allDeleteIcons=[...allDeleteIcons]
  allDeleteIcons.forEach(item=>{
    item.addEventListener("click",deleteSingleTask);
  })
}

//Delete a singLisle task
function deleteSingleTask(event){
  // console.log(
  //   event.target.parentElement);
event.target.parentElement.remove();

}
