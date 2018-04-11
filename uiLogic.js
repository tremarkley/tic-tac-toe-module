class Game {
  constructor() {
    this.init()
    this.currentPlayer = 'X';
  }

  init() {
    console.log('initializing game');
    this.addEventListeners();
  }

  switchPlayer() {
    this.currentPlayer = 'X' ? 'O' : 'X';
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
    target.appendChild(play);
  }

  tileClick(event) {
    if (this.tileAvailable(event.target)) {
      this.playTile(event.target);
      // check for win
      this.switchPlayer();
    }
  }
}