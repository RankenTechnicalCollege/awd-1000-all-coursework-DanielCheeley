"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: Daniel Cheeley
      Date:   11/26/25

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels

/*--------------- Object Code --------------------*/
let newBall;
let ballImage;
let box = new Object();
box.width = BOX_WIDTH;
box.height = BOX_HEIGHT;
box.xPos = 0;
box.yPos = 0;
Ball.prototype.moveWithin = function(container) {
   let ballTop = this.yPos;
   let ballLeft = this.xPos;
   let ballBottom = this.yPos + this.radius;
   let ballRight = this.xPos + this.radius;
   if(ballTop < 0 || ballBottom > container.height) {
      container.yPos += this.yVelocity;   // (i)
      this.yVelocity = -this.yVelocity;   // (ii)
   }
   if (ballLeft < 0 || ballRight > container.width) {
      container.xPos += this.xVelocity;   // (i)
      this.xVelocity = -this.xVelocity;   // (ii)
   }

   // Move the ball
   this.yPos += this.yVelocity;
   this.xPos += this.xVelocity;
   }


function Ball(size) {
    this.radius = size;
    this.xPos = null;
    this.yPos = null;
    this.xVelocity = null;
    this.yVelocity = null;
}


// Animate the motion of newBall
window.setInterval(function() {

   if(newBall) {

    // 1. Move the ball within the container
    newBall.moveWithin(box);

    // 2. Move the ball image
    ballImage.style.top  = newBall.yPos + "px";
    ballImage.style.left = newBall.xPos + "px";

    // 3. Shake the container image
    boxImage.style.top  = box.yPos + "px";
    boxImage.style.left = box.xPos + "px";
   }

}, 25); // Run every 25 milliseconds

/*---------------Interface Code -----------------*/

// Reference to the container box
let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px";

// Reference to the Add Ball button
let addBall = document.getElementById("addBall");

addBall.onclick = function() {
      
   addBall.onclick = function() {
      
   // assign to global variable
   ballImage = document.createElement("div");
   ballImage.className = "ball";
   ballImage.style.width = BALL_RADIUS + "px";
   ballImage.style.height = BALL_RADIUS + "px";
   ballImage.style.left = (BOX_WIDTH - BALL_RADIUS) / 2 + "px";
   ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS) / 2 + "px";
   
   boxImage.appendChild(ballImage);

   // assign to global variable
   newBall = new Ball(BALL_RADIUS);
   newBall.yPos = (BOX_HEIGHT - BALL_RADIUS) / 2;
   newBall.xPos = (BOX_WIDTH - BALL_RADIUS) / 2;
   newBall.xVelocity = rand(-10, 10);
   newBall.yVelocity = rand(-10, 10);
};

   
};


/* Function to return a random value between minVal and maxValue */
function rand(minVal, maxVal) {
   let size = maxVal - minVal + 1;
   return minVal + size*Math.random();
}