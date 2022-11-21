//Coded by Kyle Alderman on October 29th, 2022//
        //Updated November 20th, 2022//


//DOM Nodes and Events
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const results = document.querySelector('#results');
const playerScorePara = document.querySelector('#playerScore');
const computerScorePara = document.querySelector('#computerScore'); 
const reload = document.querySelector('#reload');

rockBtn.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound('Paper', getComputerChoice())
});

scissorsBtn.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice())
});

reload.addEventListener('click', () => {
    location.reload();
})

let playerScore = 0;
let computerScore = 0;

//Computer randomly selects rock, paper or scissors from an array//
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
};

//Game Logic
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
            results.textContent = "Results: Nice! " + playerSelection + " beats " + computerSelection;
            playerScore += 1;
            playerScorePara.textContent = `Your Score: ${playerScore}`;
        } 
        else if (playerSelection == computerSelection) {
        results.textContent = 'Results: Tie. Play Again';
        }
        else {
        results.textContent = 'Results: Uh Oh! ' + computerSelection + ' beats ' + playerSelection;
        computerScore += 1;
        computerScorePara.textContent = `Computer Score: ${computerScore}`;
    }
    if (playerScore === 5) {
        document.querySelector('#rockBtn').disabled = true; 
        document.querySelector('#paperBtn').disabled = true;
        document.querySelector('#scissorsBtn').disabled = true;
        reload.classList.add("fadeIn");
        reload.disabled = false;
        results.textContent = 'Game Over. You Win!'
    }
    else if (computerScore === 5) {
        document.querySelector('#rockBtn').disabled = true; 
        document.querySelector('#paperBtn').disabled = true;
        document.querySelector('#scissorsBtn').disabled = true;
        reload.classList.add("fadeIn");
        reload.disabled = false;
        results.textContent = 'Game Over. You Lose!'
    }
};








   