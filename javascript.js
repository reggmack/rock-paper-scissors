// Global Variables
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

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

function playRoundRock(playerSelection, computerSelection) {
  playerSelection = "rock";

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

function playRoundPaper(playerSelection, computerSelection) {
  playerSelection = "paper";

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

function playRoundScissors(playerSelection, computerSelection) {
  playerSelection = "scissors";

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

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

let results;
const container = document.querySelector("#resultsContainer");
const roundResults = document.createElement("p");
roundResults.setAttribute("style", "white-space: pre;");

const scoreBoard = document.querySelector("#scoreBoard");
let announceWinner = document.createElement("h3");
let playAnotherRound = document.createElement("p");

function checkScore() {
  if (playerScore === 0 && computerScore === 0) {
    announceWinner.textContent = "";
    scoreBoard.appendChild(announceWinner);
  } else if (playerScore === 5) {
    playAnotherRound.textContent = "";
    announceWinner.style.color = "green";
    announceWinner.textContent = "You beat the computer!";
    scoreBoard.appendChild(announceWinner);
    playerScore = 0;
    computerScore = 0;
    playAnotherRound.textContent = "Play Again?";
    scoreBoard.appendChild(playAnotherRound);
  } else if (computerScore === 5) {
    playAnotherRound.textContent = "";
    announceWinner.style.color = "red";
    announceWinner.textContent = "You lost to the computer!";
    scoreBoard.appendChild(announceWinner);
    playerScore = 0;
    computerScore = 0;
    playAnotherRound.textContent = "Play Again?";
    scoreBoard.appendChild(playAnotherRound);
  } else {
    playAnotherRound.textContent = "Play another round...";
    scoreBoard.appendChild(playAnotherRound);
  }
}

btnRock.addEventListener("click", () => {
  checkScore();
  results = playRoundRock();
  roundResults.textContent = `${results}\n
  Player Score: ${playerScore}
  Computer Score: ${computerScore}`;
  container.appendChild(roundResults);
  checkScore();
});

btnPaper.addEventListener("click", () => {
  checkScore();
  results = playRoundPaper();
  roundResults.textContent = `${results}\n
  Player Score: ${playerScore}
  Computer Score: ${computerScore}`;
  container.appendChild(roundResults);
  checkScore();
});

btnScissors.addEventListener("click", () => {
  checkScore();
  results = playRoundScissors();
  roundResults.textContent = `${results}\n
  Player Score: ${playerScore}
  Computer Score: ${computerScore}`;
  container.appendChild(roundResults);
  checkScore();
});
