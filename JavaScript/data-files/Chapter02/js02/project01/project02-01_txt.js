/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Daniel Cheeley
      Date:   10/22/25

      Filename: project02-01.js
 */

function fahrenheitToCelsius(degree) {
      degree = (degree - 32) / 1.8;
      return degree;
}

function celsiusToFahrenheit(degree) {
      degree = (degree * 1.8) + 32;
      return degree;
}

document.getElementById("cValue").addEventListener("change", function() {
      let cDegree = document.getElementById("cValue").value;

      document.getElementById("fValue").value = celsiusToFahrenheit(cDegree);
});

document.getElementById("fValue").addEventListener("change", function() {
      let fDegree = document.getElementById("fValue").value;

      document.getElementById("cValue").value = fahrenheitToCelsius(fDegree);
});