let questions = [
    {

        //! change question
        question: "Which character is used to indicate an end tag?",
        answerBtn: [
           { answer: "^", correct: false },
           { answer: "*", correct: false },
           { answer: "/", correct: true },
           { answer: "<", correct: false },
        ],
        correctAnswer: "/",
    },

    {
        question: "Choose the correct HTML element for the largest heading:",
        answerBtn: [
           { answer: "h1", correct: true },
           { answer: "h2", correct: false },
           { answer: "h3", correct: false },
           { answer: "h4", correct: false },
        ],
        correctAnswer: "h1",
    },

    {
        question: "Which tag do you use to make a numbered list?",
        answerBtn: [
           { answer: "dl", correct: false },
           { answer: "ul", correct: false },
           { answer: "ol", correct: true },
           { answer: "list", correct: false },
        ],
        correctAnswer: "ol",
    },

    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answerBtn: [
           { answer: "src", correct: false },
           { answer: "title", correct: false },
           { answer: "img", correct: false },
           { answer: "alt", correct: true },
        ],
        correctAnswer: "alt",
    },

    {
        question: "Which HTML element is used to specify a header for a document or section?",
        answerBtn: [
           { answer: "section", correct: false },
           { answer: "header", correct: true },
           { answer: "top", correct: false },
           { answer: "head", correct: false },
        ],
        correctAnswer: "header",
    },
];

// Start time = 60 seconds
let startTime = 60;
let timer;

// Timer element
let timerEl = document.getElementById("timer")

//? Function to end the quiz
function endQuiz() {
    clearInterval(timer)
    alert("The time is up and the quiz is over. To play again, please refresh the page.")
}

function timerInterval() {
    timerEl.textContent = startTime;
    startTime--;
    if (startTime <= 0) {
        endQuiz()
        }
}

//? Function to start the timer
function timerStart () {
    timer = setInterval(timerInterval, 1000)
}

//! Tracks which question is the user answering (depending on the index position)
//var currentQuestionIndex = 0;

let startButton = document.getElementById("startBtn")

let nextButton = document.getElementById("nextBtn")

const questionContainerElement = document.getElementById("questionContainer")

let questionElement = document.getElementById("question")
let answerButtonsElement = document.getElementById("answerBtn")

let randomQuestions, currentQuestionIndex


startButton.addEventListener("click", startQuiz)
startButton.addEventListener("click", timerStart) //Timer starts the countdown upon the quiz start
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

// Start Quiz function and randomizing the order of questions
function startQuiz() {
    startButton.classList.add("hide")
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion ()
}

// Next question function, removing the previous question data, moving to the next question
function setNextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answerBtn.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.answer
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer (e) {
    const selectedButton = e.target
    console.log(e.target.textContent)

    //! Update this!


    const correct = selectedButton.dataset.correct
    //setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    } 
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
        //! startTime -= 5; Update
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

//var startTime = 60;
//var timer;

//var timerEl = document.getElementById("timer")

//? Tracks which question is the user answering (depending on the index position)
//var currentQuestionIndex = 0;


//function timerInterval(){
    //! debugger
    //! timerEl.textContent = startTime;
    
    //? The timer starts from startTime and the number of seconds gets reduced by 1 second
    //startTime--;
    // startTime = startTime - 1
    
    //? When the time runs out, end the quiz
   // if (startTime <= 0) {
        //endQuiz()
   // }
//}

//? Function to start the timer
//function timerStart () {
    //timer = setInterval(timerInterval, 1000)
//}

//? Function to start quiz
//function startQuiz() {

    //? Start timer
    //timerStart()

    //? Display the first question
    //displayQuestion()
//}


//? Function for question click (to update the timer and also display the next question)
//function questionClick() {
    //? This shows whether the given answer was correct or not
    //if 

    //! else


    //? Moving to the next question using currentQuestionIndex++

    //currentQuestionIndex++

//}

//? Function to end the quiz
//function endQuiz(){
    //
    //clearInterval(timer)
//}

//startQuiz()
