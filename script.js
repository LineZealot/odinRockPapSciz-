// Score Variables
let scorePlayer = 0;
let scoreComputer = 0;

// Score functions
let counterScorePlayer = () => scorePlayer++;
let counterScoreComputer = () => scoreComputer++;

// choiceComputer
function choiceComputer () {
    let roll = Math.floor(Math.random() * 3);
    console.log(roll);
    return roll;
}

// choicePlayer
function choicePlayer(num) {
    console.log(num);
    return num;
};

// playRound
function playRound (computer, player) {
    if (computer === 0) {
        if (player === 0) {
            alert ('Tie, no winner');
        } else if (player === 1) {
            alert ('You win! Paper beats Rock!');
            counterScorePlayer();
        } else {
            alert ('You lose! Rock beats Scissors!');
            counterScoreComputer();
        }
    } else if (computer === 1) {
        if (player === 1) {
            alert ('Tie, no winner');
        } else if (player === 2) {
            alert ('You win! Scissors beats Paper!');
            counterScorePlayer();
        } else {
            alert ('You lose! Paper beats Rock!');
            counterScoreComputer();
        }
    } else if (computer === 2) {
        if (player === 2) {
            alert ('Tie, no winner');
        } else if (player === 0) {
            alert ('You win! Rock beats Scissors!');
            counterScorePlayer();
        } else {
            alert ('You lose! Scissors beats Paper!');
            counterScoreComputer();
        }
    }
}
// HTML body selection
const gameControls = document.querySelector('.gameControls');

// HTML button selection
const buttonRock = document.querySelector('.buttonRock');
const buttonPaper = document.querySelector('.buttonPaper');
const buttonScissors = document.querySelector('.buttonScissors');

// button event listeners
buttonRock.addEventListener("click", function () {
    playRound(choiceComputer(), 0);
})
buttonPaper.addEventListener("click", function () {
    playRound(choiceComputer(), 1);
})
buttonScissors.addEventListener("click", function () {
    playRound(choiceComputer(), 2);
})