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

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice){
        const computerChoice = getComputerChoice();

        if(humanChoice === computerChoice){
            alert("It's Tie!");
        }else if(
            (humanChoice === "rock" && computerChoice === "scissors")||
            (humanChoice === "scissors" && computerChoice === "paper")||
            (humanChoice === "paper" && computerChoice === "rock")
        ){
            humanScore++;
            alert(`You Win! ${humanChoice} beats ${computerChoice}`);
        }else{
            computerScore++;
            alert(`You Lose ${computerChoice} beats ${humanChoice}`);
        }
            alert(`You : ${humanScore} Computer : ${computerScore}`);


        if(humanScore === 5){
            alert(`You won the game!`);
        }else if(computerScore === 5){
            alert(`You lose the game!`);
        }
        }

        const rockBtn = document.querySelector("#rock");
        const paperBtn = document.querySelector("#paper");
        const scissorBtn = document.querySelector("#scissors");

        rockBtn.addEventListener("click", () => playRound("rock"));
        paperBtn.addEventListener("click", () => playRound("paper"));
        scissorBtn.addEventListener("click", () => playRound("scissors"));
