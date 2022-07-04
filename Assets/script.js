var startTime = 60;
var timer;

var timerEl = document.getElementById("timer")

//? Tracks which question is the user answering (depending on the index position)
var currentQuestionIndex = 0;


function timerInterval(){
    //! debugger
    //! timerEl.textContent = startTime;
    
    //? The timer starts from startTime and the number of seconds gets reduced by 1 second
    startTime--;
    // startTime = startTime - 1
    
    //? When the time runs out, end the quiz
    if (startTime <= 0) {
        endQuiz()
    }
}

//? Function to start the timer
function timerStart () {
    timer = setInterval(timerInterval, 1000)
}

//? Function to start quiz
function startQuiz() {

    //? Start timer
    timerStart()

    //? Display the first question
    displayQuestion()
}


function displayQuestion() {
    // 
}

//! Function to display a question


//? Function for question click (to update the timer and also display the next question)
function questionClick() {
    //? This shows whether the given answer was correct or not
    if 

    //! else


    //? Moving to the next question using currentQuestionIndex++

    currentQuestionIndex++

}

//? Function to end the quiz
function endQuiz(){
    //
    clearInterval(timer)
}

startQuiz()
