'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
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
    return <div>{this.props.info}</div>;
  }
});

var Scoreboard = React.createClass({
  render: function() {
    return <div>Score: Player1:{this.props.X}, Player2:{this.props.O}, Ties:{this.props.ties}</div>
  }
});

var ButtonItem = React.createClass({
  handleClick:function() {
    // Pass the button id so that 
    // Controller can change the corresponding board array element
    Controller.click(this.props.id);
  },

  render:function() {
    // Show nothing if no one clicks the button yet
    var value = this.props.value == 0 ? ' ' : this.props.value;
    return <button className ={'board'} onClick = {this.handleClick} id={this.props.id}> {value} </button>;
  }
});

var Board = React.createClass({
  render: function() {
    // The board is a one-dimension array.
    // The index of the array element will be used as button id.
    // The actual value of the element will be shown on the button,
    // indicating who clicks the button
    var ButtonItems = this.props.board.map(function(value, index) {
      return <ButtonItem id = {index} value={value}/>
    });    
    
    return (
      <div> {ButtonItems} </div>
    );
  }
});



var frame = React.createClass({
  handleAgain: function(){
    Controller.again();
  },
  handleRestart: function(){
    Controller.restart();
  },
  render: function() {
    // The entire game status will be passed in from Controller
    // The View in MVC only takes care of how to render the data it is given
    var game = this.props.game;
    var gameInfo;
    // This check can perhaps put in to Model
    if(game.winner == 1 || game.winner == 2) {
      gameInfo = 'Winner is Player ' + game.winner;
    } else{
      gameInfo = 'Your turn! ' + game.previous_turn;
    }
    return (
      <div>
        <Title titleString={this.props.titleString} />
        <InfoBox info={gameInfo} />
        // The board will be passed in as a property
        <Board board={game.board}/>
        <Scoreboard X={game.p1win} O={game.p2win} ties={game.ties} />
        <button onClick= {this.handleRestart}> Reset the Game</button>
        <button onClick= {this.handleAgain}> Continue </button>
      </div>);
  }
})

module.exports.frame = frame;
