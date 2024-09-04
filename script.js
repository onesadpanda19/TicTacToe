/* first players choose a name, then player 1 (or x) goes first, then player 2 (o) goes next and game continues till one or the other wins or a tie. the result is then printed on screen*/
/* set up game board in a three by three */

let gameBoard = [];

function createPlayer(playerName, piece) {
  if (piece == 'x') {
    piece = 'x';
  } else {
    piece = 'o';
  }

  if (piece !== 'x' && piece !== 'o') {
    return 'choose a valid choice!';
  }
  return { playerName, timesWon: 0, piece };
}
