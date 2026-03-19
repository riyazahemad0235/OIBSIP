let taskInput = document.querySelector("#inputArea");
let inputButton = document.querySelector("#inputButton");
let taskList = document.querySelector(".taskList");
let description = document.querySelector("#description");
let completeList = document.querySelector(".completeList");

inputButton.addEventListener("click", () => {
  let taskText = taskInput.value.trim();
  let descText = description.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.classList.add("todoList");

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("todoList-header");

  const span = document.createElement("span");
  span.classList.add("taskText");
  span.textContent = taskText;

  // Setup for Completed Task List
  let li2 = document.createElement("li");
  li2.classList.add("list2");

  let span2 = document.createElement("span");
  span2.classList.add("completeTask");
  span2.textContent = taskText;

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("checkBox");

  checkBox.addEventListener("click", () => {
    let deleteComTask = document.createElement("button");
    deleteComTask.textContent = "X";
    deleteComTask.classList.add("deleteTask");

    const desCom = document.createElement("p");
    desCom.textContent = descText;
    desCom.classList.add("desCom");

    li2.append(span2, desCom, deleteComTask);
    completeList.appendChild(li2);
    li.remove();

    deleteComTask.addEventListener("click", () => {
      li2.remove();
    });
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btnContainer");
  btnContainer.append(checkBox, deleteBtn);

  headerDiv.append(span, btnContainer);
  li.appendChild(headerDiv);

  if (descText !== "") {
    const descriptionArea = document.createElement("div");
    descriptionArea.classList.add("descriptionArea");
    const area = document.createElement("p");
    area.innerText = descText;
    descriptionArea.append(area);
    li.appendChild(descriptionArea);
  }

  taskList.appendChild(li);
  taskInput.value = "";
  description.value = "";
});
