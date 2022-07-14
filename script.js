//to store the scores
let playerScore = 0;
let computerScore = 0;
let draws = 0;

//Computer choice section
let choice = ["rock", "paper", "scissors"];

let computerPlay = (computerChoice) => {
  computerChoice = choice[Math.floor(Math.random() * choice.length)];
  return computerChoice;
};

//messages for the results
let playerWinRound = "You win this round!";
let computerWinRound = "Your opponent wins this round!";
let draw = "It's a draw!";
let playerWin = "Congratulations, you've won!";
let computerWin = "Bad luck, your opponent won!";
let totalDraw = "You're evenly matched, it's a draw!";

//Function to play through a round and return the winner of each
let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return draw;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return playerWinRound; 
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return playerWinRound;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return playerWinRound;
  } else {
    return computerWinRound;
  }
};

//Function for the game to loop through 5 rounds, then adding results to the totals before logging the scores and final results.
let game = () => {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose your weapon. Rock, Paper or Scissors?").toLowerCase();
    const computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
     if (roundResult === playerWinRound) {
       playerScore++;
     } else if (roundResult === draw) {
       draws++;
     } else {
       computerScore++;
     }
    console.log(roundResult);
    console.log(`Your score is ${playerScore}`);
    console.log(`Your opponents score is ${computerScore}`);
  };

  if (playerScore > computerScore) {
    return playerWin;
  } else if (playerScore === computerScore) {
    return totalDraw;
  } else {
    return computerWin;
  }
};