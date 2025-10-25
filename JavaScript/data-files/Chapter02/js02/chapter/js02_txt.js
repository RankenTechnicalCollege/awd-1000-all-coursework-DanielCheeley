/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Daniel Cheeley
      Date:   10/23/25

      Filename: js02.js
 */


const EMP_COST = 100;
const BOOK_COST = 350;
const REPRO_COST = 1250;
const TRAVEL_COST = 2;

window.addEventListener("load", setupForm);


function formatCurrency(value) {
    return "$" + value;
 }

function setupForm() {
      document.getElementById("photoNum").value = 1;
      document.getElementById("photoHrs").value = 2;
      document.getElementById("makeBook").checked = false;
      document.getElementById("photoRights").checked = false;
      document.getElementById("photoDist").value = 0;

      //event handlers
      document.getElementById("photoNum").onchange = totalEstimate;
      document.getElementById("photoHrs").onchange = totalEstimate;
      document.getElementById("photoDist").onchange = totalEstimate;
      document.getElementById("makeBook").onchange = totalEstimate;
      document.getElementById("photoRights").onchange = totalEstimate;
      totalEstimate();
}

function totalEstimate() {
      //vars to get values and to initialize costEstimate
      let costEstimate = 0;
      let photograhpers = document.getElementById("photoNum").value;
      let hours = document.getElementById("photoHrs").value;
      let distance = document.getElementById("photoDist").value;
      let buyBook = document.getElementById("makeBook").checked;
      let buyRights = document.getElementById("photoRights").checked;
      
      //for the price of hours and distance
      costEstimate += photograhpers * hours * EMP_COST;
      costEstimate += photograhpers * distance * TRAVEL_COST;
      
      //for the rights and book
      if (buyBook == true) {
            costEstimate += BOOK_COST;
      }
      if (buyRights == true) {
            costEstimate += REPRO_COST;
      }
      document.getElementById("estimate").innerHTML = formatCurrency(costEstimate);
}