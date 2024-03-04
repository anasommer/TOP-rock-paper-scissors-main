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
    console.log(`Round ${i + 1} : ${playRound()}`);
  }

  if (computerScore > playerScore) {
    console.log(
      `Computer wins game with score: ${computerScore} : ${playerScore}`
    );
  } else if (playerScore < computerScore) {
    console.log(`You win with score: ${playerScore} : ${computerScore}`);
  } else {
    console.log(`It's a draw: ${computerScore} : ${playerScore}`);
  }
}

playGame();
