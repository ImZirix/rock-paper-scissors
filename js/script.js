let humanScore = 0;
let computerScore = 0;
let totalRounds = 5;
const resultDiv = document.querySelector(".result");
const btnDiv = document.querySelector(".buttons")

function getComputerChoice() {
    let random = Math.floor((Math.random() * 3));
    if (random === 0)
        return "rock";

    else if (random === 1)
        return "paper";
    
    else return "scissors";
}

// function getHumanChoice(){
//     let hChoice;
//     hChoice = prompt("Choose rock, paper, scissors").toLowerCase().trim();
//     if (hChoice === "rock")
//         return "rock";
//     else if (hChoice === "paper")
//         return "paper";
//     else if (hChoice === "scissors")
//         return "scissors";
//     else return "invalid choice";
// }

function updateScore() {
    let scoreMessage = ` current scores - you ${humanScore}, ${computerScore}`;
    resultDiv.textContent += scoreMessage
}

function gameWinner() {
    if (computerScore === 5) {
        resultDiv.textContent = "You lost the game"
    }
    else if (humanScore === 5) {
        resultDiv.textContent = "You won the game"
    }
    else if (humanScore === 5 && computerScore === 5) {
        resultDiv.textContent = "Its a Tie game"
    }
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let resultMessage;

    if (computerChoice === "rock" && humanChoice === "scissors") {
        resultMessage = `Computer chose: ${computerChoice}. You chose: ${humanChoice}. You lose.`;
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        resultMessage = `Computer chose: ${computerChoice}. You chose: ${humanChoice}. You lose.`;
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        resultMessage = `Computer chose: ${computerChoice}. You chose: ${humanChoice}. You lose.`;
        computerScore++;
    } else if (humanChoice === computerChoice) {
        resultMessage = `Computer chose: ${computerChoice}. You chose: ${humanChoice}. It's a tie!`;
    } else {
        resultMessage = `Computer chose: ${computerChoice}. You chose: ${humanChoice}. You win!`;
        humanScore++;
    }
    resultDiv.textContent = resultMessage;
    updateScore();
    gameWinner();
}

// function playGame() {
//     for (let round = 1; round <= totalRounds; round++) {
//         console.log(`Round ${round} of ${totalRounds}`);
//         let result = playRound();
//         if (result === "human") {
//             humanScore++;
//         } else if (result === "computer") {
//             computerScore++;
//         }
//     }
//     console.log(`Final score - You: ${humanScore}, computer score: ${computerScore}`);
//     if (humanScore > computerScore) {
//         console.log("You win the game!");
//     }
//     else if (computerScore > humanScore) {
//         console.log("You lose the game.");
//     }
//     else {
//         console.log("This game is a tie");
//     }
// }

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");const btn3 = document.createElement("button");
const div = document.querySelector("div");


btnDiv.append(btn1,btn2, btn3);

btn1.textContent = "✊";
btn2.textContent = "✋";
btn3.textContent = "✌";

btn1.addEventListener("click", function() {
    playRound("rock");
});

btn2.addEventListener("click", function() {
    playRound("paper");
});

btn3.addEventListener("click", function() {
    playRound("scissors");
});

