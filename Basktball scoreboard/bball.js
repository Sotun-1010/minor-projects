let homeScore = document.querySelector('.home-score');
let awayScore = document.querySelector('.away-score');
let homeButtonOne = document.querySelector('#h1')
let homeButtonTwo = document.querySelector('#h2')
let homeButtonThree = document.querySelector('#h3')
let awayButtonOne = document.querySelector('#a1')
let awayButtonTwo = document.querySelector('#a2')
let awayButtonThree = document.querySelector('#a3')
let resetBtn = document.getElementById('reset')
let homeInteger = 0;
let awayInteger = 0;
let mins = document.querySelector('#mins')
let secs = document.querySelector('#secs')

let startTimer = document.querySelector('#strt');
let resetTimer = document.querySelector('#timereset');


// this is the  point buttons
homeButtonOne.addEventListener('click', function() {
    homeInteger += 1;
    homeScore.innerHTML = homeInteger;
})

homeButtonTwo.addEventListener('click', function() {
    homeInteger += 2;
    homeScore.innerHTML = homeInteger;
})

homeButtonThree.addEventListener('click', function() {
    homeInteger += 3;
    homeScore.innerHTML = homeInteger;
})

awayButtonOne.addEventListener('click', function() {
    awayInteger += 1;
    awayScore.innerHTML = awayInteger;
})

awayButtonTwo.addEventListener('click', function() {
    awayInteger += 2;
    awayScore.innerHTML = awayInteger;
})

awayButtonThree.addEventListener('click', function() {
    awayInteger += 3;
    awayScore.innerHTML = awayInteger;
})

resetBtn.addEventListener('click', function() {
    homeInteger = 0;
    awayInteger = 0;
    awayScore.innerHTML = awayInteger;
    homeScore.innerHTML = homeInteger;
})




// this is for the time aspect
var timer = null;
var remainingSeconds = 720;

startTimer.addEventListener('click', () => {
    if(timer === null) {
        start();
    } else {
        stop();
    }
})

resetTimer.addEventListener('click', () => {
    remainingSeconds = 720;
    updateInterfaceTime();
})

function updateInterfaceTime(){
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    mins.textContent = minutes.toString().padStart(2, '0');
    secs.textContent = seconds.toString().padStart(2, '0');
}

function updateInterfaceControls(){
    if(timer === null) {
        startTimer.innerHTML = 'START';
        startTimer.style.backgroundColor = 'rgb(28, 185, 75)'
    } else {
        startTimer.innerHTML = 'STOP';
        startTimer.style.backgroundColor = 'rgb(216, 40, 34)'
    }
}

function start() {
    if(remainingSeconds === 0) return;
    timer = setInterval(() => {
        remainingSeconds--;
        updateInterfaceTime();

    if(remainingSeconds === 0) {
        stop();
    }
    }, 1000);

    updateInterfaceControls();
}

function stop () {
    clearInterval(timer);
    timer = null;
    updateInterfaceControls();
}