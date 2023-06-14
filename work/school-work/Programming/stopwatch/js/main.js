// Variables

// Buttons
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#reset');

// Time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for setting interval and timer status
let timerInterval = null;
let timerStatus = "stopped"


// Stopwatch fucntion
function stopwatch() {
    
    // Increment seconds
    seconds++

    if (seconds / 60 === 1) {
        // When 60 seconds is reached, reset the seconds value and incrment the minutes
        seconds = 0;
        minutes ++;        

        if (minutes / 60 === 1) {
            // When 60 minutes is reached, reset the minutes value and incrment the hours
            minutes = 0;
            hours ++;
        }
    }

    // TODO Show 0 in front if lower then 10
    //* Seconds
    if (seconds < 10) {
        // If the seconds is under 10, put a zero in front / turn the seconds into a string instead of an int
        leadingSeconds = "0" + seconds.toString();
    }
    else {
        // If the seconds are not under 10, just use the value of seconds
        leadingSeconds = seconds;
    }

    //* Minutes
    if (minutes < 10) {
        // If the minutes is under 10, put a zero in front / turn the minutes into a string instead of an int
        leadingMinutes = "0" + minutes.toString();
    }
    else {
        // If the minutes are not under 10, just use the value of minutes
        leadingMinutes = minutes;
    }

    //* Hours
    if (hours < 10) {
        // If the hours is under 10, put a zero in front / turn the hours into a string instead of an int
        leadingHours = "0" + hours.toString();
    }
    else {
        // If the hours are not under 10, just use the value of hours
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// window.setInterval(stopwatch, 1000)

startStopBtn.addEventListener('click', function(){
    // Check if timer status is equal to "stopped"
    if (timerStatus === "stopped") {
        // If the button is pressed while the timer status was stopped, start the interval of our function
        timerInterval = window.setInterval(stopwatch, 1000);
        // Turn the start button into a pause button when the strat button is pressed
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        // Turn the timerStatus into "started" to let the timer know it has started
        timerStatus = "started";
    }
    else {
        // Stops timer
        window.clearInterval(timerInterval);
        // Turns the pause button into a play button
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        // Turns the timerStatus to "stopped" to let the timer know it has stopped
        timerStatus = "stopped"
    }
});

resetBtn.addEventListener('click', function() {

    // Stops timer
    window.clearInterval(timerInterval)

    // Reset seconds
    seconds = 0;

    // Reset minutes
    minutes = 0;

    // Reset hours
    hours = 0;

    // Update in browser
    document.getElementById('timer').innerHTML = "00:00:00"
    // Turns the pause button into a play button
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    // Turns the timerStatus to "stopped" to let the timer know it has stopped
    timerStatus = "stopped"

});