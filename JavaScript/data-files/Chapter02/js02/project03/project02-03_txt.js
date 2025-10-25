/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Daniel Cheeley
      Date:   10/22/25

      Filename: project02-03.js
 */

//Square hover code
document.getElementById("square").addEventListener("mouseover", function() {
      document.getElementById("feedback").innerHTML = "<p>You're hovering over the square</p>";
});

document.getElementById("square").addEventListener("mouseout", function() {
      document.getElementById("feedback").innerHTML = "";
});


//Triangle hover code
document.getElementById("triangle").addEventListener("mouseover", function() {
      document.getElementById("feedback").innerHTML = "<p>You're hovering over the triangle</p>";
});

document.getElementById("triangle").addEventListener("mouseout", function() {
      document.getElementById("feedback").innerHTML = "";
});


//Circle hover code
document.getElementById("circle").addEventListener("mouseover", function() {
      document.getElementById("feedback").innerHTML = "<p>You're hovering over the circle</p>";
});

document.getElementById("circle").addEventListener("mouseout", function() {
      document.getElementById("feedback").innerHTML = "";
});