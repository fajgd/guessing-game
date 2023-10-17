const GuessingGame = require('./src/guessing-game.js');

window.game = new GuessingGame();
class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return Math.floor((this.min + this.max) / 2);
  }

  lower() {
    this.max = this.guess() - 1;
  }

  greater() {
    this.min = this.guess() + 1;
  }
}
