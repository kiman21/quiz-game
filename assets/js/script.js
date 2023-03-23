// Array with each question, question number, correct answer, and answer options.
var questions = [
    {
        numb: 1,
        question: "Which of the following animals is a reptile?",
        answer: "Turtle",
        options: [
          "Frog",
          "Salamander",
          "Turtle",
          "Rabbit"
        ]
    },
    {
        numb: 2,
        question: "Which animal is endemic to Antarctica?",
        answer: "Penguin",
        options: [
          "Polar Bear",
          "Penguin",
          "Arctic Fox",
          "Squirrel"
        ]
    },
    {
        numb: 3,
        question: "Which of the following birds cannot fly?",
        answer: "Ostrich",
        options: [
          "Ostrich",
          "Condor",
          "Eagle",
          "Falcon"
        ]
    },
    {
        numb: 4,
        question: "Which of these animals are poisonous?",
        answer: "Puffer Fish",
        options: [
          "Jellyfish",
          "Rattlesnake",
          "Puffer Fish",
          "Bear"
        ]
    },
    {
        numb: 5,
        question: "How many legs does an insect have?",
        answer: "6",
        options: [
          "2",
          "4",
          "6",
          "8"
        ]
    },
    {
        numb: 6,
        question: "Which of these mammals lay eggs",
        answer: "Platypus",
        options: [
          "Dog",
          "Rat",
          "Hedgehog",
          "Platypus"
        ]
    },
    {
        numb: 7,
        question: "Where does a clownfish make its home?",
        answer: "Sea Anemone",
        options: [
          "Sea Anemone",
          "Coral",
          "A Tree",
          "In the Sand"
        ]
    },
    {
        numb: 8,
        question: "Why are flamingos pink?",
        answer: "From their diet",
        options: [
          "To attract a mate",
          "From their diet",
          "They forgot to wear sunscreen",
          "From dirt baths in red clay"
        ]
    },
    {
        numb: 9,
        question: "Which undersea mollusk can swim",
        answer: "Scallop",
        options: [
          "Clam",
          "Mussel",
          "Oyster",
          "Scallop"
        ]
    },
    {
        numb: 10,
        question: "Which mammal has square droppings?",
        answer: "Wombat",
        options: [
          "Marmot",
          "Kangaroo",
          "Wombat",
          "Weasel"
        ]
    },
    {
      numb: 11,
      question: "Congrats you've reached the end!",
      answer: "Click to end, then click View Score",
      options: [
        "Click to end, then click View Score",
        ]
  }
    ];

let secondsLeft = 60;
let score = 0;
let scorelist = "";
var startButton = document.querySelector("#start-button");
var resultButton = document.querySelector("#result-button");
var questionContainer = document.querySelector(".questionContainer")
var questionName = document.querySelector("#question-name");
var optionList = document.querySelector("#option-choice");
var timer = document.querySelector(".timer")
var currentQuestion = 0

startButton.addEventListener("click", function() {
  console.log("hello")
  questionGen();
  startButton.style.display = "none";
  setInterval(function() {
    if(secondsLeft > 0) {
      secondsLeft--;
    }
    timer.textContent = secondsLeft
    if (secondsLeft <= 0) {
      clearInterval(setInterval);
      questionContainer.style.display = "none";
      timer.style.display = "none";
      showResult();
    }
  }, 1000);
});
function questionGen() {
optionList.innerHTML = "";
questionName.textContent = questions[currentQuestion].question;
for (var i = 0; i < questions[currentQuestion].options.length; i++) {
var thisChoice = document.createElement("li");
var thisButton = document.createElement("button");
thisButton.textContent = questions[currentQuestion].options[i];
thisChoice.appendChild(thisButton);
optionList.appendChild(thisChoice);
thisButton.addEventListener("click", checkAnswer);
}}

function checkAnswer(event) {
console.log(event.target.textContent);
if (event.target.textContent == questions[currentQuestion].answer) {
  score++;
  currentQuestion++
} else {
  secondsLeft-=5;
}
sessionStorage.setItem('score', score);
questionGen();
if (event.target.textContent=="Click to end, then click View Score") {
  score--;
questionContainer.style.display = "none";
timer.style.display = "none"; 
showResult();
}
}

// sends user ending message
function showResult() {
  startButton.style.display = "none";
  quizContainer.style.display = "none";
}

resultButton.addEventListener("click", function() {
  var currentScore=parseInt(sessionStorage.getItem('score'))-1;
  var finalScore=currentScore.toString() + " out of 10";
  alert(finalScore);
});

