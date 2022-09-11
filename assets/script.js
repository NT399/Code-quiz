var question = document.querySelector(".questions");
var options = document.querySelector(".options");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var option01 = document.querySelector("#option01");
var option02 = document.querySelector("#option02");
var option03 = document.querySelector("#option03");
var option04 = document.querySelector("#option04");
var option001 = document.querySelector("#option001");
var option002 = document.querySelector("#option002");
var option003 = document.querySelector("#option003");
var option004 = document.querySelector("#option004");
var outcome = document.querySelector("#outcome");
var timerScreen = document.querySelector(".timer-display");
var highscores = []


// Init function loads the page
function init() {
  startQuiz();
  getScore();
}

// The startQuiz function starts the page
function startQuiz() {
  timerCount = 50;
  firstQuestion()
  startTimer()
}

// This notifies the user if their answer is correct
function correctAnswer() {
  outcome.textContent = "Correct!";
}

// This notifies the user if their answer is incorrect and applies a time penalty
function wrongAnswer() {
  outcome.textContent = "Wrong!";
  timerCount -= 10;
  
}

//Navigates to the scores page where you can register your initials
function finalScore() {
  document.getElementById("group3").style.display= "none";
  clearInterval(timer);
  question.textContent = "Your final score is " + timerCount;

  document.getElementById("label").style.display= "block";
  var nameInput = document.getElementById("input").style.display= "block";
  nameInput.textContent= "input your initials"
  nameInput

  var submitButton = document.createElement("INPUT");
  submitButton.setAttribute("type", "button");
  submitButton.setAttribute("value", "Submit");
  document.body.appendChild(submitButton);
  submitButton.setAttribute("style", "width:70px; margin: 0 auto");

  submitButton.addEventListener("click", setScore);
}

//Sets scores
function setScore() {

highscores.push(document.getElementById("input").value + " = " + timerCount);

localStorage.setItem("score1",highscores);
 
 getScore()
}

// Retrieves stored scores
function getScore() {
  var ScoreList = document.querySelector("#ScoreList");
  localStorage.getItem("score1");
  ScoreList.textContent = highscores; 
}


// This function starts the timer
function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerScreen.textContent = "Timer: " + timerCount;
    // If the timer runs out, it goes to the final scores page.
    if (timerCount === 0) {
      clearInterval(timer);
      finalScore();
    }
  }, 1000);
}

// First question 
function firstQuestion() {

  //Question and options
  document.getElementById("group1").style.display= "block";
  question.textContent = "What is it the correct term for when mutiple values are stored in a variable?";
  option1.textContent = "Dataset";
  option2.textContent = "Array";
  option3.textContent = "Variable";
  option4.textContent = "Database";

  //Registers the correct answer depending on what button is clicked.
  option2.addEventListener("click",() => {
      correctAnswer();
      setTimeout(()=>{
      outcome.textContent = "";
      secondQuestion();
    }, 1000)
    
    
  });

  //Registers the incorrect answer depending on what button is clicked.
  [option1,option3,option4].forEach(question1false=> {
    question1false.addEventListener("click", () => {
      wrongAnswer();
      setTimeout(()=>{
        outcome.textContent = "";
        secondQuestion();
      }, 1000)
  })})
}

// Second question
function secondQuestion() {

  //Question and options
  document.getElementById("group1").style.display= "none";
  document.getElementById("group2").style.display= "block";
  question.textContent = "What's the best way to complete a certain action when a button is clicked using Javascript?";
  option01.textContent = "If statement";
  option02.textContent = "Functions";
  option03.textContent = "Event listener";
  option04.textContent = "All of the above";
  
  //Registers the correct answer depending on what button is clicked.
  option03.addEventListener("click",() => {
    correctAnswer();
    setTimeout(()=>{
      outcome.textContent = "";
      thirdQuestion();
    }, 1000);
  });

  //Registers the incorrect answer depending on what button is clicked.
  [option01,option02,option04].forEach(question02false=> {
    question02false.addEventListener("click", () => {
      wrongAnswer();
      setTimeout(()=>{
        outcome.textContent = "";
        thirdQuestion();
      }, 1000);
  })})  
}

//Third question
function thirdQuestion() {
  document.getElementById("group2").style.display= "none";
  document.getElementById("group3").style.display= "block";
  question.textContent = "What does JSON stand for?";
  option001.textContent = "Jason";
  option002.textContent = "Javascript's Son";
  option003.textContent = "JavaScript Object Notifier";
  option004.textContent = "JavaScript Object Notation";

  //Registers the correct answer depending on what button is clicked.
  option004.addEventListener("click",() => {
    correctAnswer();
    setTimeout(()=>{
      outcome.textContent = "";
      finalScore();
    }, 1000);
  });

  //Registers the incorrect answer depending on what button is clicked.
  [option001,option002,option003].forEach(question001false=> {
    question001false.addEventListener("click", () => {
      wrongAnswer();
      setTimeout(()=>{
        outcome.textContent = "";
        finalScore();
      }, 1000);
  })
})
}

// Calls init() so that it fires when page opened
init();