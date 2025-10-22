/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Daniel Cheeley
      Date:   10/22/26

      Filename: project02-04.js
 */
 




// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

const CHICKEN_PRICE = 10.95, HALIBUT_PRICE = 13.95, BURGER_PRICE = 9.95, SALMON_PRICE = 18.95, SALAD_PRICE = 7.95, SALES_TAX = 0.07



//run calcTotal when checkbox is clicked
document.getElementById("chicken").addEventListener("change", calcTotal);
document.getElementById("halibut").addEventListener("change", calcTotal);
document.getElementById("burger").addEventListener("change", calcTotal);
document.getElementById("salmon").addEventListener("change", calcTotal);
document.getElementById("salad").addEventListener("change", calcTotal);

//check to see what is selecten to change the total accordingly
function calcTotal() {
   let cost = 0;
   let buyChicken = document.getElementById("chicken").checked;
   let buyHailibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   if (buyChicken == true) {
      alert("here");
      cost + CHICKEN_PRICE;
   }

   if (buyHailibut == true) {
      cost + HALIBUT_PRICE;
   }

   if (buyBurger == true) {
      cost + BURGER_PRICE;
   }

   if (buySalmon == true) {
      cost + SALMON_PRICE;
   }

   if (buySalad == true) {
      cost + SALAD_PRICE;
   }

   return cost;
}

//total cost of all items
document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

//for tax
let tax = cost * SALES_TAX;
document.getElementById("foodTax").innerHTML = formatCurrency(tax);

//for total cost
let totalCost = cost + tax;
document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);