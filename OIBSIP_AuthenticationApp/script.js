let username = document.querySelector(".username");
let password = document.querySelector("#password");
let singin = document.querySelector(".signin")
let loginSection = document.querySelector(".loginContainer")

singin.addEventListener("click", () => {
    let data = localStorage.getItem('user');
    let users = JSON.parse(localStorage.getItem("users")) || []; let Message = document.createElement("h1");
    console.log(localStorage.getItem("user"))
    let validUser = users.find((user) => {
        return user.email === username.value && user.password === password.value;
    });
    if (validUser) {
        validUser.loginCount++;
        let loader = document.createElement("div");
        loginSection.innerHTML = ""
        let successBox = document.createElement("div");
        loader.classList.add("loader");
        successBox.classList.add("successBox");
        Message.classList.add("successMessage");
        successBox.append(loader, Message);
        loginSection.appendChild(successBox);
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("loggedInUser", JSON.stringify(validUser));

        setTimeout(() => {
            loader.classList.add("none")
            Message.textContent = "Logged in Successfull"
            let para = document.createElement("span");
            para.innerHTML = "<i class='fa-solid fa-check-double' id='check'></i>"
            Message.appendChild(para)
        }, 2000)

        const message = document.querySelector(".successMessage");
        setTimeout(() => {
            message.classList.add("showMessage");
            setTimeout(() => {

                window.location.href = "dashboard.html";
            }, 2000);
        }, 2500)

    }
    else {
        let loader = document.createElement("div");
        loginSection.innerHTML = ""
        let successBox = document.createElement("div");
        loader.classList.add("loader");
        successBox.classList.add("successBox");
        Message.classList.add("failedMessage");
        successBox.append(loader, Message);
        loginSection.appendChild(successBox);

        setTimeout(() => {
            loader.classList.add("none")
            Message.textContent = "Invalid credentials"
            message.classList.add("showMessage");
            Message.classList.add("errorMessage", "showError");
            let span = document.createElement("span");
            let p = document.createElement("p")
            p.innerText = "Try again"
            span.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>"
            span.append(p)
            Message.appendChild(span)

        }, 2000)

        const message = document.querySelector(".failedMessage");
        setTimeout(() => {
            message.classList.add("showMessage");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2500);
        }, 2500)

    }

    for (i = 0; i < 0; i++) {
        let count = 0
        count = count + 1
        console.log(count++)
        let counts = localStorage.setItem("count", count)
    }
})
// loader.classList.add("loader");
// successBox.classList.add("successBox");
// failedMessage.classList.add("failedMessage");

// successBox.append(loader, failedMessage);
// loginSection.appendChild(successBox);

// setTimeout(() => {
//     loader.classList.add("none")
//     failedMessage.textContent = "Invalid credentials, username or password is wrong"
// }, 2000)

// const message = document.querySelector(".failedMessage");

// setTimeout(() => {
//     message.classList.add("showMessage");
//     // setTimeout(() => {
//     //     // window.location.href = "index.html";
//     // }, 2000);
// }, 2000)