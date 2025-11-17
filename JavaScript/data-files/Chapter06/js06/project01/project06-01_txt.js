"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Daniel Cheeley
      Date:   11/17/25

      Filename: project06-01.js
*/

submitButton.addEventListener("click", () => {
    if (pwd.validity.patternMismatch) {
        pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
    }
    else if (pwd.value !== pwd2.value) {
        pwd.setCustomValidity("Your passwords must match");
    }
    else {
        pwd.setCustomValidity("");
    }
});
