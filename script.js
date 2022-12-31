/* 
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
    declare a variable called winner
    if player is equivalent to 3
        set the value of winner to 'winComp'
    else
        if computer is equivalent to 0
            if player is equivalent to 0
                set the value of winner to 'tie'
                alert 'Tie, no winner'
            else if player is equivalent to 1
                set the value of winner to 'winPlayer'
                alert 'You win! Paper beats Rock!'
            else
                set the value of winner to 'winComp'
                alert 'You lose! Rock beats Scissors!'
        else if computer is equivalent to 1
            if player is equivalent to 1
                set the value of winner to 'tie'
                alert 'Tie, no winner'
            else if player is equivalent to 2
                set the value of winner to 'winPlayer'
                alert 'You win! Scissors beats Paper!'
            else
                set the value of winner to 'winComp'
                alert 'You lose! Paper beats Rock!'
        else if computer is equivalent to 2
            if player is equivalent to 2
                set the value of winner to 'tie'
                alert 'Tie, no winner'
            else if player is equivalent to 0
                set the value of winner to 'winPlayer'
                alert 'You win! Rock beats Scissors!'
            else
                set the value of winner to 'winComp'
                alert 'You lose! Scissors beats Paper!'
    return the value of winner

declare a function called playGame with 1 parameter called score
    declare a variable called winsPlayer with a value of 0
    declare a variable called winsComputer with a value of 0
    start a loop that increments a variable called rounds until it is equivalent to 5
        call the playRound function with choiceComputer and choicePlayer as inputs
        if playRound is equivalent to winComp
            increment winsComputer by 1
        else if playRound is equivalent to winPlayer
            increment winsPlayer by 1
        log 'Player: ' + winsPlayer to the console
        log 'Computer: ' + winsComputer to the console
*/

/*
ISSUES:
score isn't adjusting accurately
*/

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
        winner = 'winComp';
    } else {
        if (computer === 0) {
            if (player === 0) {
                winner = 'tie';
                alert ('Tie, no winner');
            } else if (player === 1) {
                winner = 'winPlayer';
                alert ('You win! Paper beats Rock!');
            } else {
                winner = 'winComp';
                alert ('You lose! Rock beats Scissors!');
            }
        } else if (computer === 1) {
            if (player === 1) {
                winner = 'tie';
                alert ('Tie, no winner');
            } else if (player === 2) {
                winner = 'winPlayer';
                alert ('You win! Scissors beats Paper!');
            } else {
                winner = 'winComp';
                alert ('You lose! Paper beats Rock!');
            }
        } else if (computer === 2) {
            if (player === 2) {
                winner = 'tie';
                alert ('Tie, no winner');
            } else if (player === 0) {
                winner = 'winPlayer';
                alert ('You win! Rock beats Scissors!');
            } else {
                winner = 'winComp';
                alert ('You lose! Scissors beats Paper!');
            }
        }
    }
    console.log(winner);
    return winner;
}

// playGame
function playGame () {
    let winsPlayer = 0;
    let winsComputer = 0;
    for (let rounds = 1; rounds <= 5; rounds++) {
        playRound(choiceComputer(), choicePlayer());
        if (playRound() == 'winComp') {
            winsComputer++;
        } else if (playRound() == 'winPlayer') {
            winsPlayer++;
        }
        console.log('Player: ' + winsPlayer);
        console.log('Computer: ' + winsComputer);
    }
}

playGame();