const countdownTimer = document.querySelector(timer);
const startTime = 60;

countdownClock = '00:$(startTime)';

const countdown = setInterval (()=>{
    startTime--;
    displayTimer(startTime);
    if(startTime <= 0 || startTime < 1){
        clearInterval(countdown);
    }
},1000)

function displayTimer(second) {}