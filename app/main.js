'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./game.js');
var View = require('./components.js')
var BoardFrame = View.frame;

var click = {
  handleClick: function(box) {
    Game.TicTacToeGame.Click(box);
    ReactDOM.render(<BoardFrame click ={this}/>, document.getElementById('current'));
  }
}

var again = {
  handleAgain: function(){
    Game.TicTacToeGame.again();
    ReactDOM.render(<BoardFrame again ={this}/>, document.getElementById('current'));
  }
}

var restart = {
  handleReset: function() {
    Game.TicTacToeGame.restart();
    ReactDOM.render(<BoardFrame restart ={this}/>, document.getElementById('current'));
  }
}

module.exports.click = click;
module.exports.again = again;
module.exports.restart = restart;

// Render the frame.
// Other components are put in the frame
ReactDOM.render(<BoardFrame titleString={"Tic Tac Toe"} />, document.getElementById('frame'));
