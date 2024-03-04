// TODO: write a function 'getComputerChoice' that will randomly return either 'Rock', 'Paper', or 'Scissors'

let playerScore = 0;
let computerScore = 0;
let totalRounds = 5;
let playerSelection;
let computerSection;

const getComputerChoice = () => {
  const variants = ['rock', 'paper', 'scissors'];
  let randomVariant = Math.floor(Math.random() * variants.length);
  return variants[randomVariant];
};

const getPlayerChoice = () => {
  prompt('Rock, Paper or Scissors?').toLowerCase();
};

/* 
TODO: write a function that plays a single round called 'playRound'
TODO: It should take 2 parameters: playerSection and computerSection 
TODO: It then should return a string that declares the winner or tie of the round like so: "You Lose! Paper beats Rock"
- make sure that function's playerSelection parameter case-insensitive
*/

const playRound = (playerSelection, computerSelection) => {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);

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
};

playRound();

/* 
TODO: write another function called 'playGame' and use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end

- call playRound function 5 times in a row
- use console.log() to display the results of each round and the winner at the end
- use prompt() to get input from the user

*/
