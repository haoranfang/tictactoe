var React = require('react');
var ReactDOM = require('react-dom');
var view = require('./components.js')
	

Class TicTacToeGame {
	info(){
		this.board = [0,0,0,0,0,0,0,0,0];
		this.winner = undefined;
		this.turn = 1;
		this.1win = 0;
		this.2win = 0;
		this.ties = 0;
		this.previous_turn = 0;
	 	this.times = 0;
	}

	win() {
		if(this.turn = 1){
			this.winner = 1;
			this.1win++;
			return 1;
		} else{
			this.winner = 2;
			this.2win++;
			return 2;
		}
	}

	again() {
		this.board = [0,0,0,0,0,0,0,0,0];
		this.times = 0;
		if(this.winner == 1) {
			this.previous_turn = 1;
			this.turn = 2;
		} else{
			this.previous_turn = 2;
			this.turn = 1;
		}
		this.winner = undefined;
	}

	restart() {
		this.board = [0,0,0,0,0,0,0,0,0];
		this.winner = undefined;
		this.turn = 1;
		this.1win = 0;
		this.2win = 0;
		this.ties = 0;
		this.times = 0;
		this.previous_turn = 0;
	}

	end(){
		if(board[0]===board[1]===board[2] || board[3]===board[4]===board[5] || board[6]===board[7]===board[8]) {
			return this.win();
		} else if (board[0]===board[3]===board[6] || board[1]===board[4]===board[7] || board[2]===board[5]===board[8]){
			return this.win();
		} else  if (board[0]===board[4]===board[8] || board[2]===board[4]===board[6] ) {
			return this.win();
		} else if (this.times ===9) {
			return this.ties++;
		} else {
			return undefined;
		}
	}   // if return this.win(), winner is the current player

	Click(box){
		if(this.board[box] === 1 || this.board[box] === 2) {
			return undefined;
		} else {
			this.board[box] = get_turn();
			this.winner = end();
		}
	}
	
	get_turn(){
		this.times ++;
		if(this.times === 9) {   //game is over !!!!!!!!!!
			return undefined;
		} else if (this.turn === 1) {
			this.previous_turn = 1;
			this.turn = 2;
			return 2;
		} else if (this.turn === 2) {
			this.previous_turn = 2;
			this.turn = 1;
			return 1;
		} else{
			return undefined;
		}
	}

}

module.exports.Game = new TicTacToeGame();