// Function that randomly generates rock, paper, or scissors
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Function that lets you input your choice and compares it to the computerChoice
function singleGame(playerSelection, computerSelection = getComputerChoice()) {
    let playerChoice = prompt("Select 'Rock', 'Paper', or 'Scissors'");
    if (playerChoice === "rock") {
        if (computerSelection === 'Rock')
    }
}