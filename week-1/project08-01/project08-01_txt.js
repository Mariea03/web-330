"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author:Mariea Nies
      Date:05/30/2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/







/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// Constructor function for timer
function timer(min, sec) {
timer.minutes = min
timer.seconds = sec
timer.timeID = null
}

timer.prototype.runPause = function(minBox, secBox){
  if (this.timeID) {
    clearInterval(this.timeID);
    this.timeID = null;
  } else {
    this.timeID = setInterval (() => {
      this.countdown(minBox, secBox);
  }, 1000);
 }
};

timer.prototype.countdown = function(minBox, secBox) {
  if (this.seconds > 0) {
    this.seconds -=1;
  } else if (this.minutes > 0) {
    this.minutes -= 1;
    this.seconds = 59;
  } else {
    clearInterval(this.timeID);
    this.timeID = null;
  }

  minBox.value = this.minutes;
  secBox.value = this.seconds;
}


  let myTimer = new timer(parseInt(minBox.value)|| 0, parseInt(secBox.value)|| 0);

  minBox.onchange = function() {
    myTimer.minutes = parseInt(minBox.value) || 0;
  };

  secBox.onchange = function() {
    myTimer.seconds = parseInt(secBox.value) || 0;
  }

  runPauseTimer.onclick = function() {
    myTimer.runPause(minBox, secBox);
  };
