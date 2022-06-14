const yesBtn = document.querySelector('#yesBtn');

const noBtn = document.querySelector('#noBtn');

const startWrapper = document.querySelector('#startWrapper');

const gamePage = document.querySelector('#mainWrapper');

yesBtn.addEventListener('click', () => {
    startWrapper.remove();
} );

noBtn.addEventListener('click', () => {
    noBtn.remove();
} );


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    paper.classList.remove("playerSelection")
    scissors.classList.remove("playerSelection")
    rock.classList.add("playerSelection")
    choiceeee();
    robotChoice();
    comparison();    
});

scissors.addEventListener("click", () => {
    paper.classList.remove("playerSelection")
    scissors.classList.add("playerSelection")
    rock.classList.remove("playerSelection")
    choiceeee();
    robotChoice();
    comparison();
});

paper.addEventListener("click", () => {
    paper.classList.add("playerSelection")
    scissors.classList.remove("playerSelection")
    rock.classList.remove("playerSelection")
    choiceeee();
    robotChoice();
    comparison();
});

let playerChoice = "";
function choiceeee() {
playerChoice = document.querySelector(".playerSelection").value;
};

let robChoice = "";
function robotChoice() {
    let randomOne = Math.random();
    if (randomOne < 0.33) {
        robChoice = "rock";
    } else if (randomOne < 0.66) {
        robChoice = "paper";
    } else if (randomOne <= 1) {
        robChoice = "scissors";
    };
};

function comparison() {
    if (robChoice == "paper" && playerChoice == "rock") {
        console.log("hey");
    } else if (robChoice == "scissors" && playerChoice == "paper") {
        console.log("heyy") 
    } else if (robChoice == "rock" && playerChoice == "scissors") {
        console.log("heyyyy");
    } else if (robChoice == playerChoice) {
        console.log("Tie")
    } else console.log("u win");
};