var question = document.querySelector(".questions");
var options = document.querySelector(".options");
var timerDisplay = document.querySelector(".timer-count");
var start = document.querySelector(".start-button");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var outcome = document.querySelector("#outcome");

var isWin = false;
var timer;
var timerCount;


// Init function loads the page
function init() {
  getWins();
  getlosses();
}

// The startGame function is called when the start button is clicked
function startQuiz() {
  isWin = false;
  timerCount = 75;
  // Prevents start button from being clicked when round is in progress
  start.disabled = true;
  firstQuestion()
  startTimer()
}

// The winGame function is called when the win condition is met
function winGame() {
  outcome.textContent = "Correct!";
  start.disabled = false;
  setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  outcome.textContent = "Wrong!";
  start.disabled = false;
  setLosses()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerDisplay.textContent = "Timer: " + timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
    //can remove...
    if (isWin = false && timerCount > 0) {
      // Clears interval and stops timer
      loseGame();
    }
  }, 1000);
}

// First question 
function firstQuestion() {

  question.textContent = "1+1 = ";
  option1.textContent = "1";
  option2.textContent = "2";
  option3.textContent = "3";
  option4.textContent = "4";

  option2.addEventListener("click",() => {
    winner();
    secondQuestion();
  });

  [option1,option3,option4].forEach(question1false=> {
    question1false.addEventListener("click", () => {
      loser();
      secondQuestion();
  })})
}

function secondQuestion() {
  question.textContent = "2+2 =";
  option1.textContent = "3";
  option2.textContent = "5";
  option3.textContent = "4";
  option4.textContent = "6";
  
  option3.addEventListener("click",() => {
    winner();
   thirdQuestion();
  });

  [option1,option2,option4].forEach(question2false=> {
    question2false.addEventListener("click", () => {
      loser();
      thirdQuestion();
  })})  
}

function thirdQuestion() {
  question.textContent = "3+3 =";
  option1.textContent = "33";
  option2.textContent = "4";
  option3.textContent = "5";
  option4.textContent = "6";

  option4.addEventListener("click", winner);
  [option1,option2,option3].forEach(question1false=> {
    question1false.addEventListener("click", loser);
  })
}


function winner() {
  isWin=true;
}

function loser(){
  loseGame();
}


// Event listener to start button to call startGame function on click
start.addEventListener("click", startQuiz);

// Calls init() so that it fires when page opened
init();



