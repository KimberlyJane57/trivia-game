const scorecard = document.querySelector('.scorecard')
const timer = document.querySelector('.timer')
const startbtn = document.querySelector('#start-btn')
const questions = document.querySelector('.questions')
const answerBtn = document.querySelector('.answer-btns')
const abcdBtn = document.querySelector('#abcd-btns')
const multipleChoice = document.querySelector('.mc-btn')
const startTime = 60;

function start() {
    console.log('Started')
    nextQuestion()
}


countdownClock = '00:$(startTime)';

const countdown = setInterval (()=>{
    startTime--;
    displayTimer(startTime);
    if(startTime <= 0 || startTime < 1){
        clearInterval(countdown);
    }
},1000)

function displayTimer(second) {}

function nextQuestion() {

}

function selection() {

}