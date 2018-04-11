const checkRow = (board, row) => {
  const count = 0;
  let prevPlayer;
  for (let i = 0; i < board.length; i += 1) {
    if (board[row][i] === undefined) {
      return false;
    }
    if (prevPlayer === undefined) {
      prevPlayer = board[row][i];
    }
    if (prevPlayer !== board[row][i]) {
      return false;
    }
  }
  return true;
};

const checkColumn = (board, column) => {
  const count = 0;
  let prevPlayer;
  for (let i = 0; i < board.length; i += 1) {
    if (board[i][column] === undefined) {
      return false;
    }
    if (prevPlayer === undefined) {
      prevPlayer = board[i][column];
    }
    if (prevPlayer !== board[i][column]) {
      return false;
    }
  }
  return true;
};

const checkMajorDiagonal = (board) => {
  const count = 0;
  let prevPlayer;
  for (let i = 0; i < board.length; i += 1) {
    if (board[i][i] === undefined) {
      return false;
    }
    if (prevPlayer === undefined) {
      prevPlayer = board[i][i];
    }
    if (prevPlayer !== board[i][i]) {
      return false;
    }
  }
  return true;
};

const checkMinorDiagonal = (board) => {
  const count = 0;
  let prevPlayer;
  const tiles = [[0, 2], [1, 1], [2, 0]];
  for (let i = 0; i < tiles.length; i += 1) {
    if (board[tiles[i][0]][tiles[i][1]] === undefined) {
      return false;
    }
    if (prevPlayer === undefined) {
      prevPlayer = board[tiles[i][0]][tiles[i][1]];
    }
    if (prevPlayer !== board[tiles[i][0]][tiles[i][1]]) {
      return false;
    }
  }
  return true;
};

const checkForWin = (board, i, j) => {
  // if middle tile, then check diagonals
  // otherwise check row and column
  return checkRow(board, i) || checkColumn(board, j) || (i === j && (checkMajorDiagonal(board)) || checkMinorDiagonal(board));
};