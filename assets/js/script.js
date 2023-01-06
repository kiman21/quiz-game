// Array with each question, question number, correct answer, and answer options.
var questions = [
    {
        numb: 1,
        question: "Which of the following animals is a reptile?",
        answer: "Turle",
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
    }
    ];
    // Starting value for game timer.
var secondsLeft = 60;
var startButton =
var answerButton =
var endButton =
var restartButton =
var score = localStorage.getItem("score");
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      
      if(secondsLeft === 0) {
        // When the timer hits 0 the end game screen is prompted

  
    }, 1000);
  }
  
startButton.addEventListener("click", function() {}
//   Hides starting screen and begins quiz and timer
answerButton.addEventListener("click", function() {}
//   If answer does not match the correct answer (!==), deduct 10 seconds and prompt text "incorrect answer". Else continue to next question and update score
endButton.addEventListener("click", function() {}
// sends user ending message
restartButton.addEventListener("click", function() {}
// sends user back to starting page