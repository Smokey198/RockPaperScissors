 function getComputerChoice()
 {
    let compChoice = Math.floor(Math.random() * 3 + 1);

    if (compChoice === 1) 
    {
        compChoice = "rock";
        console.log("Computer throws rock");
    }
    else if (compChoice === 2)
    {
        compChoice = "paper";
        console.log("Computer throws paper");

    }
    else
    {
        compChoice = "scissors";   
        console.log("Computer throws scissors");

    }
    return compChoice;
 }


function getUserChoice() 
{
    let playerChoice = prompt("Choose rock, paper or scissors");

    if (playerChoice.toLowerCase() === "rock")
    {
        playerChoice = "rock";
        console.log("Player throws rock");

    }
    else if (playerChoice.toLowerCase() === "paper")
    {
        playerChoice = "paper";
        console.log("Player throws paper");

    }
    else if (playerChoice.toLowerCase() === "scissors")
    {
        playerChoice = "scissors";
        console.log("Player throws scissors");

    }
    else
    {
        console.log("Please enter a valid input");
    }
    return playerChoice
}

function playRound(playerSelection, computerSelection)
{
    //Computer plays Rock
    if (playerSelection === "rock" && computerSelection === "rock")
    {
        return "Round is a tie";
        
    }
    if (playerSelection === "paper" && computerSelection === "rock")
    {
        return "Player wins round!";
    }
    if (playerSelection === "scissors" && computerSelection === "rock")
    {
        return "Computer wins round!";
    }
    //Computer plays Paper
    if (playerSelection === "rock" && computerSelection === "paper")
    {
        return "Computer wins round!";
    }
    if (playerSelection === "paper" && computerSelection === "paper")
    {
        return "Round is a tie";
    }
    if (playerSelection === "scissors" && computerSelection === "paper")
    {
        return "Player wins round!" ;
    }
    //Computer plays Scissors
    if (playerSelection === "rock" && computerSelection === "scissors")
    {
        return "Player wins round!";
    }
    if (playerSelection === "paper" && computerSelection === "scissors")
    {
        return "Computer wins round!";
    }
    if (playerSelection === "scissors" && computerSelection === "scissors")
    {
        return "Round is a tie" ;
    }
}


function playGame()
{
    let cScore = 0;
    let pScore = 0;
    
    for (let i = 0; i < 5; i++) 
    {
       
        const playerSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        
        console.log(playRound(playerSelection, computerSelection));
        winner = playRound(playerSelection, computerSelection);

        if (winner === "Player wins round!") 
        {
            pScore += 1;
        }
        if (winner === "Computer wins round!")
        {
            cScore += 1;
        }  
            
        console.log("Player: " + pScore);
        console.log("Computer: " + cScore);
    }

    if (cScore > pScore) 
    {
        console.log("Computer wins game!");
    }
    if (pScore > cScore)
    {
     console.log("Player wins game!");
    }
    if (pScore === cScore)
    {
        console.log("It's a tie!");
    }
}





playGame();