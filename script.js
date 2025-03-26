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

  // Old gameboard = [null, null, null, 'x', null, null, null]
  // new gameBoard = [null, null, 'o', 'x', null ,null, null]

  // let oldpiece = currentPlayer.piece;
  // let newPlayer = if(playerOne.piece == oldpiece) { newPlayer = playerTwo} else {newPlayer = playerOne}

  // This is one turn (we need a game loop)
  // Get current player turn choice

  let currentPlayer = playerOne;

  ifPlaying(playerOne, playerTwo, newGameBoard, currentPlayer);
  // Check for win

  // Repeat
}

function updateGameBoard(userInput, newGameBoard, currentPlayer) {
  if (newGameBoard.gameBoard[userInput] == null) {
    newGameBoard.gameBoard[userInput] = currentPlayer.piece;
    console.log(`
${newGameBoard.gameBoard[0] || ' '} | ${newGameBoard.gameBoard[1] || ' '} | ${
      newGameBoard.gameBoard[2] || ' '
    }
${newGameBoard.gameBoard[3] || ' '} | ${newGameBoard.gameBoard[4] || ' '} | ${
      newGameBoard.gameBoard[5] || ' '
    }
${newGameBoard.gameBoard[6] || ' '} | ${newGameBoard.gameBoard[7] || ' '} | ${
      newGameBoard.gameBoard[8] || ' '
    }
`);
  } else {
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
    nextChoice(newGameBoard, currentPlayer);
  }
}

function checkForWin(gameBoard, currentPlayer) {
  if (
    (gameBoard.gameBoard[0] === currentPlayer.piece &&
      gameBoard.gameBoard[1] === currentPlayer.piece &&
      gameBoard.gameBoard[2] === currentPlayer.piece) ||
    (gameBoard.gameBoard[3] === currentPlayer.piece &&
      gameBoard.gameBoard[4] === currentPlayer.piece &&
      gameBoard.gameBoard[5] === currentPlayer.piece) ||
    (gameBoard.gameBoard[6] === currentPlayer.piece &&
      gameBoard.gameBoard[7] === currentPlayer.piece &&
      gameBoard.gameBoard[8] === currentPlayer.piece)
  ) {
    return (gameBoard.gameState = 'win');
  } else if (
    (gameBoard.gameBoard[0] === currentPlayer.piece &&
      gameBoard.gameBoard[3] === currentPlayer.piece &&
      gameBoard.gameBoard[6] === currentPlayer.piece) ||
    (gameBoard.gameBoard[1] === currentPlayer.piece &&
      gameBoard.gameBoard[4] === currentPlayer.piece &&
      gameBoard.gameBoard[7] === currentPlayer.piece) ||
    (gameBoard.gameBoard[2] === currentPlayer.piece &&
      gameBoard.gameBoard[5] === currentPlayer.piece &&
      gameBoard.gameBoard[8] === currentPlayer.piece)
  ) {
    return (gameBoard.gameState = 'win');
  } else if (
    (gameBoard.gameBoard[0] === currentPlayer.piece &&
      gameBoard.gameBoard[4] === currentPlayer.piece &&
      gameBoard.gameBoard[8] === currentPlayer.piece) ||
    (gameBoard.gameBoard[2] === currentPlayer.piece &&
      gameBoard.gameBoard[4] === currentPlayer.piece &&
      gameBoard.gameBoard[6] === currentPlayer.piece)
  ) {
    return (gameBoard.gameState = 'win');
  }
}

function ifPlaying(playerOne, playerTwo, newGameBoard, currentPlayer) {
  if (newGameBoard.gameState === 'playing') {
    nextChoice(newGameBoard, currentPlayer);

    checkForWin(newGameBoard, currentPlayer);

    if (newGameBoard.gameState !== 'win') {
      let oldPiece = currentPlayer.piece;
      if (playerOne.piece == oldPiece) {
        currentPlayer = playerTwo;
      } else {
        currentPlayer = playerOne;
      }
      ifPlaying(playerOne, playerTwo, newGameBoard, currentPlayer);
    } else {
      ifWon(newGameBoard, currentPlayer);
    }
  }
}

function ifWon(gameBoard, currentPlayer) {
  currentPlayer.timesWon += 1;

  console.log(`${currentPlayer.playerName} wins!`);
  return playAgain();
}

function playAgain() {
  let play = prompt('do you want to play a tic tac toe?');

  if (play == 'yes') {
    return playGame();
  } else {
    return;
  }
}
/**
 * Update should take the userInput and change the gameBoard with piece... how to get piece?
 */
// validate players!!!!!!!!
function createPlayer(playerName, piece) {
  if (piece == 'x') {
    piece = 'x';
  } else {
    piece = 'o';
  }

  if (piece == 'o') {
    piece = 'o';
  } else {
    piece = 'x';
  }

  if (piece !== 'x' && piece !== 'o') {
    return 'make a valid choice!';
  }

  return { playerName, timesWon: 0, piece };
}
playAgain();
