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

  let playerOne = createPlayer(playerName1, piece);
  let playerTwo = createPlayer(playerName2, piece);

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

  ifPlaying(playerOne, playerTwo, newGameBoard, currentPlayer);
  // Check for win

  // Repeat
}

function updateGameBoard(userInput, newGameBoard, currentPlayer) {
  if (newGameBoard.gameBoard.Array == null) {
    newGameBoard.gameBoard[userInput] = currentPlayer.piece;
  } else if (newGameBoard.gameBoard.Array !== null) {
    alert('make a new choice');
    nextChoice();
  }
}

/**
 * Takes a player piece, and updates the gameBoard array
 * @param {Object} gameBoard - The current game board state object
 * @property {Array} gameBoard.gameBoard - Current gameboard array
 * @property {String} gameBoard.gameState - Current gameboard state (playing, finished)
 */
function nextChoice(newGameBoard, currentPlayer) {
  // prompt user for choice
  let userInput = prompt('Choose a number between 0 and 8');

  if (userInput !== null) {
    // if user input is defined

    // 1 - Use updateGameBoard
    // 2 - Look at userInput place on gameboard array
    // 3 - If empty / null, fill it with player choice
    // 4 - Else, if it is not null, restart the choice prompt (nextChoice)
    updateGameBoard(userInput, newGameBoard, currentPlayer);
  } else if (userInput == null) {
    // if not defined, restart, prompt again
    alert('make a new choice');
    nextChoice();
  }
}

function checkForWin(gameBoard, currentPlayer) {
  const gameState = 'playing';
  if (
    (gameBoard.gameBoard[0] === currentPlayer.piece &&
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
    return (gameState = 'win');
  }
}
function ifPlaying(playerOne, playerTwo, newGameBoard, currentPlayer) {
  console.log(newGameBoard);
  console.log(currentPlayer);

  if (newGameBoard.gameState === 'playing') {
    nextChoice(newGameBoard, currentPlayer);

    let oldToken = currentPlayer.piece;
    if (playerOne.piece == oldToken) {
      playerTwo = currentPlayer;
    } else {
      currentPlayer = playerOne;
    }

    checkForWin(newGameBoard);
    if (gameState == 'win') {
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
