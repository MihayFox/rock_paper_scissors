console.log("Hello, World!");

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
    }

    document.getElementById('human-score').textContent = "Your score : " + humanScore;
}

    do {
    playRound();

    if (humanScore === 5) {
        console.log("Congratulations! You won the game!");
        document.getElementById('result').textContent = "Congratulations! You won the game!";
        break;
    } else if (computerScore === 5) {
        console.log("Computer won the game! Better luck next time.");
        document.getElementById('result').textContent = "Computer won the game! Better luck next time.";
        break;
    }
} while (humanScore < 5 && computerScore < 5);
