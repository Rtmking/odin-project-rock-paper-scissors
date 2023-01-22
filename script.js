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
function playGame(playerSelection, computerSelection = getComputerChoice()) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return `You both chose ${playerSelection.toLowerCase()}`
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === 'paper') {
            return "Rock loses to paper. You lose!";
        } else if (computerselection === 'scissors') {
            return "Rock wins to scissors. You win!";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            return "Paper wins to rock. You win!";
        } else if (computerSelection === "scissors") {
            return "Paper loses to scissors. You lose!";
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            return "Scissors lose to rock. You lose!";
        } else if (computerSelection === "paper") {
            return "Scissors win to paper. You win!";
        }
    }
}