// let totalRounds = 5;
let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;
const btns = document.querySelectorAll('button');
const containerEl = document.querySelector('.container');
const playerChoiceEl = document.querySelector('#playerChoice');
const computerChoiceEl = document.querySelector('#computerChoice');
const playerScoreEl = document.querySelector('#playerScore');
const computerScoreEl = document.querySelector('#computerScore');
const gameEl = document.querySelector('#game');

btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    playerSelection = e.target.id;
    playRound(playerSelection, computerSelection);
  });
});

function getComputerChoice() {
  const variants = ['Rock', 'Paper', 'Scissors'];
  let randomVariant = Math.floor(Math.random() * variants.length);
  return variants[randomVariant];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

  playerChoiceEl.textContent = `You choose: ${playerSelection}`;
  computerChoiceEl.textContent = `Computer choose: ${computerSelection}`;

  if (playerScore === 5) {
    containerEl.textContent = '';
    gameEl.textContent = `You won the game!!!`;
    return;
  } else if (computerScore === 5) {
    containerEl.textContent = '';
    gameEl.textContent = `Computer won the game!!!`;
    return;
  }

  if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock')
  ) {
    playerScore++;
    playerScoreEl.textContent = `Player score: ${playerScore}`;

    return (containerEl.textContent = `Round result: You won!`);
  } else if (computerSelection === playerSelection) {
    return (containerEl.textContent = `Round result: It's a tie`);
  }

  computerScore++;
  computerScoreEl.textContent = `Computer score: ${computerScore}`;
  return (containerEl.textContent = `Round result: You lose! ${computerSelection} beats ${playerSelection}`);
}
