// GUESS
// GENERATE NEW NUMBER
var GUESS = 'GUESS';
var guess = function(number) {
  return {
    type: GUESS,
    number: number
  }
};
var GENERATE_NEW_GAME = 'GENERATE_NEW_GAME';
var generateNewGame = function() {
  return {
    type: GENERATE_NEW_GAME
  }
};

exports.GUESS = GUESS;
exports.guess = guess;
exports.GENERATE_NEW_GAME = GENERATE_NEW_GAME;
exports.generateNewGame = generateNewGame;