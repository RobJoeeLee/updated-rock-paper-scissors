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

//Declare the players score and variables.
    //Create two new variable named humanScore and computerScore in the global scope.
    //Initialize those variables with the value of 0.
let humanScore = 0;
let computerScore = 0;

