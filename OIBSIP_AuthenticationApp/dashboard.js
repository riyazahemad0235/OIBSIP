let username = document.querySelector("#username");
let loginCounts = document.querySelector(".loginCounts");
let user = JSON.parse(localStorage.getItem("loggedInUser"));
let logoutBtn = document.querySelector(".logoutBtn");
let securityBtn = document.querySelector("#changePassword");
let mainContainer = document.querySelector(".mainContainer");
let body = document.querySelector("body");
username.textContent = user.name;

loginCounts.textContent = user.loginCount;

logoutBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

securityBtn.addEventListener("click", () => {
  window.location.href = "changePass.html";
  //   mainContainer.innerHTML = "";
  //   let changePassPage = document.createElement("div");
  //   changePassPage.classList.add("changePassPage");
  //   mainContainer.classList.remove("mainContainer");
  //   mainContainer.classList.add("mainBox");
  //   let changePassHeading = document.createElement("h1");
  //   changePassHeading.classList.add("changePassHeading");
  //   changePassHeading.textContent = "Change Password";
  //   changePassPage.append(changePassHeading);
  //   mainContainer.appendChild(changePassPage);
});
