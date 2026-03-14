let name = document.querySelector(".name");
let email = document.querySelector(".email");
let password = document.querySelector("#password");
let register = document.querySelector(".register");
let loginSection = document.querySelector(".loginContainer")

register.addEventListener("click", () => {
    let users = JSON.parse(localStorage.getItem("users")) || []
    let user = {
        name: name.value,
        email: email.value,
        password: password.value,
        loginCount: 0
    };
    users.push(user)

    localStorage.setItem("users", JSON.stringify(users));
    loginSection.innerHTML = "";

    // create success message
    let successBox = document.createElement("div")
    successBox.classList.add("successBox")
    let success = document.createElement("h1");
    let loader = document.createElement("loader");
    loginSection.classList.add("loginSection")
    loader.classList.add("loader")
    success.classList.add("successMessage");
    successBox.append(success, loader)
    loginSection.appendChild(successBox);
    setTimeout(() => {
        loader.classList.add("none")
        success.textContent = "Registration Successful ✅";
        redirecting.textContent = "Redirecting......"
    }, 2000)
    let message = document.querySelector(".successMessage");;

    setTimeout(() => {
        message.classList.add("showMessage");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    }, 2000);


})  