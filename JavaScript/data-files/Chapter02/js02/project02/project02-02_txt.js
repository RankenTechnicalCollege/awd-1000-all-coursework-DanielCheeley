/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Daniel Cheeley
      Date:   10/22/25

      Filename: project02-02.js
 */
 function verifyFourm() {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;

      (name && email && phone)
      ? window.alert("Thank You")
      : window.alert("Please Fill Out All Fields");
 }

 document.getElementById("submit").addEventListener("click", verifyFourm);