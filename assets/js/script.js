const scorecard = document.querySelector('.scorecard')
const timer = document.querySelector('.timer')
const startBtn = document.querySelector('#start-btn')
const questions = document.querySelector('.questions')
const answerBtn = document.querySelector('.answer-btns')
const abcdBtn = document.querySelector('#abcd-btns')
const multipleChoice = document.querySelector('.mc-btn')
const startTime = 60;
const questionsArray = [
    {
        question: "The question goes here?",
        answers: [
            {
                letter: "A",
                text: "Answer for A"

            },
            {
                letter: "B",
                text: "Answer for B"

            },
            {
                letter: "C",
                text: "Answer for C"

            },
            {
                letter: "D",
                text: "Answer for D"

            },
        ],
        solution: "A"
    },
]

startBtn.addEventListener('click', start)

function start() {
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