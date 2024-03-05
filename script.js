//We are going to store the game status element in this file so it's easy to access and use for later on.

const displayStatus = document.querySelector('.game-status'); //Selects the HTML element with the class 'game-status'.

let gameActive = true; //This keeps track of the status of the game.

let currentPlayer = 'X'; //Keeps track of the current player. Starts initially with 'X'.

let gameState = ['', '', '', '', '', '', '', '', '']; //Created an array to keep track of the game state.

const winningMessage = () => `${currentPlayer} wins!`; //Displays the message for the player who wins

const drawMessage = () => `Play again. This game ended in a draw!`; //Displays this message if the game ends in a draw

const currentPlayerTurn = () => `It's ${currentPlayer}'s turn.`; //Displays this message after every turn to let the players know whose turn it is.

displayStatus.innerHTML = currentPlayerTurn(); //This updates the inner HTML of the 'displayStatus' element with the return value of the 'currentPlayerTurn' function.

function handleCellPlayed(clickedCell, clickedCellIndex) {

    /*
    In this function we are reflecting the move that was played by the player
    and then reflecting the result on to their display. 
    */

    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
};

function handlePlayerChange() {
    
    /*
    In this function we will swap between the two players after they have
    completed their turn. So we will update the currentPlayer as well as
    the game status by the use of a ternary operator to assign values to the 
    new player.
    */

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    displayStatus.innerHTML = currentPlayerTurn();
};

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleResultValidation() {

    /*
    In this function we will check if the game ends with a win or a draw.
    */

    let roundWon = false;

    for(let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        };

        if (a === b && b === c) {
            roundWon = true;
            break
        };
    };

    if (roundWon) {
        displayStatus.innerHTML = winningMessage();
        gameActive = false;
        return;
    };

    /*
    We will now check to see if there are any areas in our array that have
    not been filled in yet by a player.
    */

    let roundDraw = !gameState.includes('');

    if (roundDraw) {
        displayStatus.innerHTML = drawMessage();
        gameActive = false;
        return;
    };

    /*
    Reaching to this part of the code means that there isn't a winner yet
    and there are still moves to be played, therefore we continue by
    changing the palyer.
    */

    handlePlayerChange();
};