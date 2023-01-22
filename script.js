// Define the global variables containing the scores
let computerScore = 0;
let playerScore = 0;

// Function that randomly generates rock, paper, or scissors
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function that lets you input your choice as an argument and compares it to the computerChoice
// It also adds upon the playerScore and computerScore defined globally
function playRound(playerSelection, computerSelection = getComputerChoice()) {
    // Code when both Player and PC choose the same
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a tie"
    // 3 code blocks when the player wins or loses
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === 'paper') {
            computerScore++
            return "Rock loses to paper. You lose!";
        } else if (computerSelection === 'scissors') {
            playerScore++;
            return "Rock wins to scissors. You win!";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return "Paper wins to rock. You win!";
        } else if (computerSelection === "scissors") {
            computerScore++;
            return "Paper loses to scissors. You lose!";
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            return "Scissors lose to rock. You lose!";
        } else if (computerSelection === "paper") {
            playerScore++;
            return "Scissors win to paper. You win!";
        }
    }
}

// Function that plays 5 rounds by calling on the playRound() function. It keeps scores.
function game() {
    // Before starting, reset the scores
    playerScore = 0;
    computerScore = 0;
    // Play 5 rounds with 5 prompt-inputs as arguments
    for (let i = 0; i < 5; i++) {
        let roundChoice = prompt("Choose rock, paper, or scissors:");
        let result = playRound(roundChoice);
        // we subtract 1 from the iterator of the for-loop if the result is a tie.
        if (result === "It's a tie") {
            i--;
        }
    }
    // At the end of the 5 rounds, this function returns the scoreboard and the winner.
    if (playerScore > computerScore) {
        return `The score is ${playerScore} vs ${computerScore}, you win the match!`
    } else if (playerScore < computerScore) {
        return `The score is ${playerScore} vs ${computerScore}, you lose the match!`
    } else if (playerScore === computerScore) {
        return `The score is ${playerScore} vs ${computerScore}, it's a tie!`
    }
}