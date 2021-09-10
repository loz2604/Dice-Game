const roll = document.getElementById("roll");
const restart = document.getElementById("restart");
const rules = document.getElementById("rules");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");
const dice6 = document.getElementById("dice6");
const pressRoll = document.getElementById("pressRoll");
let rulesText = document.getElementById("rulesText");
let player = document.getElementById("player");
let currentScore = document.getElementById("score");
let scoreContainer = document.getElementById("scoreContainer");
let gameover = document.getElementById("gameOver");
let youwin = document.getElementById("youWin");
let randomNumber = [];
let total = 0;

function changeText(text) {
    document.getElementById("scoreContainer").innerHTML = text;
}

roll.addEventListener("click", () => {
    for (let i = 0; i < 1; i++) {
        randomNumber = Math.floor(Math.random() * 6) + 1;
        total = (total + randomNumber);
        player.style.display = "block";
        currentScore.style.display = "block";
        rulesText.style.display = "none";
        if (total >= 20) {
            rulesText.style.display = "none";
            roll.style.display = "none"
            gameover.style.display = "none";
            youwin.style.display = "block";
            currentScore.style.display = "block";
            scoreContainer.style.display = "none";
            restart.style.display = "block";
            rules.style.display = "none";

        }
        if (randomNumber == 1) {
            dice1.style.display = "block";
            dice2.style.display = "none";
            dice3.style.display = "none";
            dice4.style.display = "none";
            dice5.style.display = "none";
            dice6.style.display = "none";
            roll.style.display = "none";
            youwin.style.display = "none";
            pressRoll.style.display = "none";
            gameover.style.display = "block";
            currentScore.style.display = "none";
            scoreContainer.style.display = "none";
            restart.style.display = "block";
            rules.style.display = "none";
            player.style.display = "none";
            tryAgain.style.display = "block";
        }
        else if (randomNumber == 2) {
            dice1.style.display = "none";
            dice2.style.display = "block";
            dice3.style.display = "none";
            dice4.style.display = "none";
            dice5.style.display = "none";
            dice6.style.display = "none";
            pressRoll.style.display = "none";
            gameover.style.display = "none";
            scoreContainer.style.display = "block";
            changeText(`${total}`);
        }
        else if (randomNumber == 3) {
            dice1.style.display = "none";
            dice2.style.display = "none";
            dice3.style.display = "block";
            dice4.style.display = "none";
            dice5.style.display = "none";
            dice6.style.display = "none";
            pressRoll.style.display = "none";
            gameover.style.display = "none";
            scoreContainer.style.display = "block";
            changeText(`${total}`);
        }
        else if (randomNumber == 4) {
            dice1.style.display = "none";
            dice2.style.display = "none";
            dice3.style.display = "none";
            dice4.style.display = "block";
            dice5.style.display = "none";
            dice6.style.display = "none";
            pressRoll.style.display = "none";
            gameover.style.display = "none";
            scoreContainer.style.display = "block";
            changeText(`${total}`);
        }
        else if (randomNumber == 5) {
            dice1.style.display = "none";
            dice2.style.display = "none";
            dice3.style.display = "none";
            dice4.style.display = "none";
            dice5.style.display = "block";
            dice6.style.display = "none";
            pressRoll.style.display = "none";
            gameover.style.display = "none";
            scoreContainer.style.display = "block";
            changeText(`${total}`);
        }
        else if (randomNumber == 6) {
            dice1.style.display = "none";
            dice2.style.display = "none";
            dice3.style.display = "none";
            dice4.style.display = "none";
            dice5.style.display = "none";
            dice6.style.display = "block";
            pressRoll.style.display = "none";
            gameover.style.display = "none";
            scoreContainer.style.display = "block";
            changeText(`${total}`);
        }
    }
});

restart.addEventListener("click", () => {
    dice1.style.display = "none";
    dice2.style.display = "none";
    dice3.style.display = "none";
    dice4.style.display = "none";
    dice5.style.display = "none";
    dice6.style.display = "none";
    roll.style.display = "block";
    gameover.style.display = "none";
    pressRoll.style.display = "block";
    total = 0;
    youwin.style.display = "none";
    currentScore.style.display = "block";
    changeText(`${total}`);
    scoreContainer.style.display = "block";
    restart.style.display = "none";
    rules.style.display = "block";
    player.style.display = "block";
    tryAgain.style.display = "none";
});

rules.addEventListener("click", () => {
    player.style.display = "none";
    currentScore.style.display = "none";
    scoreContainer.style.display = "none";
    rulesText.style.display = "block";
});