const scorecard = document.getElementById('scorecard');
const startBtn = document.getElementById('start-btn');
const answerBtn = document.getElementsByClassName('answer-btns');
const abcdBtn = document.getElementById('abcd-btns');
const multipleCh = [
    document.getElementById('form0'),
    document.getElementById('form1'),
    document.getElementById('form2'),
    document.getElementById('form3'),
    document.getElementById('form4'),
    document.getElementById('form5'),
    document.getElementById('form6')
]
const answer = ['C','D','C','A','C','B','B']
let score = 100;

const totalScore = 100;
const numberOfQuestions = 7;

let curentSelection = 0


startBtn.addEventListener('click', start)
multipleCh.forEach((answer) => {
    answer.addEventListener('submit',nextQuestion)
})

function getCurrentSelection() {
    let current = document.getElementById(curentSelection)
    return current
}
function toggleHide(current){
    current.classList.toggle('hide')
}

function start() {
    console.log ('start')
    console.log ('hide' + curentSelection)
    let current = getCurrentSelection()
    toggleHide(current)
};
function nextQuestion(event) {
    event.preventDefault()
    let current = getCurrentSelection()
    toggleHide(current)
    console.log(event)
    curentSelection +=1
    current=getCurrentSelection()
    toggleHide(current)
} 



const questionsArray = [
    {
        question: '1. Which house was Harry Potter almost sorted into?',
        option1: 'A',
        option2: 'B',
        option3: 'Slytherin',
        option4: 'D',
        answer: 3,
    },
    {
        question: '2. Which country gifted the Statue of Liberty to the US?',
        option1: 'A',
        option2: 'B',
        option3: 'C',
        option4: 'France',
        answer: 4,
    },
    {
        question: '3. What was the name of the Robin Williams film where he dresses up as an elderly British nanny?',
        option1: 'A',
        option2: 'B',
        option3: 'Mrs. Doubtfire',
        option4: 'D',
        answer: 3,
    },
    {
        question: '4. What is the rarest blood type?',
        option1: 'AB-Negative',
        option2: 'B',
        option3: 'C',
        option4: 'D',
        answer: 1,
    },
    {
        question: '5. What sport does Cristiano Ronaldo play?',
        option1: 'A',
        option2: 'B',
        option3: 'Soccer/football',
        option4: 'D',
        answer: 3,
    },
    {
        question: '6. How many bones are there in the human body?',
        option1: 'A',
        option2: '206',
        option3: 'C',
        option4: 'D',
        answer: 2,
    },
    {
        question: '7. What is the name of the longest river in South America?',
        option1: 'A',
        option2: 'Amazon River',
        option3: 'C',
        option4: 'D',
        answer: 2,
    } 
];

let startTime = 60;
const timer = document.getElementById('timer');

function countdown () {
    console.log ('what!')
    let countdownTimer = setInterval(function() {
        if (countdownTimer <= 0) {
            clearInterval(countdownTimer);
        } else {
            countdownTimer--;
            seconds = Math.floor(startTime % 60);
            timer.innerHTML = `00:${seconds}`;
        }
    },1000)
};