// let options = ["rock", "paper", "scissors"]
// let humanScore = 0;
// let computerScore = 0;
// const totalRounds = 5;

// function getComputerChoice() {
//     let randomIndex = Math.floor(Math.random() * 3);
//     return options[randomIndex];
    
// }
// // console.log(getComputerChoice())

// function getHumanChoice(){
//    let validChoices = ['rock', 'paper', 'scissors'];
//    let userInput = prompt("Enter your choice:");
//    userInput = userInput ? userInput.toLowerCase().trim(): '';
//    if (validChoices.includes(userInput)) {
//     return userInput;
//    } else {
//     alert("invalid choice. please choose 'rock', 'paper', or 'scissors'.");
//     return null;
//    }

// }
// // console.log(getHumanChoice())

// function playRound(humanChoice, computerChoice) {
//     let choices = ['rock', 'paper', 'scissors'];
//     let result;

//     if (humanChoice === computerChoice) {
//         result = "it's a tie!";
//     } else if (
//     (humanChoice === 'rock' && computerChoice === 'scissors') || 
//     (humanChoice === 'paper' && computerChoice === 'rock') || 
//     (humanChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//         result = "You win!"
//         humanScore++;
//     } else {
//         result = "You lose!";
//         computerScore++;
//     }
//     console.log(`Human choice: ${humanChoice}`)
//     console.log(`Computer choice: ${computerChoice}`)
//     console.log(result);
//     console.log(`score - Human: ${humanScore}, Computer: ${computerScore}`)
// }

// function playGame() {
//     for (let round = 1; round <= totalRounds; round++) {
//         console.log(`Round ${round} of ${totalRounds}`);
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice);
//     }

//     console.log("Game over!");
//     if (humanScore > computerScore) {
//         console.log(`You win the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
//     } else if (computerScore > humanScore) {
//         console.log(`Computer wins the game! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
//     } else {
//         console.log(`The game is a tie! Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
//     }
// }
// playGame()
