
function getComputerChoice()
{
    //Generate random nr between 1 and 3 => corresponding to Rock paper scissors
    let selectChoice = Math.random()*2+1;
    let selectChoiceInt = Math.round(selectChoice);


    if(selectChoiceInt === 1)
    {
        return "rock";
    }
    else if(selectChoiceInt === 2)
    {
        return "paper";
    }
    else
        return "scissors";


}

function playRound(playerSelection, computerSelection) 
{
    switch (playerSelection.toLowerCase()) 
    {
        case "rock":
        {
            if(computerSelection === "scissors")
                return "You win: Rock beats scissors";
            else if(computerSelection === "paper")
                return "You lose: paper beats rock";
            else
                return "Tie: rock";
        }    
            break;
    
        case "paper":
        {
            if(computerSelection === "rock")
                return "You win: paper beats rock";
            else if(computerSelection === "scissors")
                return "You lose: scissors beats paper";
            else
                return "Tie: paper";
        }    
            break;

        case "scissors":
        {
            if(computerSelection === "paper")
                return "You win: scissors beats paper";
            else if(computerSelection === "rock")
                return "You lose: rock beats scissors";
            else
                return "Tie: scissors";
        }    
            break;


        default:
            break;
    }
}

function game()
{

    let yourScore = 0;
    let computerScore = 0;

    for (let i = 1; i < 6; i++) 
    {
        let playerSelection;
        do {
            playerSelection = prompt("Enter paper, rock or scissors:");
        } while (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors");
        


        let computerSelection = getComputerChoice();
    
        console.log(`********  Round ${i}  ********`)
        console.log(`You played ${playerSelection}`);
        console.log(`The computer played ${computerSelection}`);
    
        let result_round = playRound(playerSelection, computerSelection);
        
        console.log(result_round);
        console.log(`******************************\n\n`)

        if(result_round.startsWith("You win"))
        {
            yourScore ++;
        }
        else if(result_round.startsWith("You lose"))
        {
            computerScore ++;
        }
    }


    if(yourScore>computerScore)
        console.log(`Congratulations ! You won ${yourScore} rounds of the game`);
    else if(yourScore<computerScore)
        console.log(`Computer won. Unfortunately you won only ${yourScore} rounds of the game`);
    else
        console.log(`Tie. Both you and the computer won ${yourScore} rounds`)
   
}
   

game()




//console.log(getComputerChoice());
