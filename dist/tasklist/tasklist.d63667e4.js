// Basic form DOM elements
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
// Selector for the tasklist output
var tasklist = document.querySelector("#tasklist > ul");
// DOM elements for the task input fields
var taskInput = document.getElementById("taskInput");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");
// an event listener for the 'add column' button which calls the addColumn() function
document.getElementById("myBtn").addEventListener("click", addColumn);
// creates a div with a h1 element with the text of "new column". then appends the text to h1, 
// the h1 to the div and the div to the div element with an id of 'k-board'  
function addColumn() {
    console.log("button clicked");
    var newColumn = document.createElement("div");
    var newHeading = document.createElement("h2");
    var headingText = document.createTextNode("new column");
    var kBoard = document.getElementById("k-board");
    var newButton = document.createElement("button");
    newButton.textContent = "+ Add Task";
    newButton.className += "add-task";
    newHeading.appendChild(headingText);
    newColumn.appendChild(newHeading);
    kBoard.appendChild(newColumn);
    kBoard.appendChild(newButton);
}
// button to show task list 
// const targetDiv = document.getElementById("taskform");
// const btn = document.getElementById("add-task");
// btn.onclick = function () {
//   if (targetDiv.style.display == "none") {
//     targetDiv.style.display = "block";
//   } else {
//     targetDiv.style.display = "none";
//   }
// };
document.getElementById("add-task").addEventListener("click", function() {
    document.getElementById("task-grid").classList.add("active");
});
// Form submission event listener
form.addEventListener("submit", function(event) {
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    if (task) addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);
});
// Create global array to track tasks
var taskListArray = [];
// Function to add task with user inputs as parameters
function addTask(taskDescription, dueDate, estimatedTime, priorityRating, completionTime, completionStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
        id: Date.now(),
        taskDescription,
        dueDate,
        dateCreated,
        estimatedTime,
        completionTime,
        priorityRating,
        estimatedTime,
        completionStatus
    };
    taskListArray.push(task);
    console.log(taskListArray);
    renderTask(task);
}
// Function to display task on screen
function renderTask(task1) {
    // Call function - checks if a task has been added
    updateEmpty();
    // Create HTML elements
    let item = document.createElement("li");
    item.setAttribute('data-id', task1.id);
    item.innerHTML = "<p>" + task1.taskDescription + "</p>";
    tasklist.appendChild(item);
    // Extra Task DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete Task");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);
    // Event Listeners for DOM elements
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        let id = event.target.parentElement.getAttribute('data-id');
        let index = taskListArray.findIndex((task)=>task.id === Number(id)
        );
        removeItemFromArray(taskListArray, index);
        console.log(taskListArray);
        updateEmpty();
        item.remove();
    });
    // Clear the input form
    form.reset();
}
// Function to remove item from array
function removeItemFromArray(arr, index) {
    if (index > -1) arr.splice(index, 1);
    return arr;
}
// Function to hide the 'you haven't added any tasks' text
function updateEmpty() {
    if (taskListArray.length > 0) document.getElementById('emptyList').style.display = 'none';
    else document.getElementById('emptyList').style.display = 'block';
}

//# sourceMappingURL=tasklist.d63667e4.js.map
