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
}