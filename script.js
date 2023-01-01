/*
declare a variable called scorePlayer
declare a variable called scoreComputer

declare a function called counterScorePlayer
    increment scorePlayer by 1

declare a function called counterScoreComputer
    increment scoreComputer by 1

declare a function called getGameWinner
    if scorePlayer is greater than scoreComputer
        alert 'Congratulations you are the winner!'
    else if scorePlayer is equal to scoreComputer
        alert 'Whoops this game is a draw'
    else
        alert 'Sorry but you lose!'

declare a function called choiceComputer
    declare a variable called roll with a random integer from 0 to 2 as a value
    return the value of roll

declare a function called choicePlayer
    declare a variable called choice with a prompt as it's value
    declare a variable called selection
    if choice is equivalent to 'Rock' or 'ROCK' or 'rock'
        set the value of selection to 0
    else if choice is equivalent to 'Paper' or 'PAPER' or 'paper'
        set the value of selection to 1
    else if choice is equivalent to 'Scissors' or 'SCISSORS' or 'scissors'
        set the value of selection to 2
    else
        set the value of selection to 3
    return the value of selection

declare a function called playRound with 2 parameters called computer and player
    if player is equivalent to 3
        set the value of winner to 'winComp'
    else
        if computer is equivalent to 0
            if player is equivalent to 0
                alert 'Tie, no winner'
            else if player is equivalent to 1
                alert 'You win! Paper beats Rock!'
                call counterScorePlayer
            else
                alert 'You lose! Rock beats Scissors!'
                call counterScoreComputer
        else if computer is equivalent to 1
            if player is equivalent to 1
                alert 'Tie, no winner'
            else if player is equivalent to 2
                alert 'You win! Scissors beats Paper!'
                call counterScorePlayer
            else
                alert 'You lose! Paper beats Rock!'
                call counterScoreComputer
        else if computer is equivalent to 2
            if player is equivalent to 2
                alert 'Tie, no winner'
            else if player is equivalent to 0
                alert 'You win! Rock beats Scissors!'
                call counterScorePlayer
            else
                alert 'You lose! Scissors beats Paper!'
                call counterScoreComputer

declare a function called playGame with 1 parameter called score
    start a loop that increments a variable called rounds until it is equivalent to 5
        call the playRound function with choiceComputer and choicePlayer as inputs
        log 'Player: ' + winsPlayer to the console
        log 'Computer: ' + winsComputer to the console
        if rounds is equivalent to 5
            call getGameWinner

call playGame
*/

/*
ISSUES:
score isn't adjusting accurately
*/
// Score Variables
let scorePlayer = 0;
let scoreComputer = 0;

// Score functions
let counterScorePlayer = () => scorePlayer++;
let counterScoreComputer = () => scoreComputer++;

// getGameWinner
function getGameWinner () {
    if (scorePlayer > scoreComputer) {
        alert('Congratulations you win!');
    } else if (scorePlayer === scoreComputer) {
        alert('Whoops this game is a draw!');
    } else {
        alert('Sorry but you lose!');
    }
}

// choiceComputer
function choiceComputer () {
    let roll = Math.floor(Math.random() * 3);
    console.log(roll);
    return roll;
}

// choicePlayer
function choicePlayer () {
    let choice = prompt('Rock, Paper, or Scissors?');
    let selection;
    if (choice == 'Rock' || choice == 'ROCK' || choice == 'rock') {
        selection = 0;
    } else if (choice == 'Paper' || choice == 'PAPER' || choice == 'paper') {
        selection = 1;
    } else if (choice == 'Scissors' || choice == 'SCISSORS' || choice == 'scissors') {
        selection = 2;
    } else {
        selection = 3;
    }
    console.log(selection);
    return selection;
}

// playRound
function playRound (computer, player) {
    let winner;
    if (player === 3) {
        alert('Invalid selection');
    } else {
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
}

// playGame
function playGame () {
    for (let rounds = 1; rounds <= 5; rounds++) {
        playRound(choiceComputer(), choicePlayer());
        console.log('Player: ' + scorePlayer);
        console.log('Computer: ' + scoreComputer);
        if (rounds == 5) {
            getGameWinner();
        }
    }
}

playGame();