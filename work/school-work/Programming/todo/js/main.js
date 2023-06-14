// Variables

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
// Array for task
const taskStorage = [];

// Forreach to get local storage

// Event listener for add button
addTask.addEventListener('click', function(){

    // Creating the task
    let task = document.createElement('article');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    // Creating the check button
    let checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton)

    // Creating the delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

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