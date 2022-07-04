let questions = [
    {
        // Original question changed to avoid confusion
        question: "Which character differentiates an opening tag from a closing tag?",
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

// Function to end the quiz, displaying the end quiz message
function endQuiz() {
    clearInterval(timer)
    alert("The time is up and the quiz is over. To play again, please refresh the page.")
}

// Decrease the time by one second, end the quiz if the time runs out
function timerInterval() {
    timerEl.textContent = startTime;
    startTime--;
    if (startTime <= 0) {
        endQuiz()
        }
}

// Function to start the timer
function timerStart () {
    timer = setInterval(timerInterval, 1000)
}

let startButton = document.getElementById("startBtn")

let nextButton = document.getElementById("nextBtn")

const questionContainerElement = document.getElementById("questionContainer")

let questionElement = document.getElementById("question")
let answerButtonsElement = document.getElementById("answerBtn")

let randomQuestions, currentQuestionIndex

// Start the quiz and start the timer when the start button is clicked
startButton.addEventListener("click", startQuiz)
startButton.addEventListener("click", timerStart) //Timer starts the countdown upon the quiz start
nextButton.addEventListener("click", () => { //Move to the next question
    currentQuestionIndex++
    setNextQuestion()
})

// Start Quiz function and randomizing the order of questions
function startQuiz() {
    startButton.classList.add("hide") //Hide the start button
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion ()
}

// Next question function, removing the previous question data, moving to the next random question
function setNextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestionIndex])
}

// Display question, display answers and check if the selected answer is correct
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
        startTime -= 5; // Reduce the time if the wrong answer is selected
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}
