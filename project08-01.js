"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Oleksii Fon Krupp
      Date:   05/12/2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

// Timer constructor function
function Timer(min, sec) {
   this.minutes = min;
   this.seconds = sec;
   this.timeID = null;
}

// Add runPause method to Timer prototype
Timer.prototype.runPause = function(timer, minBox, secBox) {
   if (timer.timeID) {
      clearInterval(timer.timeID);
      timer.timeID = null;
   } else {
      timer.timeID = setInterval(function() {
         countdown();
      }, 1000);
   }
}

// Countdown function for time tracking
function countdown() {
   if (myTimer.seconds > 0) {
      myTimer.seconds--;
   } else if (myTimer.minutes > 0) {
      myTimer.minutes--;
      myTimer.seconds = 59;
   } else {
      clearInterval(myTimer.timeID);
      myTimer.timeID = null;
   }
   minBox.value = myTimer.minutes;
   secBox.value = myTimer.seconds;
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

/* Create Timer Object */
let myTimer = new Timer(parseInt(minBox.value), parseInt(secBox.value));

/* Event Handlers */
minBox.onchange = function() {
   myTimer.minutes = parseInt(minBox.value);
}

secBox.onchange = function() {
   myTimer.seconds = parseInt(secBox.value);
}

runPauseTimer.onclick = function() {
   myTimer.runPause(myTimer, minBox, secBox);
}
