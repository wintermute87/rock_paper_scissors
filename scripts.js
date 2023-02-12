
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
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



//console.log(getComputerChoice());
