//User enters rock, paper, or scissors//
//Computer randomly selects rock, paper or scissors from an array//
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


function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    console.log(choices[Math.floor(Math.random() * choices.length)]);
}

getComputerChoice();

