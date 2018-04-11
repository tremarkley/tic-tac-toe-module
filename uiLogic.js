class Game {
  constructor() {
    this.init()
    this.currentPlayer = 'X';
    this.board = [new Array(3), new Array(3), new Array(3)];
    this.turnsLeft = 9;
    this.gameOver = false;
    this.displayPlayer();
  }

  init() {
    console.log('initializing game');
    this.addEventListeners();
  }

  displayPlayer() {
    document.getElementById("turn").innerText = this.currentPlayer;
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    this.displayPlayer();
  }

  addEventListeners() {
    const tiles = document.getElementsByClassName("tile");
    for (let i = 0; i < tiles.length; i += 1) {
      tiles[i].addEventListener('click', this.tileClick.bind(this));
    }
  }

  tileAvailable(target) {
    return !target.hasChildNodes();
  }

  playTile(target) {
    const play = document.createTextNode(this.currentPlayer);
    const position = target.id.split(',');
    this.board[position[0]][position[1]] = this.currentPlayer;
    target.appendChild(play);
  }

  tileClick(event) {
    if (this.tileAvailable(event.target) && !this.gameOver) {
      this.turnsLeft -= 1;
      const [i, j] = event.target.id.split(',');
      this.playTile(event.target);
      if (checkForWin(this.board, i, j)) {
        this.winner();
      } else if (this.turnsLeft === 0) {
        this.tieGame();
      } else {
        this.switchPlayer();
      }
    }
  }

  tieGame() {
    const tie = document.createTextNode('Tie Game!');
    const resultDiv = document.getElementById('results');
    resultDiv.appendChild(tie);
    this.gameOver = true;
  }

  winner() {
    const win = document.createTextNode(`${this.currentPlayer} wins!`);
    const resultDiv = document.getElementById('results');
    resultDiv.appendChild(win);
    this.gameOver = true;
  }
}