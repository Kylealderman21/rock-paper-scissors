//Coded by Kyle Alderman on October 29th, 2022//

//Computer randomly selects rock, paper or scissors from an array//
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
            results.textContent = "Results: You Win! " + playerSelection + " beats " + computerSelection;
            playerScore += 1;
            playerScorePara.textContent = `Your Score: ${playerScore}`;
            }
    else if (playerSelection == computerSelection) {
        results.textContent = 'Results: Tie Game. Play Again';
    }
    else {
        results.textContent = 'Results: You Lose! ' + computerSelection + ' beats ' + playerSelection;
        computerScore += 1;
        computerScorePara.textContent = `Computer Score ${computerScore}`;
    }
}

/*function game() {
    let playerScore = 0;
    let computerScore = 0;

    //Repeat the game for 5 rounds//

   // for (let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();

        //let playerSelection = prompt('Enter Rock, Paper, or Scissors');

        if (playerSelection === null) {
            return;
        }

        //Initialize playRound function and force player selection to capitalize first letter//
        let round = playRound(playerSelection.charAt(0).toUpperCase() +
                              playerSelection.slice(1).toLowerCase(), 
                              computerSelection);

        //Track the score of each player//                      
        if (round == 1) {
            playerScore += 1
        }

        else if (round == 2) {
            computerScore += 1
        }
//};

    console.log('Player Score is: ' + playerScore);
    console.log('Computer Score is: ' + computerScore);

    if (playerScore > computerScore) {
        console.log('You won the game!')
    }
    else if (computerScore > playerScore) {
        console.log('You lost the game!')
    }
    else if (computerScore=playerScore) {
        console.log('Tie Game.')
    }
}*/

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const results = document.querySelector('#results');
const playerScorePara = document.querySelector('#playerScore');
const computerScorePara = document.querySelector('#computerScore'); 

rockBtn.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound('Paper', getComputerChoice())
});

scissorsBtn.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice())
});









   