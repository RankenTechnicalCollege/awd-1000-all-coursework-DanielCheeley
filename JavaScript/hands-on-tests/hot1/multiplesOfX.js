document.getElementById("numbersBtn").addEventListener("click", printnumbers);


function printnumbers() {
  document.getElementById("multiplesNumbers").innerHTML = "";
  for (i = 0; i <= 100; i++) {
    //function to determine weather a value is odd or not
    function isMultiple(i) {
      return i % 15; //checks the remainder because if the remainder is 0 that means that it devided by 0 equally, but if there is a remainder that means that it didnt and its a multiple of 15 | returns true or false
    }

    if (isMultiple(i) == true && i !== 1) { //and statement to get rid of the 0 because its false
      document.getElementById("multiplesNumbers").insertAdjacentHTML("beforeend", i - 1 + "<br>"); //-1 is to offset when it adds to i before it prints
    }
  }
}


//for your own number to check
document.getElementById("yourNumbersBtn").addEventListener("click", printYourNumbers);

let parentElement = document.getElementById("input");
for (i = 2; i <= 100; i++) {
  let newOption = document.createElement("option");
  newOption.textContent = `${i}`;
  newOption.setAttribute("value", `${i}`);
  parentElement.appendChild(newOption);
}

function printYourNumbers() {
  document.getElementById("yourMultiplesNumbers").innerHTML = "";
  for (i = 0; i <= 100; i++) {
    let inputvalue = document.getElementById("input").value;
    //function to determine weather a value is odd or not
    function isYourMultiple(i) {
      return i % inputvalue; //checks the remainder because if the remainder is 0 that means that it devided by 0 equally, but if there is a remainder that means that it its a multiple of 15 | returns true or false
    }

    if (isYourMultiple(i) == true && i !== 1) { //and statement to get rid of the 0 because its false
      document.getElementById("yourMultiplesNumbers").insertAdjacentHTML("beforeend", i - 1 + "<br>"); //-1 is to offset when it adds to i before it prints
    }
  }
}