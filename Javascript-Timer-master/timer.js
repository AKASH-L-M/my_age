/**********************************************************
*										 				  *
* Title    : JavaScript Reverse Countdown Clock  				  *
* Author   : [Your Name]          				  *
* Created  : [Current Date]           				  *
*										 				  *
***********************************************************/

let countdown; // setInterval function for countdown clock
const clock = document.getElementById('clock'); // div that controls the clock container
const daysUnit = document.querySelector('.days'); // span element that displays the amount of days
const hoursUnit = document.querySelector('.hours'); // span element that displays the amount of hours
const minutesUnit = document.querySelector('.minutes'); // span element that displays the amount of minutes
const secondsUnit = document.querySelector('.seconds'); // span element that displays the amount of seconds

const startDate = new Date(2000, 9, 13, 0, 0, 0).getTime(); // October 13, 2000, at midnight

// timer function takes in a date parameter in milliseconds
function timer(date) {
  // countdown holds the entire timer functionality
  countdown = setInterval(() => {
    const now = Date.now(); // current date and time
    const differenceInTime = now - date; // distance between current time and the past time

    timePassed(differenceInTime); // each iteration of setInterval sends updated time difference to timePassed function
  }, 1000); // every 1 second
}

// timePassed function takes a time as a parameter in milliseconds and displays it in Days, Hours, Minutes, and Seconds
function timePassed(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24)); // milliseconds into days
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // milliseconds into hours
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); // milliseconds into minutes
  const seconds = Math.floor((time % (1000 * 60)) / 1000); // milliseconds into seconds

  // conditional added to each portion of the time that will be displayed adds a zero to the front of numbers < 10
  const displayDays = `${days < 10 ? '0' : ''}${days}`; // days string that will be displayed
  const displayHours = `${hours < 10 ? '0' : ''}${hours}`; // hours string that will be displayed
  const displayMinutes = `${minutes < 10 ? '0' : ''}${minutes}`; // minutes string that will be displayed
  const displaySeconds = `${seconds < 10 ? '0' : ''}${seconds}`; // seconds string that will be displayed

  // displays the time strings on the page individually
  daysUnit.textContent = displayDays;
  hoursUnit.textContent = displayHours;
  minutesUnit.textContent = displayMinutes;
  secondsUnit.textContent = displaySeconds;
}

// Start the countdown timer with the initial start date
timer(startDate);
