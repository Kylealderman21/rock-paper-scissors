//User enters rock, paper, or scissors//

//Conditions are checked//
//If user selects rock and computer selects paper, user loses//
//If user selects paper and computer selects rock, user wins//
//If user selects scissors and computer selects rock, user loses//
//If user selects rock and computer selects scissors, user wins//
//If user selects paper and computer selects scissors, user loses//
//If user selects scissors and computer selects paper, user wins//
//If user selects rock and computer selects rock, tie game//
//If user selects paper and computer selects paper, tie game//
//If user selects scissors and computer selects scissors, ite game//
//Repeat the game until user or computer reaches 5 wins//

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
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            playerScore += 1;
             }
    else if (playerSelection == computerSelection) {
        console.log('Tie Game. Play Again')
    }

    else {
        console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection)
        computerScore += 1;
    }
    console.log('Player score is: ' + playerScore)
    console.log('Computer score is: '+ computerScore)
}

for (let i = 0; i < 5; i++) {
    function game() {
            playRound(playerSelection, computerSelection);
    }
}

const computerSelection = getComputerChoice();
console.log('Computer Selects: '+computerSelection);
const playerSelection = "Rock";
console.log('User Selects: '+playerSelection);
game();