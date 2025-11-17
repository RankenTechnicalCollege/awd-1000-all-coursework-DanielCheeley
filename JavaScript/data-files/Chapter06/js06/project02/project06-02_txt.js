"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: Daniel Cheeley
      Date:   11/17/25

      Filename: project06-02.js
*/


window.addEventListener("load", function() {
      let allSelect = this.document.querySelectorAll("form#govLinks select");

      for(let i = 0; i < allSelect.length; i++) {
            allSelect[i].addEventListener("change", function(evt) {
                  let linkURL = evt.target.value;
                  window.open(linkURL);
            });
      }
});