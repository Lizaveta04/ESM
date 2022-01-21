import defaultGame, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js';

console.log('game started');

const game = new Game();
game.start();
