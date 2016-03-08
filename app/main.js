'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./game.js');
var View = require('./components.js')
var BoardFrame = View.frame;

var click = function(box) {
    game.click(box);
    ReactDOM.render(<BoardFrame titleString={"Tic Tac Toe"} game={game} />, document.getElementById('frame'));   
}

var again = function() {
    game.again();
    ReactDOM.render(<BoardFrame titleString={"Tic Tac Toe"} game={game} />, document.getElementById('frame'));   
}

var restart = function() {
    game.restart();
    ReactDOM.render(<BoardFrame titleString={"Tic Tac Toe"} game={game} />, document.getElementById('frame'));   
}

module.exports.click = click;
module.exports.again = again;
module.exports.restart = restart;


// Start with a new game
var game = new Game.TicTacToeGame();

// Render the frame.
// Other components are put in the frame
ReactDOM.render(<BoardFrame titleString={"Tic Tac Toe"} game={game} />, document.getElementById('frame'));
