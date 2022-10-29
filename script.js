

//If user selects rock and computer selects paper, user loses//
//If user selects paper and computer selects rock, user wins//
//If user selects scissors and computer selects rock, user loses//
//If user selects rock and computer selects scissors, user wins//
//If user selects paper and computer selects scissors, user loses//
//If user selects scissors and computer selects paper, user wins//
//If user selects rock and computer selects rock, tie game//
//If user selects paper and computer selects paper, tie game//
//If user selects scissors and computer selects scissors, ite game//


//Computer randomly selects rock, paper or scissors from an array//

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}


//Conditions are checked//

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            return 1;
             }
    else if (playerSelection == computerSelection) {
        console.log('Tie Game. Play Again')
    }
    else {
        console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection);
        return 2;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    //Repeat the game for 5 rounds//

    for (let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();

        //User enters rock, paper, or scissors//

        let playerSelection = prompt('Enter Rock, Paper, or Scissors');
        if (playerSelection === null) {
            return;
        }
        let round = playRound(playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1).toLowerCase(), computerSelection);
        if (round == 1) {
            playerScore += 1
        }
        else if (round == 2) {
            computerScore += 1
        }
    }
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
    
}


   