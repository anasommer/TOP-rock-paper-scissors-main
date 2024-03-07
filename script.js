// let totalRounds = 5;
let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;
const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    console.log(e.target.id);
    playerSelection = e.target.id;
    playRound(playerSelection, computerSelection);
  });
});

// call playRound function with the correct playerSelection every time a button is clicked
// add a div for displaying results and change all console.logs into DOM methods
// display the running score
// announce a winner of the game once one player reached 5 points

function getComputerChoice() {
  const variants = ['rock', 'paper', 'scissors'];
  let randomVariant = Math.floor(Math.random() * variants.length);
  return variants[randomVariant];
}

// function getPlayerChoice() {
//   return prompt('Rock, Paper or Scissors?').toLowerCase();
// }
function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerScore++;
    return console.log(`You won!`);
  } else if (computerSelection === playerSelection) {
    return console.log(`It's a tie`);
  }

  computerScore++;
  return console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
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

// playGame();
