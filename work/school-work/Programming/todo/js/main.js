// Variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
// Array for task
const taskStorage = [];
let task = "";
let li = "";
let checkButton = "";
let deleteButton = "";

// Forreach to get local storage

// Event listener for add button

function createTask(taskStorage) {
    // Creating the task
    task = document.createElement('article');
    task.classList.add('task');

    li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    // Creating the check button
    checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton)

    // Creating the delete button
    deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);
}


window.addEventListener('load', function() {
    // Get local storage
    localTaskStorage = JSON.parse(localStorage.getItem("taskList"));

    // Forreach to get local storage
    localTaskStorage.forEach(element => {
        createTask();
        taskContainer.appendChild(task);
        li.innerText = `${element}`;
    });

    checkButton.addEventListener('click', function(){

        // Set a line through the task when the checkbutton is clicked
        checkButton.parentElement.style.textDecoration = "line-through";
        checkButton.style.backgroundColor = "orange"
        checkButton.style.color = "white"
        checkButton.style.borderColor = "white"
        checkButton.parentElement.style.transition = ".5s"
    });

    // Does not work
    // deleteButton.addEventListener('click', function(e){

    //     // Get the element that is clicked (delete button)
    //     let target = e.target;

    //     // Traverse to the grandparent of the clicked element
    //     // Parent one is list item, parent two is the task
    //     target.parentElement.parentElement.remove();

    //     // Remove from array

    // });
});


addTask.addEventListener('click', function(){

    createTask();

    // Store in array
    taskStorage.push(inputTask.value)
    console.log(taskStorage)

    // Store array in localstorage
    localTaskStorage = localStorage.setItem("taskList", JSON.stringify(taskStorage));

    // Error handling when nothing is entered
    if (inputTask.value === "") {
        inputTask.style.animation = 'jump-shaking 0.83s 1'
        inputTask.style.borderColor = 'red'
    }
    else {
        taskContainer.appendChild(task);
        inputTask.style.borderColor = 'black'
    }

    inputTask.value = ""


    checkButton.addEventListener('click', function(){

        if (checkButton.getElementById !== "checked") {
            checkButton.setAttribute('id', 'checked')
            // Set a line trough the task when the button is clicked
            checkButton.parentElement.style.textDecoration = "line-through";
            checkButton.parentElement.style.transition = ".5s"
        } else {
            // TODO: Doesn't work
            checkButton.removeAttribute('id');
            checkButton.parentElement.style.textDecoration = "none";
            checkButton.parentElement.style.transition = ".5s"
        }

        // Set a line through the task when the checkbutton is clicked
        // checkButton.parentElement.style.textDecoration = "line-through";
        // checkButton.parentElement.style.transition = ".5s"

    });

    deleteButton.addEventListener('click', function(e){

        // Get the element that is clicked (delete button)
        let target = e.target;

        // Traverse to the grandparent of the clicked element
        // Parent one is list item, parent two is the task
        target.parentElement.parentElement.remove();

        // Remove from array

    });

});