const taskInput = document.querySelector("#inputArea");
const description = document.querySelector("#description");
const inputButton = document.querySelector("#inputButton");
const taskList = document.querySelector(".taskList");
const completeList = document.querySelector(".completeList");

// 1. Load data on startup
let todos = JSON.parse(localStorage.getItem("userData")) || [];

// 2. Render tasks immediately when the page loads
renderTasks();

// 3. Add a New Task
inputButton.addEventListener("click", () => {
  let taskText = taskInput.value.trim();
  let descriptionVal = description.value.trim();

  if (taskText === "") {
    alert("Please enter a task name!");
    return;
  }

  const userData = {
    id: Date.now(),
    taskName: taskText,
    description: descriptionVal,
    completed: false,
  };

  todos.push(userData);
  saveData();
  renderTasks();

  // Clear inputs
  taskInput.value = "";
  description.value = "";
});

// Helper function to save to Local Storage
function saveData() {
  localStorage.setItem("userData", JSON.stringify(todos));
}

// 4. The Render Function
function renderTasks() {
  // Clear both lists completely before redrawing
  taskList.innerHTML = "";
  completeList.innerHTML = "";

  todos.forEach((todo, index) => {
    // Create the main list item
    const li = document.createElement("li");
    li.classList.add("todoList");

    // Task Name
    const span = document.createElement("span");
    span.classList.add("taskText");
    span.textContent = todo.taskName;

    // Description Area
    const descriptionArea = document.createElement("div");
    descriptionArea.classList.add("descriptionArea");

    if (todo.description !== "") {
      const area = document.createElement("p");
      area.innerText = todo.description;
      descriptionArea.append(area);
    }

    // Button Container
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btnContainer");

    // Checkbox
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkBox");
    checkBox.checked = todo.completed;

    checkBox.addEventListener("change", () => {
      todos[index].completed = !todos[index].completed;
      saveData();
      renderTasks();
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      saveData();
      renderTasks();
    });

    btnContainer.append(checkBox, deleteBtn);

    // Group the title and buttons in a row
    const topRow = document.createElement("div");
    topRow.classList.add("topRow");
    topRow.append(span, btnContainer);

    // Add everything to the list item
    li.append(topRow, descriptionArea);

    // Append to the correct HTML list based on status
    if (todo.completed) {
      completeList.appendChild(li);
    } else {
      taskList.appendChild(li);
    }
  });
}
