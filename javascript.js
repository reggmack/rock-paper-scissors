// Global Variables
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let winner;

// Get Computer's choice
function getComputerChoice() {
  const min = 1;
  const max = 3;
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  let shuffle = Math.floor(
    Math.random() * (maxFloored - minCeiled + 1) + minCeiled
  );
  if (shuffle == 1) {
    return "Rock";
  } else if (shuffle == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Play a Single Round
function playRound(playerSelection, computerSelection) {
  playerSelection = prompt(
    "Enter your Choice",
    "Choose Rock, Paper, or Scissors"
  ).toLowerCase();

  computerSelection = getComputerChoice().toLowerCase();

  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore = playerScore + 1;
    return `You chose ${playerSelection}, The computer chose ${computerSelection}
    You Win! Rock beats Scissors`;
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    computerScore = computerScore + 1;
    return `You chose ${playerSelection}, The computer chose ${computerSelection}
    You Lose! Rock beats Scissors`;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore = computerScore + 1;
    return `You chose ${playerSelection}, The computer chose ${computerSelection}
    You Lose! Paper beats Rock`;
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    playerScore = playerScore + 1;
    return `You chose ${playerSelection}, The computer chose ${computerSelection}
    You Win! Paper beats Rock`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore = computerScore + 1;
    return `You chose ${playerSelection}, The computer chose ${computerSelection}
    You Lose! Scissors beats Paper`;
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    playerScore = playerScore + 1;
    return `You chose ${playerSelection}, The computer chose ${computerSelection}
    You Win! Scissors beat Paper`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore = playerScore + 1;
    return `You chose ${playerSelection}, The computer chose ${computerSelection}
    You Win! Paper beats Rock`;
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    computerScore = computerScore + 1;
    return `You chose ${playerSelection}, The computer chose ${computerSelection}
    You Lose! Paper beats Rock`;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore = computerScore + 1;
    return `You chose ${playerSelection}, The computer chose ${computerSelection}
    You Lose! Rock beats Scissors`;
  } else if (computerSelection == "scissors" && playerSelection == "rock") {
    playerScore = playerScore + 1;
    return `You chose ${playerSelection}, The computer chose ${computerSelection}
    You Win! Rock beats Scissors`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore = playerScore + 1;
    return `You chose ${playerSelection}, The computer chose ${computerSelection}
    You Win! Scissors beats Paper`;
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    computerScore = computerScore + 1;
    return `You chose ${playerSelection}, The computer chose ${computerSelection}
    You Lose! Scissors beats Paper`;
  } else if (playerSelection == computerSelection) {
    return `You chose ${playerSelection} and the computer chose ${computerSelection}
    It's a tie!`;
  }
}

// Play a 5-Round Game
function playGame() {
  console.log(
    playRound(playerSelection, computerSelection),
    `
  Round 1
  Player Score: ${playerScore}
  Computer Score: ${computerScore}`
  );
  console.log(
    playRound(playerSelection, computerSelection),
    `
  Round 2
  Player Score: ${playerScore}
  Computer Score: ${computerScore}`
  );
  console.log(
    playRound(playerSelection, computerSelection),
    `
  Round 3
  Player Score: ${playerScore}
  Computer Score: ${computerScore}`
  );
  console.log(
    playRound(playerSelection, computerSelection),
    `
  Round 4
  Player Score: ${playerScore}
  Computer Score: ${computerScore}`
  );
  console.log(
    playRound(playerSelection, computerSelection),
    `
  Final Round
  Player Score: ${playerScore}
  Computer Score: ${computerScore}`
  );
  if (playerScore > computerScore) {
    return "Congratulations! You beat the computer.";
  } else if (computerScore > playerScore) {
    return "Too Bad! The computer beat you.";
  } else {
    return "The game ends in a tie.";
  }
}
console.log(playGame());
