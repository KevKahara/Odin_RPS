//Variables to keep track of both party's score
const humanScore = 0;
const computerScore = 0;

//Function to get human choice
function getHumanChoice() {
    const userInput = prompt('Choose either rock paper or scissors');

    if(userInput === 'rock') {
        return 'You chose Rock';
    } else if(userInput === 'paper') {
        return 'You chose Paper';
    } else if(userInput === 'scissors') {
        return 'You chose scissors';
    }
}

console.log(getHumanChoice());

//Function to get computer choice
function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);

    if(randomChoice === 0) {
        return 'Computer chose rock';
    } else if(randomChoice === 1) {
        return 'Computer chose paper';
    } else if(randomChoice === 2) {
        return 'Computer chose scissors';
    }
}

console.log(getComputerChoice());

//Function to play for a single round
function playRound(humanChoice, computerChoice) {
    
    switch(humanChoice) {
        case 'rock':
            switch(computerChoice) {
                case 'rock':
                    console.log('Its a tie!');
                    break;

                    case 'paper':
                        console.log('Computer Wins!')
                        computerScore++;
                        break;

                    case 'scissors':
                        console.log('You Win!');
                        humanScore++;
                        break;
            }

            break;

        case 'paper':
            switch(computerChoice) {
                case 'rock':
                    console.log('You win!');
                    humanScore++;
                    break;

                case 'paper':
                    console.log('Its a Tie!');
                    break;

                case 'scissors':
                    console.log('Computer Wins!');
                    computerScore++;
                    break;
            }

            break;


        case 'scissors':
            switch(computerChoice) {
                case 'rock':
                    console.log('Computer Wins!');
                    computerScore++;
                    break;

                case 'paper':
                    console.log('You win!');
                    humanScore++;
                    break;

                case 'scissors':
                    console.log('Its a tie!');
                    break;
            }

            break;

    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));