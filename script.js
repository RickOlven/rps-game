function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0){
        return "rock";
    }else if (randomNumber === 1){
        return "paper";
    }else {
        return "scissors";
    }
}

function getHumanChoice() {
    let text = prompt("rock, paper, or scissors?: ");
    return text.toLowerCase();
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let human = humanChoice.toLowerCase(); 

     if (human === computerChoice){
        console.log("Tie!");
    } else if (
        (human === "rock" && computerChoice === "scissors") ||
        (human === "paper" && computerChoice === "rock") ||
        (human === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        console.log("You win!");
    } else {
        computerScore++;
        console.log("You lose!");
    }
}
    console.log("--- Round 1 ---");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("--- Round 2 ---");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("--- Round 3 ---");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("--- Round 4 ---");
    playRound(getHumanChoice(), getComputerChoice());
    console.log("--- Round 5 ---");
    playRound(getHumanChoice(), getComputerChoice());
    
    if (humanScore > computerScore){
        console.log("You win the game!");
    }else if (computerScore > humanScore){
        console.log("You lose the game!");
    }else {
        console.log("Tie!");
    }
}
playGame();