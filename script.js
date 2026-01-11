//Variables to keep track of both party's score
let humanScore = 0;
let computerScore = 0;
let winningScore = 5;

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

//Function to play for a single round
function playRound(humanChoice, computerChoice) {

    switch(humanChoice) {
        case 'rock':
            if(computerChoice === 'rock') {
                return 'Tie';
            } else if(computerChoice === 'paper') {
                computerScore++;
                return 'Computer';
            } else if(computerChoice === 'scissors') {
                humanScore++;
                return 'Player';
            }

            break;

        case 'paper':
            if(computerChoice === 'rock') {
                humanScore++;
                return 'Player';
            } else if(computerChoice === 'paper') {
                return 'Tie';
            } else if(computerChoice === 'scissors') {
                computerScore++;
                return 'Computer';
            }

            break;

        case 'scissors':
            if(computerChoice === 'rock') {
                computerScore++;
                return 'Computer';
            } else if(computerChoice === 'paper') {
                humanScore++;
                return 'Player';
            } else if(computerChoice === 'scissors') {
                return 'Tie';
            }
            
            break;
            
    }
}

const buttons = document.querySelectorAll('button');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const playerScore = document.querySelector('.player-score');
const compScore = document.querySelector('.computer-score');
const result = document.querySelector('.result');


buttons.forEach((button) => {
    button.addEventListener('click', () => {

        const humanSelection = button.id;
        playerChoice.textContent = `You chose:${humanSelection}`;
        const computerSelection = getComputerChoice();
        computerChoice.textContent = `Computer chose:${computerSelection}`;
        
        const round = playRound(humanSelection, computerSelection);

        if(round === 'Player') {
            result.textContent = 'You win this round!';
        } else if(round === 'Computer') {
            result.textContent = 'Computer wins this round!';
        } else if(round === 'Tie') {
            result.textContent = "It's a Tie!"
        }

        playerScore.textContent = `Player has: ${humanScore}`;
        compScore.textContent = `Computer has: ${computerScore}`;

        
        if(humanScore === winningScore) {
            result.textContent = 'Player Wins!';
            buttons.forEach(btn => btn.disabled = true);
        } else if(computerScore === winningScore) {
            result.textContent = 'Computer Wins!';
            buttons.forEach(btn => btn.disabled = true);
        }

    });
});
