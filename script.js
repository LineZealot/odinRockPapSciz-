// score variables
let scorePlayer = 0;
let scoreComputer = 0;

// round variable
let rounds = 0;

// Score functions
let counterScorePlayer = () => scorePlayer++;
let counterScoreComputer = () => scoreComputer++;

// HTML body selection
const gameControls = document.querySelector('.gameControls');

// HTML displayWinner selection
const displayWinner = document.querySelector('.displayWinner');

// HTML score selection
const displayScoreComputer = document.querySelector('.computer');
const displayScorePlayer = document.querySelector('.player');

// HTML button selection
const buttonRock = document.querySelector('.buttonRock');
const buttonPaper = document.querySelector('.buttonPaper');
const buttonScissors = document.querySelector('.buttonScissors');

// score tally
const scorePlayerTally = document.createElement('p');
scorePlayerTally.className = 'scoreTallyPlayer';
scorePlayerTally.textContent = scorePlayer;
displayScorePlayer.appendChild(scorePlayerTally);

const scoreComputerTally = document.createElement('p');
scoreComputerTally.className = 'scoreTallyComputer';
scoreComputerTally.textContent = scoreComputer;
displayScoreComputer.appendChild(scoreComputerTally);

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

// checkRounds function
let checkRounds = (r) => {
    if ((r === 5) && (scorePlayer > scoreComputer)) {
        displayWinner.textContent = 'Congratulations! You won the Game!';
    } else if ((r === 5) && (scorePlayer < scoreComputer)) {
        displayWinner.textContent = 'Uh oh, you lost the game. Sorry.';
    } else if ((r === 5) && (scoreComputer === scorePlayer)) {
        displayWinner.textContent = 'The game is a draw! Please try again!';
    } else {
        return;
    }
}

// playRound
function playRound (computer, player) {
    if (rounds != 5) {
        if (computer === 0) {
            if (player === 0) {
                displayWinner.textContent = 'Tie, no winner';
            } else if (player === 1) {
                displayWinner.textContent = 'You win! Paper beats Rock!';
                counterScorePlayer();
            } else {
                displayWinner = 'You lose! Rock beats Scissors!';
                counterScoreComputer();
            }
        } else if (computer === 1) {
            if (player === 1) {
                displayWinner.textContent = 'Tie, no winner';
            } else if (player === 2) {
                displayWinner.textContent = 'You win! Scissors beats Paper!';
                counterScorePlayer();
            } else {
                displayWinner.textContent = 'You lose! Paper beats Rock!';
                counterScoreComputer();
            }
        } else if (computer === 2) {
            if (player === 2) {
                displayWinner.textContent = 'Tie, no winner';
            } else if (player === 0) {
                displayWinner.textContent= 'You win! Rock beats Scissors!';
                counterScorePlayer();
            } else {
                displayWinner.textContent= 'You lose! Scissors beats Paper!';
                counterScoreComputer();
            }
        }
        rounds++;
    } else {
        alert('Game over, reload page.')
    }
    scorePlayerTally.textContent = scorePlayer;
    scoreComputerTally.textContent = scoreComputer;
    checkRounds(rounds);
}

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