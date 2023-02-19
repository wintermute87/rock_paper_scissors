
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





function game(playerChoice)
{

        
    //console.log(e.target);

        let computer_choice = getComputerChoice();
        result_round = playRound(playerChoice,computer_choice);
        console.log(result_round);


        div_result.textContent = result_round;
        containerResultRound.appendChild(div_result);

        if(result_round.startsWith("You win"))
        {
            yourScore ++;
        }
        else if(result_round.startsWith("You lose"))
        {
            computerScore ++;
        }

        console.log(`your_score =  ${yourScore} `);
        console.log(`computer_score =  ${computerScore} `);

        if(yourScore === 5)
        {
            console.log(`Congratulations ! You won the game`);
            document.querySelector('.rock').disabled = true;
            document.querySelector('.paper').disabled = true;
            document.querySelector('.scissors').disabled = true;
            
        //    yourScore=0;
        //    computerScore=0;

            gameResult.textContent = "Congratulations ! You won the game";
            gameResultScore.appendChild(gameResult);
        }    
        
        if(computerScore === 5)
        {
            console.log(`The computer won game`);
            document.querySelector('.rock').disabled = true;
            document.querySelector('.paper').disabled = true;
            document.querySelector('.scissors').disabled = true;
            
            //    yourScore=0;
         //   computerScore=0;

            gameResult.textContent = "The computer won the game";
            gameResultScore.appendChild(gameResult);


         //   document.body.removeChild(gameResult);
        }    

        yourScoreResult.textContent = "Your score: " + yourScore;
        containerResultScore.appendChild(yourScoreResult);


        computerScoreResult.textContent = "The computer score: " + computerScore;
        containerResultScore.appendChild(computerScoreResult);

 
       
    }
   
    function newGame()
    {   
        location.reload();
        /*
        if(document.querySelector(".content_result") != null)
            document.body.removeChild(gameResult);
        */
    }

    let yourScore = 0;
    let computerScore = 0;
    let newGameStart = 0;


    let result_round = "";


    const container = document.querySelector(".results");
    const containerResultRound = document.querySelector(".result-round");
    const containerResultScore = document.querySelector(".result-score");
    const gameResultScore = document.querySelector(".game-result");

    const div_result = document.createElement('div');
    div_result.classList.add('content_result');


    //your score result
    const yourScoreResult = document.createElement('div');
    yourScoreResult.classList.add('content_result');



    //computer score result
    const computerScoreResult = document.createElement('div');
    computerScoreResult.classList.add('content_result');

    //Game result
    const gameResult = document.createElement('div');
    gameResult.classList.add('content_result');



    const btn_rock = document.querySelector('.rock');
    btn_rock.addEventListener('click', function () {
        game("rock");
    });


    const btn_paper = document.querySelector('.paper');
    btn_paper.addEventListener('click', () => { game("paper")} );


    const btn_scissors = document.querySelector('.scissors');
    btn_scissors.addEventListener('click', function () {
        game("scissors");
    });

    const new_gameButton = document.querySelector('.new-game-button');
    new_gameButton.addEventListener('click', newGame);

   


