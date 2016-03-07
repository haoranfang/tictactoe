var React = require('react');
var ReactDOM = require('react-dom');
var GameLogic = require('./game.js');
var Controller = require('./main.js')
var game = GameLogic.Game;

//interact with the board
var board = React.createClass({
	handleClick:function() {
		Controller.click.handleClick(this.props.id)
	}
	render:function() {
		return <button className ={'board'} onClick = {this.handleCliker} controller = {Controller.click}> </button>
	}
})
ReactDOM.render(<title />,
                document.getElementById('title'));

var frame = React.createClass({
  handleAgain: function(){
    Controller.again.handleAgain();
  },
  handleRestart: function(){
  	Controller.restart.handleReset();
  },
  render: function() {
  	if(game.winner == 1 || game.winner == 2) {
  		return <div>Winner is Player {game.winner}</div>;
  	} else{
  		return <div>Your turn! {game.turn}</div>
  	}
    return (
      <div>
      	<h2> <li>Scoreboard</li>
			<li>Ties{game.ties}</li>
			<li>Player One {game.1win}</li>
			<li>Player Two {game.2win}</li>
		</h2>;
		<button onClick= {this.handleRestart}> Reset the Game</button>
		<button onClick= {this.handleAgain}> Continue </button>
      </div>)
  }
})

module.exports.frame = frame;
