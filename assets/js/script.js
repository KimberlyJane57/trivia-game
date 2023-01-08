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
        question: 'Which house was Harry Potter almost sorted into?',
        option1: 'A',
        option2: 'B',
        option3: 'Slytherin',
        option4: 'D',
        answer: 3,
    },
    {
        question: 'Which country gifted the Statue of Liberty to the US?',
        option1: 'A',
        option2: 'B',
        option3: 'C',
        option4: 'France',
        answer: 4,
    },
    {
        question: 'What was the name of the Robin Williams film where he dresses up as an elderly British nanny?',
        option1: 'A',
        option2: 'B',
        option3: 'Mrs. Doubtfire',
        option4: 'D',
        answer: 3,
    },
    {
        question: 'What is the rarest blood type?',
        option1: 'AB-Negative',
        option2: 'B',
        option3: 'C',
        option4: 'D',
        answer: 1,
    },
    {
        question: 'What sport does Cristiano Ronaldo play?',
        option1: 'A',
        option2: 'B',
        option3: 'Soccer/football',
        option4: 'D',
        answer: 3,
    },
    {
        question: 'How many bones are there in the human body?',
        option1: 'A',
        option2: '206',
        option3: 'C',
        option4: 'D',
        answer: 2,
    },
    {
        question: 'What is the name of the longest river in South America?',
        option1: 'A',
        option2: 'Amazon River',
        option3: 'C',
        option4: 'D',
        answer: 2,
    } 
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