//Variables to keep track of both party's score
let humanScore = 0;
let computerScore = 0;

//Function to get human choice
function getHumanChoice() {
    const userInput = prompt('Choose either rock paper or scissors').toLowerCase();
    return userInput;
}

getHumanChoice();

//Function to get computer choice
function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);

    if(randomChoice === 0) {
        return 'rock';
    } else if(randomChoice === 1) {
        return 'paper';
    } else if(randomChoice === 2) {
        return 'scissors';
    }
}

getComputerChoice();

//Function to play for a single round
function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    switch(humanChoice) {
        case 'rock':
            if(computerChoice === 'rock') {
                console.log('Its a tie!');
            } else if(computerChoice === 'paper') {
                console.log('Computer Wins!');
                computerScore++;
            } else if(computerChoice === 'scissors') {
                console.log('You win!');
                humanScore++;
            }

            break;

        case 'paper':
            if(computerChoice === 'rock') {
                console.log('You win!');
                humanScore++;
            } else if(computerChoice === 'paper') {
                console.log('Its a tie!');
            } else if(computerChoice === 'scissors') {
                console.log('Computer Wins!');
                computerScore++;
            }

            break;

        case 'scissors':
            if(computerChoice === 'rock') {
                console.log('Computer Wins!');
                computerScore++;
            } else if(computerChoice === 'paper') {
                console.log('You win!');
                humanScore++;
            } else if(computerChoice === 'scissors') {
                console.log('Its a tie');
            }
            
            break;

        default:
            console.log('Invalid choice');
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
}