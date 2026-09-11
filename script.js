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
console.log(getComputerChoice());

function getHumanChoice() {
    let text = prompt("rock, paper, or scissors?: ");
    return text.toLowerCase();
}
console.log(getHumanChoice())

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