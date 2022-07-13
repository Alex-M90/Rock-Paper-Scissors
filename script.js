let choice = ['rock', 'paper', 'scissors'];

let computerPlay = (computerChoice) => {
    computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
};

let playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection) {
        return "It's a draw!"
    } else if ((playerSelection === "paper") && (computerSelection === "rock")){
        return "You win! Paper beats rock."
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return "You win! Rock beats scissors."
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return "You win! Scissors beats paper."
    } else {
        return "You lose! Try again."
    }
};

const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));