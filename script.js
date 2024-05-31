const board = document.getElementById('board');
const squares = document.querySelectorAll('.square');
const turnDisplay = document.getElementById('turn-display');
const endGameMessage = document.getElementById('end-game-message');
const restartButton = document.getElementById('restart-button');

let currentPlayer = 'X';
let gameOver = false;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWin(currentPlayer) {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer) {
      return true;
    }
  }
  return false;
}

function checkTie() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].textContent === '') {
      return false;
    }
  }
  return true;
}

function restartGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
  gameOver = false;
  currentPlayer = 'X';
  turnDisplay.textContent = `X's turn!`;
  endGameMessage.textContent = '';
}

squares.forEach((square) => {
  square.addEventListener('click', () => {
    if (gameOver || square.textContent !== '') return;

    square.textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
      gameOver = true;
      endGameMessage.textContent = `${currentPlayer} wins!`;
    } else if (checkTie()) {
      gameOver = true;
      endGameMessage.textContent = `It's a tie!`;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      turnDisplay.textContent = `${currentPlayer}'s turn!`;
    }
  });
});

restartButton.addEventListener('click', restartGame);


