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
        optionA: 'A',
        optionB: 'B',
        optionC: 'Slytherin',
        optionD: 'D',
    },
    {
        question: 'Which country gifted the Statue of Liberty to the US?',
        optionA: 'A',
        optionB: 'B',
        optionC: 'C',
        optionD: 'France',
    },
    {
        question: 'What was the name of the Robin Williams film where he dresses up as an elderly British nanny?',
        optionA: 'A',
        optionB: 'B',
        optionC: 'Mrs. Doubtfire',
        optionD: 'D',
    },
    {
        question: 'What is the rarest blood type?',
        optionA: 'AB-Negative',
        optionB: 'B',
        optionC: 'C',
        optionD: 'D',
    },
    {
        question: 'What sport does Cristiano Ronaldo play?',
        optionA: 'A',
        optionB: 'B',
        optionC: 'Soccer/football',
        optionD: 'D',
    },
    {
        question: 'How many bones are there in the human body?',
        optionA: 'A',
        optionB: '206',
        optionC: 'C',
        optionD: 'D',
    },
    {
        question: 'What is the name of the longest river in South America?',
        optionA: 'A',
        optionB: 'Amazon River',
        optionC: 'C',
        optionD: 'D',
    },  
]
const answerArray = ['C','D','C','A','C','B','B']



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