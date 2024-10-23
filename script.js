/* first players choose a name, then player 1 (or x) goes first, then player 2 (o) goes next and game continues till one or the other wins or a tie. the result is then printed on screen*/
/* set up game board in a three by three */

/*look at array manipulation/ user input temporary*/

function createGame() {
  const gameBoard = new Array(9).fill(null);
  let gameState = 'playing | draw | win'
  return gameBoard, gameState;
}

function playGame() {
  let newGameBoard = createGame();

  let playerName1 = prompt('choose a name');
  let piece1 = prompt('choose x or o');

  let playerName2 = prompt('choose a name');
  let piece2 = prompt('choose x or o');

  let playerOne = createPlayer(playerName1, piece1);
  let playerTwo = createPlayer(playerName2, piece2);

  console.log(playerOne);
  console.log(playerTwo);

  let userInput = prompt('Choose a number between 0 and 8');
  let updatedGameBoard = updateGameBoard(newGameBoard, userInput);

  /*while game != won {
    run game

    Playone choice
    Play2 choice

    decide round winner


    how do i make this work?

    return winner
    
    while loop, do while loop, do loop while array has a null value?
  }
*/
  
function checkForWin() {
  const win = "no";
  if (
  (gameBoard.gameBoard[0] === currentPlayer.token &&
    gameBoard.gameBoard[1] === currentPlayer.token &&
    gameBoard.gameBoard[2] === currentPlayer.token) ||
  (gameBoard.gameBoard[3] === currentPlayer.token &&
    gameBoard.gameBoard[4] === currentPlayer.token &&
    gameBoard.gameBoard[5] === currentPlayer.token) ||
  (gameBoard.gameBoard[6] === currentPlayer.token &&
    gameBoard.gameBoard[7] === currentPlayer.token &&
    gameBoard.gameBoard[8] === currentPlayer.token)
    )
    return win = "win"
  else if (
    (gameBoard.gameBoard[0] === currentPlayer.token &&
      gameBoard.gameBoard[3] === currentPlayer.token &&
      gameBoard.gameBoard[6] === currentPlayer.token) ||
    (gameBoard.gameBoard[1] === currentPlayer.token &&
      gameBoard.gameBoard[4] === currentPlayer.token &&
      gameBoard.gameBoard[7] === currentPlayer.token) ||
    (gameBoard.gameBoard[2] === currentPlayer.token &&
      gameBoard.gameBoard[5] === currentPlayer.token &&
      gameBoard.gameBoard[8] === currentPlayer.token)
    )
    return win = 'win'
  else if (
    (gameBoard.gameBoard[0] === currentPlayer.token &&
      gameBoard.gameBoard[4] === currentPlayer.token &&
      gameBoard.gameBoard[8] === currentPlayer.token) ||
    (gameBoard.gameBoard[2] === currentPlayer.token &&
      gameBoard.gameBoard[4] === currentPlayer.token &&
      gameBoard.gameBoard[6] === currentPlayer.token)
    s)
   
}



}

/**
* Update should take the userInput and change the gameBoard with piece... how to get piece?
*/
function updateGameBoard(gameBoard, userInput, piece) {

  console.log(gameBoard);
  console.log(userInput);
}

function createPlayer(playerName, piece) {
  if (piece == 'x') {
    piece = 'x';
  } else {
    piece = 'o';
  }

  if (piece !== 'x' && piece !== 'o') {
    return 'make a valid choice!';
  }

  return { playerName, timesWon: 0, piece };
}

playGame();
