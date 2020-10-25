//a function that will randomly return rock paper or scissors.
//start with an array of possible options(rock/paper/scissor)
//use math.random() to help choose a random index of array to return.
function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return options[getRandomInt(options.length)];
}

function humanPlay() {
    let userInput = (prompt("ROCK, PAPER, SCISSORS... SHOOT"));

    return userInputCheck(userInput) ? userInput.toLowerCase() : humanPlay();
}
//a function that plays a single round of rock paper scissors.
//this function should take 2 arguments playerSelection and computer Selecton
//this function should return a string that declares the winner of the round.
function play1round(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = humanPlay();


    console.log(`You chose : ${playerSelection}`);
    console.log(`Computer chose : ${computerSelection}`);
    //figure out all cases where you tie
    if ((computerSelection === 'rock' && playerSelection === 'rock') ||
        (computerSelection === 'paper' && playerSelection === 'paper') ||
        (computerSelection === 'scissors' && playerSelection === 'scissors')) {
        return `This round is a tie, both players chose ${playerSelection}`;
    } else if ( //figure out all cases in which the player wins
        (computerSelection === 'rock' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'rock')) {
        return `You win, ${playerSelection} beats ${computerSelection}`
    } else { //all other cases = player loses
        return `You lose, ${computerSelection} beats ${playerSelection}`;
    }
}

//constraints:* make function case insensitive
//take user input and make it all lowercase before comparing the cpu selection with player selection

//compile a new function called 'game()' and use the previous function inside this one to play 5 rounds.
//game function should keep score and will report a winner or loser at the end of a round

/**function game() {
    console.log(`let's play a match of Rock Paper Scissors, best out of 5 wins it all`);
    let playerScore = 0;
    let cpuScore = 0;
    while (playerScore + cpuScore !== 5) {
        //check if any player has 3 points exit while loop & declare winner
        if (playerScore === 3 || cpuScore === 3) {
            break;
        }
        //invoke play1rd and record score
        let oneRound = play1round();
        if (oneRound.includes('win')) {
            playerScore++;
            console.log(`The score is:\nYou: ${playerScore} VS CPU: ${cpuScore}`);
        } else if (oneRound.includes('lose')) {
            cpuScore++;
            console.log(`The score is:\nYou: ${playerScore} VS CPU: ${cpuScore}`);
        }
    }
    //declare winner
    if (playerScore > cpuScore) {
        return 'You are the winner! :)'
    } else {
        return 'Nice try Mate, Guess luck is not on your side! :('
    }
}
**/
//helper functions
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
//user input validation
function userInputCheck(input) {
    if (input === 'rock' || input === 'paper' || input === 'scissors') {
        return true;
    } else {
        return false;
    }
}