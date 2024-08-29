let humanScore = 0;
let computerScore = 0;
let totalRounds = 5;

function getComputerChoice() {
    let random = Math.floor((Math.random() * 3));
    if (random === 0)
        return "rock";

    else if (random === 1)
        return "paper";
    
    else return "scissors";
}

function getHumanChoice(){
    let hChoice;
    hChoice = prompt("Choose rock, paper, scissors").toLowerCase().trim();
    if (hChoice === "rock")
        return "rock";
    else if (hChoice === "paper")
        return "paper";
    else if (hChoice === "scissors")
        return "scissors";
    else return "invalid choice";
}

function playRound(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log(`Computer chose: ${computerChoice}`);
    console.log(`You chose: ${humanChoice}`);
    if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose");
        return "computer"
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose");
        return "computer"
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose");
        return "computer"
    }
    else if (humanChoice === computerChoice)
        return "Its a Tie!";
    else {
        console.log("You win!");
        return "human";
    }
}

function playGame() {
    for (let round = 1; round <= totalRounds; round++) {
        console.log(`Round ${round} of ${totalRounds}`);
        let result = playRound();
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
    }
    console.log(`Final score - You: ${humanScore}, computer score: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win the game!");
    }
    else if (computerScore > humanScore) {
        console.log("You lose the game.");
    }
    else {
        console.log("This game is a tie");
    }
}
console.log(playGame())