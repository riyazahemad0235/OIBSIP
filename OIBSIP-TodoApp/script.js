
let taskInput = document.querySelector("#inputArea")
let inputButton = document.querySelector("#inputButton")
let taskList = document.querySelector(".taskList")
let description = document.querySelector("#description")
let completeList = document.querySelector(".completeList")

inputButton.addEventListener("click", () => {
    console.log(description.value)
    let taskText = taskInput.value.trim()
    if (taskText === "") return;

    const li = document.createElement("li")
    li.classList.add("todoList")

    const span = document.createElement("span")
    span.classList.add("taskText")
    span.textContent = taskText;
    li.classList.add("list1")
    let li2 = document.createElement("li");
    li2.classList.add("list2")
    let span2 = document.createElement("span");
    span2.classList.add("completeTask")
    span2.textContent = taskText;

    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.classList.add("checkBox")
    checkBox.addEventListener("click", (e) => {
        let deleteComTask = document.createElement("button")
        deleteComTask.textContent = "X"
        const desCom = document.createElement("p")
        desCom.textContent = descriptionArea.textContent
        desCom.classList.add("desCom")
        deleteComTask.classList.add("deleteTask")
        li2.append(span2, desCom, deleteComTask);
        completeList.appendChild(li2)
        li.remove()
        deleteComTask.addEventListener("click", () => {
            li2.remove()
        })

    })

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("deleteBtn")
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click", () => { li.remove() })

    // container to keep checkbox and delete button side by side
    const btnContainer = document.createElement("div")
    const descriptionArea = document.createElement("div")
    descriptionArea.classList.add("descriptionArea")
    const area = document.createElement("h3");
    area.innerText = description.value
    descriptionArea.style.display = "flex"
    btnContainer.style.display = "flex"
    btnContainer.style.gap = "10px"
    btnContainer.append(checkBox, deleteBtn)
    descriptionArea.append(area);


    li.append(span, btnContainer, descriptionArea)
    taskList.appendChild(li)
    taskInput.value = ""
    description.value = ""
})