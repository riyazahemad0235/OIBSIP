let username = document.querySelector("#username")
let loginCounts = document.querySelector(".loginCounts")
let user = JSON.parse(localStorage.getItem("loggedInUser"));
let logoutBtn = document.querySelector("button")
username.textContent = user.name;

loginCounts.textContent = user.loginCount

logoutBtn.addEventListener("click", () => {
    window.location.href = "index.html"
})