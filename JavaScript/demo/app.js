"use strict";

//---------------------------------------------
//constructor function for user created objects
//---------------------------------------------
function car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.speed = 0;

  this.accelerate = function() {
    this.speed += 5;
  }
  this.brake = function() {
    if(this.speed > 0) {
      this.speed -= 5;
    }
  }

  this.describe = function() {
    return `${this.brand} ${this.model} - Speed: ${this.speed} mph`;
  }
}

//----------------------------------------------
//UI logic--------------------------------------
//----------------------------------------------
let currentCar = null

let brandInput = document.getElementById("brandInput");
let modelInput = document.getElementById("modelInput");
let outputBox = document.getElementById("output");

let createBtn = document.getElementById("createCarBtn");
let accelerateBtn = document.getElementById("accelerateBtn");
let brakeBtn = document.getElementById("brakeBtn");

//create a new car when btn clicked
createBtn.onclick = function() {
  let brand = brandInput.value.trim();
  let model = modelInput.value.trim();

  if(brand === "" || model === "") {
    outputBox.textContent = "Please enter both brand and model";
    return;
  }

  currentCar = new car(brand, model);

  accelerateBtn.disabled = false;
  brakeBtn.disabled = false;

  outputBox.textContent = currentCar.describe();
}

//accelerate button
accelerateBtn.onclick = function() {
  currentCar.accelerate();
  outputBox.textContent = currentCar.describe();
}

//brake button
brakeBtn.onclick = function() {
  currentCar.brake();
  outputBox.textContent = currentCar.describe();
}