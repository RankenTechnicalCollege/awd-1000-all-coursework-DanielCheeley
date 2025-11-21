let container = document.querySelector(".container");
let premadeTasks = ["Finish Work", "Wash Dishes", "Clean Kitchen", "Clean Bedroom", "Feed the Dog"]

let createListBtn = document.getElementById("createList");
let todoList = document.getElementById("todoList");

createListBtn.addEventListener("click", function() {
  premadeTasks.forEach(function(task) {
    //loop through premade tasks to add them to the list
    let newli = document.createElement("li");
    newli.textContent = task;
    newli.classList.add("removable-item");
    todoList.appendChild(newli);
  });

  //remove the create button and change the title
  createListBtn.remove();
  document.getElementById("title"). textContent = "Add Items to the Todo List, Or Click to Remove:";
  //add the new button and input field
  populateWithNewElements();
  
  //listen for click so add the custom task to the list
  addBtn.addEventListener("click", addTask);
  
  //adds a listen to see if anything under todoList gets clicked
  todoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("removable-item")) {
    e.target.remove();
  }
  });
});


function populateWithNewElements() {
  //Add task input add
  let addInput = document.createElement("input");
  addInput.type = "text";
  addInput.id = "addInput";
  addInput.autocomplete = "off";
  addInput.placeholder = "Add Task Here";
  container.appendChild(addInput);
  //Add Task button add
  let addBtn = document.createElement("button");
  addBtn.type = "button";
  addBtn.id = "addBtn";
  addBtn.textContent = "Add Task";
  addBtn.className = "btn btn-primary";
  container.appendChild(addBtn);
}

function addTask() {
  //checks if addInput is empty
  if(addInput.value != "") {
    //clears any old errors
    document.getElementById("errorBox").textContent = "";
    //creates element
    let newli = document.createElement("li");
    newli.textContent = addInput.value;
    newli.classList.add("removable-item");
    todoList.appendChild(newli);
    addInput.value = "";
  } else {
    document.getElementById("errorBox").textContent = "Please Do Not Leave Blank";
  }
}