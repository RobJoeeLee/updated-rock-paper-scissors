//Set up event listeners
const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById("result");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id);
    })
})

//Write the logic to get the comuter choice.
    //Create a new function named getComputerChoice.
    //Write the code so that getComputerChoice will randomly return one of the following string values: "rock", "paper", or "scissors".
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

//Write the logic to get the human choice.
    //Create a new function named getHumanChoice.
    //Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
function getHumanChoice(){
    let userInput = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors"){
        userInput = prompt("Invalid choice! Please enter rock, paper, or scissors:").toLowerCase();
    }
    return userInput;
}
//Write the logic to play the entire game.
    //Create a new function named playGame.
    //Move your playRound function and score variables so that they're declared inside of the new playGame function.
    //play 5 rounds by calling playRound 5 times.

    //Declare the players score and variables.
        //Create two new variable named humanScore and computerScore in the global scope.
        //Initialize those variables with the value of 0.
    let humanScore = 0;
    let computerScore = 0;

    //Write the logic to play a single round.
        //Create a new function named playRound.
            //Define two parameters for playRound: humanChoice and computerChoice.
                //Use these two parameters to take the human and computer choices as arguments.
            //Make your function's humanChoice parameter case-insensitve.
            //Write the code for your playRound function to console.log a string value representing the round winner, such as: "You lose! Paper beats Rock".
            //Increment the humanScore or computerScore variable based on the round winner.
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice){
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
    }

