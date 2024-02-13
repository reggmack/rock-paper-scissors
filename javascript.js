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
//console.log(getComputerChoice());

// Play a single round
let playerSelection = prompt(
  "Enter your Choice",
  "Choose Rock, Paper, or Scissors"
).toLowerCase();
const computerSelection = getComputerChoice().toLowerCase();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock";
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    return "You Win! Scissors beat Paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock";
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors";
  } else if (computerSelection == "scissors" && playerSelection == "rock") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win! Scissors beats Paper";
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == computerSelection) {
    return "It's a tie!";
  }
}
console.log("You chose: " + playerSelection);
console.log("The computer chose: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
