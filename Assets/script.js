let questions = [
    {
        questionTitle: "Choose the correct HTML element for the largest heading:",
        options: [
           { text: "^", correct: false },
           { text: "*", correct: false },
           { text: "/", correct: true },
           { text: "<", correct: false },
        ],
        correctAnswer: "/",
    },

    {
        questionTitle: "Which character is used to indicate an end tag?",
        options: [
           { text: "h1", correct: true },
           { text: "h2", correct: false },
           { text: "h3", correct: false },
           { text: "h4", correct: false },
        ],
        correctAnswer: "h1",
    },

    {
        questionTitle: "Which tag do you use to make a numbered list?",
        options: [
           { text: "dl", correct: false },
           { text: "ul", correct: false },
           { text: "ol", correct: true },
           { text: "list", correct: false },
        ],
        correctAnswer: "ol",
    },

    {
        questionTitle: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: [
           { text: "src", correct: false },
           { text: "title", correct: false },
           { text: "img", correct: false },
           { text: "alt", correct: true },
        ],
        correctAnswer: "alt",
    },

    {
        questionTitle: "Which HTML element is used to specify a header for a document or section?",
        options: [
           { text: "section", correct: false },
           { text: "header", correct: true },
           { text: "top", correct: false },
           { text: "head", correct: false },
        ],
        correctAnswer: "header",
    },
];

// Start time = 60 seconds
let startTime = 60;
let timer;

// Timer element
var timerEl = document.getElementById("timer")

//? Function to end the quiz
function endQuiz() {
    clearInterval(timer)
    alert("The quiz is over. To play again, please refresh the page.")
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

const startButton = document.getElementById("startBtn")

const nextButton = document.getElementById("nextBtn")

const questionContainerElement = document.getElementById("questionContainer")

let questionElement = document.getElementById("questionTitle")
const answerButtonsElement = document.getElementById("answerButtons")

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

function showQuestion(questionTitle) {
    questionElement.innerText = questionTitle.questionTitle
    questionTitle.options.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.innerText
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

function selectAnswer () {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
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


//function displayQuestion() {
    // 
// }

//! Function to display a question


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
