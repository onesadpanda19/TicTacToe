/* first players choose a name, then player 1 (or x) goes first, then player 2 (o) goes next and game continues till one or the other wins or a tie. the result is then printed on screen*/
/* set up game board in a three by three */

/*look at array manipulation/ user input temporary*/

function createGame() {
  const gameBoard = new Array(9).fill(null);
  let gameState = 'playing';
  return { gameBoard, gameState };
}

function playGame() {
  let newGameBoard = createGame();
  // {gameBoard: [null,...null], gameState: 'playing'}

  let playerName1 = prompt('choose a name');
  let piece1 = prompt('choose x or o');

  let playerName2 = prompt('choose a name');
  let piece2 = prompt('choose x or o');

  let playerOne = createPlayer(playerName1, piece1);
  let playerTwo = createPlayer(playerName2, piece2);

  // {piece: 'x', playerName: 'JoeMama', timesWon: 0}

  console.log(playerOne);
  console.log(playerTwo);

  // Old gameboard = [null, null, null, 'x', null, null, null]
  // new gameBoard = [null, null, 'o', 'x', null ,null, null]

  // let oldToken = currentPlayer.piece;
  // let newPlayer = if(playerOne.piece == oldToken) { newPlayer = playerTwo} else {newPlayer = playerOne}

  // This is one turn (we need a game loop)
  // Get current player turn choice
  let currentPlayer = playerOne;
  let userInput = prompt('Choose a number between 0 and 8');
  // Update game board with piece
  let updatedGameBoard = updateGameBoard(
    newGameBoard,
    userInput,
    currentPlayer
  );
  let oldToken = currentPlayer.piece;
  if (playerOne.piece == oldToken) {
    playerTwo = currentPlayer;
  } else {
    currentPlayer = playerOne;
  }

  ifPlaying();
  // Check for win

  // Repeat

  console.log(updatedGameBoard);
}

/**
 * Takes a player piece, and updates the gameBoard array
 * @param {Object} gameBoard - The current game board state object
 * @property {Array} gameBoard.gameBoard - Current gameboard array
 * @property {String} gameBoard.gameState - Current gameboard state (playing, finished)
 */
function updateGameBoard(gameBoard, userInput, currentPlayer) {
  // Find a place in array and change it to another value
  // make validation for the update gameBoard and if player chooses a wrong piece, create game loop

  console.log(gameBoard);
  gameBoard.gameBoard[userInput] = currentPlayer.piece;
  console.log(gameBoard);

  console.log(userInput);
  console.log(currentPlayer);

  // ifWon(gameBoard.gameState, playerOne, playerTwo);

  return gameBoard;
}

function nextChoice() {
  userInput;
}

function checkForWin(gameBoard) {
  const gameState = 'playing';
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
  ) {
    return (gameState = 'win');
  } else if (
    (gameBoard.gameBoard[0] === currentPlayer.token &&
      gameBoard.gameBoard[3] === currentPlayer.token &&
      gameBoard.gameBoard[6] === currentPlayer.token) ||
    (gameBoard.gameBoard[1] === currentPlayer.token &&
      gameBoard.gameBoard[4] === currentPlayer.token &&
      gameBoard.gameBoard[7] === currentPlayer.token) ||
    (gameBoard.gameBoard[2] === currentPlayer.token &&
      gameBoard.gameBoard[5] === currentPlayer.token &&
      gameBoard.gameBoard[8] === currentPlayer.token)
  ) {
    return (gameState = 'win');
  } else if (
    (gameBoard.gameBoard[0] === currentPlayer.token &&
      gameBoard.gameBoard[4] === currentPlayer.token &&
      gameBoard.gameBoard[8] === currentPlayer.token) ||
    (gameBoard.gameBoard[2] === currentPlayer.token &&
      gameBoard.gameBoard[4] === currentPlayer.token &&
      gameBoard.gameBoard[6] === currentPlayer.token)
  ) {
    return (gamestae = 'win');
  }
}
function ifPlaying() {
  if ((gameState = 'playing')) {
    nextChoice();
    checkForWin();
    updateGameBoard();
    checkForWin(gameBoard);
    if ((gameState = 'win')) {
      ifWon();
    } else {
      ifPlaying();
    }
  }
}

function ifWon(gameState, currentPlayer) {
  checkForWin();
  if (gameState === 'win') {
    currentPlayer.score += 1;
  }

  console.log(`${currentPlayer.name} wins!`);
  return (gameBoard = createGame());
}

/**
 * Update should take the userInput and change the gameBoard with piece... how to get piece?
 */

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
