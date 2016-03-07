'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var GameLogic = require('./game.js');
var Controller = require('./main.js');

var Title = React.createClass({
    render: function() {
        // define "titleString" as a property of this newly created class
        return <div>{this.props.titleString}</div>;
    }

});

// Class name has to start with uppercase letter,
// otherwise render cannot recognize and will render as html tag
var InfoBox = React.createClass({
    render: function() {
        return <div>{this.props.gameStatus}</div>;
    }
});

var Scoreboard = React.createClass({
    render: function() {
        return <div>Score: X:{this.props.X}, O:{this.props.O}, Ties:{this.props.ties}</div>
    }
});
//interact with the board
var Board = React.createClass({
	handleClick:function() {
		Controller.click.handleClick(this.props.id);
	},
	render:function() {
		return <button className ={'board'} onClick = {this.handleCliker} controller = {Controller.click}> </button>;
	}
});

var frame = React.createClass({
  handleAgain: function(){
    Controller.again.handleAgain();
  },
  handleRestart: function(){
  	Controller.restart.handleReset();
  },
  render: function() {
    var game = GameLogic.Game;
    var gameStatus;
  	if(game.winner == 1 || game.winner == 2) {
        gameStatus = 'Winner is Player ' + game.winner;
  	} else{
  	    gameStatus = 'Your turn! ' + game.turn;
  	}
    return (
      <div>
        <Title titleString={this.props.titleString} />
        <InfoBox gameStatus={gameStatus} />
        <Board />
        <Scoreboard X={game.p1win} O={game.p2win} ties={game.ties} />
		<button onClick= {this.handleRestart}> Reset the Game</button>
		<button onClick= {this.handleAgain}> Continue </button>
      </div>);
  }
})

module.exports.frame = frame;
