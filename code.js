const yesBtn = document.querySelector('#yesBtn');

const noBtn = document.querySelector('#noBtn');

const startWrapper = document.querySelector('#startWrapper');

const gamePage = document.querySelector('#mainWrapper');

const playerImage = document.querySelector("#playerChoice");

const robotImage = document.querySelector("#botChoice");

const rock = document.querySelector("#rock");

const paper = document.querySelector("#paper");

const scissors = document.querySelector("#scissors");

const endScreen = document.querySelector("#endScreen");

const endBtn = document.querySelector("#endBtn");

const endMsg = document.querySelector("#endMessage");

let playerChoice = "";

let robChoice = "";

let playerScore = 0;

let robotScore = 0;

let messageVictory = document.createElement('p');

messageVictory.innerHTML = "Congrats you won";

let messageLose = document.createElement('p');

messageLose.innerHTML = "Oh no you lost."

yesBtn.addEventListener('click', () => {
    startWrapper.remove();
} );

noBtn.addEventListener('click', () => {
    noBtn.remove();
} );


rock.addEventListener("click", () => {
    let item = "rock";
    paper.classList.remove("playerSelection")
    scissors.classList.remove("playerSelection")
    rock.classList.add("playerSelection")
    choiceeee();
    robotChoice();
    setPlayerChoice(item);
    comparison();
    endGame();
});

scissors.addEventListener("click", () => {
    let item = "scissors";
    paper.classList.remove("playerSelection");
    scissors.classList.add("playerSelection");
    rock.classList.remove("playerSelection");
    setPlayerChoice(item);
    choiceeee();
    robotChoice();
    comparison();
    endGame();
});

paper.addEventListener("click", () => {
    let item = "paper";
    paper.classList.add("playerSelection")
    scissors.classList.remove("playerSelection")
    rock.classList.remove("playerSelection")
    setPlayerChoice(item);
    choiceeee();
    robotChoice();
    comparison();
    console.log(playerScore);
    endGame();
});

endBtn.addEventListener("click", () => startOver());

function choiceeee() {
playerChoice = document.querySelector(".playerSelection").value;
};

function robotChoice() {
    let randomOne = Math.random();
    if (randomOne < 0.33) {
        robChoice = "rock";
        let botItem = "rock";
        setbotChoice(botItem);
    } else if (randomOne < 0.66) {
        robChoice = "paper";
        let botItem = "paper";
        setbotChoice(botItem);
    } else if (randomOne <= 1) {
        robChoice = "scissors";
        let botItem = "scissors";
        setbotChoice(botItem);
    };
};

function comparison() {
    if (robChoice == "paper" && playerChoice == "rock") {
        robotScore += 1;
        lightUpBot();
    } else if (robChoice == "scissors" && playerChoice == "paper") {
        robotScore += 1;
        lightUpBot();
    } else if (robChoice == "rock" && playerChoice == "scissors") {
        robotScore += 1;
        lightUpBot();
    } else if (robChoice == playerChoice) {
        console.log("tie");
    } else {
        playerScore += 1;
        lightUpPlayer();
    };
};

function setPlayerChoice(item) {
    playerImage.style.backgroundImage = "url(" + "Images/" + item + ".png" + ")";
    playerImage.style.backgroundRepeat = "no-repeat";
    playerImage.style.backgroundSize = "contain";
    playerImage.style.backgroundPosition = "center";
};

function setbotChoice(item) {
    robotImage.style.backgroundImage = "url(" + "Images/" + item + ".png" + ")";
    robotImage.style.backgroundRepeat = "no-repeat";
    robotImage.style.backgroundSize = "contain";
    robotImage.style.backgroundPosition = "center";
};


function endGame() {
    if (playerScore == 3) {
        endScreen.classList.toggle("hidden");
        endMsg.appendChild(messageVictory);
    } else if(robotScore == 3) {
        endScreen.classList.toggle("hidden");
        endMsg.appendChild(messageLose);
    };
};

function startOver() {
    playerScore = 0;
    robotScore = 0;
    endScreen.classList.toggle("hidden");
    endMsg.innerHTML = "";
    reset();
};

function lightUpPlayer() {
    document.querySelector("#" + "playerScore" + playerScore + "").classList.add("playerWinBubble");
}

function lightUpBot() {
    document.querySelector("#" + "botScore" + robotScore + "").classList.add("botWinBubble");
}

function reset() {
    document.querySelector("#playerScore1").classList.remove("playerWinBubble");
    document.querySelector("#playerScore2").classList.remove("playerWinBubble");
    document.querySelector("#playerScore3").classList.remove("playerWinBubble");
    document.querySelector("#botScore1").classList.remove("botWinBubble");
    document.querySelector("#botScore2").classList.remove("botWinBubble");
    document.querySelector("#botScore3").classList.remove("botWinBubble");
};