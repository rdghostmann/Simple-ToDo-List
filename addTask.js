// Function to add a new task to the list
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
      alert("Please enter a task!");
      return;
  }

  let li = document.createElement("li");
  li.innerHTML = `${taskText} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;

  li.addEventListener("click", function() {
      this.classList.toggle("completed");
  });

  document.getElementById("todoList").appendChild(li);

  // Clear the input after adding the task
  taskInput.value = "";
}

// Function to delete a task from the list
function deleteTask(element) {
  var li = element.parentElement;
  li.remove();
}
