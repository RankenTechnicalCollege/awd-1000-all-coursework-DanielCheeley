const adminEmail = "admin@example.com";
const adminPwd = "password";

let errorBox = document.getElementById("errorBox");
let submitButton = document.getElementById("submitBtn");
let inputEmail = document.getElementById("email");
let inputPwd = document.getElementById("pwd");


submitButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  submitButton.style.borderRadius = 0;
  if(inputEmail.value.trim() == "" || inputPwd.value.trim() == "") {
    errorBox.textContent = "You seem to have forgotten your username and password";
  } else if (inputEmail.value = "admin@example.com" && inputPwd.value =="password") {
    errorBox.className = "text-success";
    errorBox.textContent = "Welcome back Admin!";
  } else {
    errorBox.textContent = "That email and password doesn't seem to be right. Try again.";
  }
});