document.getElementById("oddBtn").addEventListener("click", printnumbers);


function printnumbers() {
  for (i = 1; i <= 100; i++) {
    //function to determine weather a value is odd or not
    function isOdd(i) {
      return i % 2 !== 0; //checks the remainder because if the remainder is 0 that means that it devided by 0 equally, but if there is a remainder that means that it didnt and itss an odd number | returns true or false
    }

    if (isOdd(i) == true) {
      document.getElementById("oddNumbers").insertAdjacentHTML("beforeend", i + "<br>");
    }
  }
}