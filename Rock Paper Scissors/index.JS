
let cScore = 0;
let pScore = 0;

//Player button event creation
let rock = document.querySelector('#rock');
    rock.addEventListener('click', (event) => 
    {
        console.log("Player throws rock");
        playGame("rock");   
    });
let paper = document.querySelector('#paper');
    paper.addEventListener('click', (event) => 
    {
        console.log("Player throws paper");
        playGame("paper");
    });
let scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', (event) => 
    {
        console.log("Player throws scissors");
        playGame("scissors");
    });
    
let newGame = document.querySelector('#btnNewGame');
    newGame.addEventListener('click', (event) =>
    {
        restartGame();
    });

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

//Handles score
function playGame(playerChoice)
{
    const playerSelection = playerChoice;
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

    //Handles health bar (score)
    switch (pScore) 
    {
    case 1:
        var img = document.querySelector('#healthC5');
        img.src = 'Images/HeartEmpty.png'
        break;
    case 2:
        var img = document.querySelector('#healthC4');
        img.src = 'Images/HeartEmpty.png'
        break;
    case 3:
        var img = document.querySelector('#healthC3');
        img.src = 'Images/HeartEmpty.png'
        break;
    case 4:
        var img = document.querySelector('#healthC2');
        img.src = 'Images/HeartEmpty.png'
        break;
    case 5:
        var img = document.querySelector('#healthC1');
        img.src = 'Images/HeartEmpty.png'
        endGame("player");
        break;
    }
    switch (cScore) 
    {
    case 1:
        var img = document.querySelector('#healthP5');
        img.src = 'Images/HeartEmpty.png'
        break;
    case 2:
        var img = document.querySelector('#healthP4');
        img.src = 'Images/HeartEmpty.png'
        break;
    case 3:
        var img = document.querySelector('#healthP3');
        img.src = 'Images/HeartEmpty.png'
        break;
    case 4:
        var img = document.querySelector('#healthP2');
        img.src = 'Images/HeartEmpty.png'
        break;
    case 5:
        var img = document.querySelector('#healthP1');
        img.src = 'Images/HeartEmpty.png'
        endGame("computer");
        break;
    }
}
       
function playRound(playerSelection, computerSelection)
{
    //Round is a tie
    if ((playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors"))
    {
        document.querySelector('#gameInfo').innerHTML = "Round is a tie!";               
        return "Round is a tie";
    }
    //Player wins round
    if ((playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors"))
    {
        document.querySelector('#gameInfo').innerHTML = "Player wins round!";        
        return "Player wins round!";
    }
    //Computer wins round
    if ((playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors"))
    {
        document.querySelector('#gameInfo').innerHTML = "Computer wins round!";               
        return "Computer wins round!";
    }
}

//Displays winner, disables player buttons and creates new game button
function endGame(gameWinner)
{
    if (gameWinner === "player") 
    {
        document.querySelector('#gameInfo').innerHTML = "Player wins game!";  
        console.log("Player wins game!");   
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;        
        let newGame = document.querySelector('#btnNewGame');
        newGame.style.display = 'flex';
    }
    else if (gameWinner === "computer")
    {
        document.querySelector('#gameInfo').innerHTML = "Computer wins game!";  
        console.log("Computer wins game!"); 
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true; 
        let newGame = document.querySelector('#btnNewGame');
        newGame.style.display = 'flex';           
    }
}

function restartGame()
{
    cScore = 0;
    pScore = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false; 
    let newGame = document.querySelector('#btnNewGame');
        newGame.style.display = 'none';  
        document.querySelector('#gameInfo').innerHTML = ""; 
    resetHealth();              
}

function resetHealth()
{
    //Reset computer healthbar
    var img = document.querySelector('#healthC5');
    img.src = 'Images/Heartfull.png'
    var img = document.querySelector('#healthC4');
    img.src = 'Images/Heartfull.png'
    var img = document.querySelector('#healthC3');
    img.src = 'Images/Heartfull.png'
    var img = document.querySelector('#healthC2');
    img.src = 'Images/Heartfull.png'
    var img = document.querySelector('#healthC1');
    img.src = 'Images/Heartfull.png'

    //Reset player healthbar
    var img = document.querySelector('#healthP5');
    img.src = 'Images/Heartfull.png'
    var img = document.querySelector('#healthP4');
    img.src = 'Images/Heartfull.png'
    var img = document.querySelector('#healthP3');
    img.src = 'Images/Heartfull.png'
    var img = document.querySelector('#healthP2');
    img.src = 'Images/Heartfull.png'
    var img = document.querySelector('#healthP1');
    img.src = 'Images/Heartfull.png'
} 