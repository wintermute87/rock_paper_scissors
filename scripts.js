
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
   
}
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



//console.log(getComputerChoice());
