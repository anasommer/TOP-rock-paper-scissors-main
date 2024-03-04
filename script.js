let totalRounds = 5;
let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;

function getComputerChoice() {
  const variants = ['rock', 'paper', 'scissors'];
  let randomVariant = Math.floor(Math.random() * variants.length);
  return variants[randomVariant];
}

function getPlayerChoice() {
  return prompt('Rock, Paper or Scissors?').toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerScore++;
    return `You won!`;
  } else if (computerSelection === playerSelection) {
    return `It's a tie`;
  }

  computerScore++;
  return `You lose! ${computerSelection} beats ${playerSelection}`;
}

function playGame() {
  for (let i = 0; i < totalRounds; i++) {
    console.log(playRound());
  }
  console.log(computerScore, playerScore);
}
playGame();

/* 
TODO: write another function called 'playGame' and use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end

- call playRound function 5 times in a row
- use console.log() to display the results of each round and the winner at the end
- use prompt() to get input from the user

*/
