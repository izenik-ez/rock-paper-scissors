const choices = ["rock", "paper", "scissors"];


let getComputerChoice = function(){
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}


let playRound = function(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();


    if (player == computer)        
        return "Tie";
        
    if ((player == "paper") && (computer == "rock") ||
        (player == "rock")  && (computer == "scissors") ||
        (player == "scissors" && (computer == "paper"))){
        return "You win! " + player + " beats " + computer;
    } else{
        return "You Lose! " + computer + " beats " + player;
    }    
}

let game = function (){
    let playerSelection;
    let computerSelection;

    playerSelection = prompt("Enter your choice: ");
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));    
}


buttons = document.querySelectorAll('button');
buttons[0].addEventListener('click', () =>  {playRound ('Rock', getComputerChoice());});
buttons[1].addEventListener('click', () =>  {playRound ('Paper', getComputerChoice());});
buttons[2].addEventListener('click', () =>  {playRound ('Scissors', getComputerChoice());});
console.log(buttons);

//game();
