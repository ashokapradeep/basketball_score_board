let hScore=0
let gScore=0
document.getElementById("homeScore").textContent = hScore
document.getElementById("guestScore").textContent = gScore
let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")

function hAddOne(){
    hScore += 1
    homeScore.textContent = hScore
}
function hAddTwo(){
    hScore += 2
    homeScore.textContent = hScore
}

function hAddThree(){
    hScore += 3
    homeScore.textContent = hScore
}

function gAddOne(){
    gScore += 1
    guestScore.textContent = gScore
}
function gAddTwo(){
    gScore += 2
    guestScore.textContent = gScore
}

function gAddThree(){
    gScore += 3
    guestScore.textContent = gScore
}

function reset(){
    hScore=0
    gScore=0
    document.getElementById("homeScore").textContent = hScore
    document.getElementById("guestScore").textContent = gScore
    /*stopTime()*/
}

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

/*
window.onload = function () {
    const ninetyMinutes = 60 * 90,
        display = document.querySelector('#time');
    startTimer(ninetyMinutes, display);
}*/
function startTime(){
    const ninetyMinutes = 60 * 90,
        display = document.querySelector('#time');
    startTimer(ninetyMinutes, display);
}
/*

function stopTime(){
    const ninetyMinutes = 0 * 0,
        display = document.querySelector('#time');
    startTimer(ninetyMinutes, display);
}*/
