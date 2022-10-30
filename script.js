const choices = ["rock", "paper", "scissors"];


let getComputerChoice = function(){
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}


let playerScore = 0,
    computerScore = 0;

let playRound = function(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let divResult = document.querySelector('div');
    
    
    if (player == computer){      
        divResult.innerText = "Tie";
    } else if ((player == "paper") && (computer == "rock") ||
               (player == "rock")  && (computer == "scissors") ||
               (player == "scissors" && (computer == "paper"))){
        divResult.innerText = "You win! " + player + " beats " + computer;
        ++playerScore;
    } else{
        divResult.innerText = "You Lose! " + computer + " beats " + player;
        ++computerScore;
    }

    divResult.innerHTML += "<p>Player: " + playerScore + " Computer: " + computerScore + "</p>";

    if( playerScore == 5 || computerScore == 5 )
    {
        if (playerScore == 5 )
            divResult.innerHTML = "<p>You win!</p>";
        else
            divResult.innerHTML = "<p>Computer wins!</p>";
        
        playerScore = 0;
        computerScore = 0;       
    }
   
    
    
    return;
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
