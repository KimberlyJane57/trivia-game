let seconds = 59;
const scorecard = document.getElementById('scorecard');
const startBtn = document.getElementById('start-btn');
const answerBtn = document.getElementsByClassName('answer-btns');
const abcdBtn = document.getElementById('abcd-btns');
const displayTrivia = document.getElementById('displayTrivia');
const question = document.getElementById('question');
const answerA = document.getElementById('labelA');
const answerB = document.getElementById('labelB');
const answerC = document.getElementById('labelC');
const answerD = document.getElementById('labelD');
const submitbtn = document.getElementById('submitbtn')

let score = 100;

const totalScore = 100;
const numberOfQuestions = 7;

let curentSelection = 0


startBtn.addEventListener('click', start)

submitbtn.addEventListener('click', nextQuestion)

function populateQuestion(){
    question.innerHTML = questionsArray[curentSelection].question
    console.log(answerA)
    console.log(answerB)
    console.log(answerC)
    console.log(answerD)
    answerA.innerHTML = questionsArray[curentSelection].option1
    answerB.innerHTML = questionsArray[curentSelection].option2
    answerC.innerHTML = questionsArray[curentSelection].option3
    answerD.innerHTML = questionsArray[curentSelection].option4
}
function toggleHide(){
    displayTrivia.classList.toggle('hide')
}

function start() {
    console.log ('start')
    console.log ('hide' + curentSelection)
    populateQuestion()
    toggleHide()
    countdown()
};
function nextQuestion(event){
    event.preventDefault()
    let isCorrect=verifyAnswer()
    console.log(isCorrect)
    if (!isCorrect) {
        if(seconds-5<0){
            seconds=0
        } else {
            seconds=seconds-5
        }
    }
    curentSelection +=1
    populateQuestion()
    if (curentSelection=questionsArray.length){
    console('stop everything')
    }
} 
function verifyAnswer(){
    let answer
    let radios=document.getElementsByName('q0')
    radios.forEach((r)=>{if(r.checked)answer=r.value})
    if (answer==questionsArray[curentSelection].answer){
        return true
    }
    return false
}

function countdown() {
    function tick() {
      let timer = document.getElementById("timer");
      seconds--;
      timer.innerHTML =
        "0:" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        setTimeout(tick, 1000);
      } else {
        document.getElementById("timer").innerHTML = "";
        let current=getcurentSelection()
        toggleHide(current)
      }
    }
    tick();
  }



const questionsArray = [
    {
        question: '1. Which house sintaksjdf;ajd;f was Harry Potter almost sorted into?',
        option1: 'A jsut om',
        option2: 'B AHDJSDEJ',
        option3: 'C Slytherin',
        option4: 'D 12345467',
        answer: 'C',
    },
    {
        question: '2. Which country gifted the Statue of Liberty to the US?',
        option1: 'A',
        option2: 'B',
        option3: 'C',
        option4: 'D France',
        answer: 'D',
    },
    {
        question: '3. What was the name of the Robin Williams film where he dresses up as an elderly British nanny?',
        option1: 'A',
        option2: 'B',
        option3: 'C Mrs. Doubtfire',
        option4: 'D',
        answer: 'C',
    },
    {
        question: '4. What is the rarest blood type?',
        option1: 'A AB-Negative',
        option2: 'B',
        option3: 'C',
        option4: 'D',
        answer: 'A',
    },
    {
        question: '5. What sport does Cristiano Ronaldo play?',
        option1: 'A',
        option2: 'B',
        option3: 'C Soccer/football',
        option4: 'D',
        answer: 'C',
    },
    {
        question: '6. How many bones are there in the human body?',
        option1: 'A',
        option2: 'B 206',
        option3: 'C',
        option4: 'D',
        answer: 'B',
    },
    {
        question: '7. What is the name of the longest river in South America?',
        option1: 'A',
        option2: 'B Amazon River',
        option3: 'C',
        option4: 'D',
        answer: 'B',
    } 
];
