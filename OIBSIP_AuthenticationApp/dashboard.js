let username = document.querySelector("#username")

let data = localStorage.getItem("user")
user = JSON.parse(data)

console.log(user.name)
username.textContent = user.name