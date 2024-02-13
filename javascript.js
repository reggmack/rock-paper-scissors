/* function getComputerChoice(min = 1, max = 3) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
} */

// console.log(getComputerChoice());

function getComputerChoice() {
    const min = 1;
    const max = 3;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let shuffle = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    if (shuffle == 1) {
        return "Rock";
    } else if (shuffle == 2){
        return "Paper";
    } else {
        return "Scissors";
    }
  }
  console.log(getComputerChoice());

