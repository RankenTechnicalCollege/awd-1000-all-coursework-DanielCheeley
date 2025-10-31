let button = document.getElementById("verifyBtn");
let verifyResult = document.getElementById("verifyResult");

button.addEventListener("click", verifyAge);

function verifyAge() {
  let inputValue = Number(document.getElementById("input").value);

  if (isNaN(inputValue)) {
    verifyResult.textContent = "Please enter your age!";
  } 
  else if (inputValue < 1 || inputValue > 200) {
    verifyResult.textContent = "Age out of range!";
  } 
  else if (inputValue < 21) {
    verifyResult.textContent = "You're not old enough!";
  } 
  else {
    verifyResult.textContent = "Welcome to the venue!";
  }

  document.getElementById("input").value = '';
}