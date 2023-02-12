
function getComputerChoice()
{
    //Generate random nr between 1 and 3 => corresponding to Rock paper scissors
    let selectChoice = Math.random()*2+1;
    let selectChoiceInt = Math.round(selectChoice);


    if(selectChoiceInt === 1)
    {
        return "Rock";
    }
    else if(selectChoiceInt === 2)
    {
        return "Paper";
    }
    else
        return "Scissors";


}



console.log(getComputerChoice());
