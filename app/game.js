'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var view = require('./components.js');
	

class TicTacToeGame {
    constructor() {
        // Initialize all attributes
        this.info();
    }
	info(){
		this.board = [0,0,0,0,0,0,0,0,0];
		this.winner = undefined;
		this.turn = 1;
		this.p1win = 0;
		this.p2win = 0;
		this.ties = 0;
		this.previous_turn = 0;
	 	this.times = 0;
	}

	win() {
		if(this.turn == 1){
			this.winner = 1;
			this.p1win++;
			return 1;
		} else{
			this.winner = 2;
			this.p2win++;
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
		this.p1win = 0;
		this.p2win = 0;
		this.ties = 0;
		this.times = 0;
		this.previous_turn = 0;
	}

	end(){
		if(
            this.board[0]===this.board[1] && this.board[1]===this.board[2] && this.board[2] != 0 ||
            this.board[3]===this.board[4] && this.board[4]===this.board[5] && this.board[5] != 0 || 
            this.board[6]===this.board[7] && this.board[7]===this.board[8] && this.board[8] != 0 ||
            this.board[0]===this.board[3] && this.board[3]===this.board[6] && this.board[6] != 0 || 
            this.board[1]===this.board[4] && this.board[4]===this.board[7] && this.board[7] != 0 || 
            this.board[2]===this.board[5] && this.board[5]===this.board[8] && this.board[8] != 0 ||
            this.board[0]===this.board[4] && this.board[4]===this.board[8] && this.board[8] != 0 ||
            this.board[2]===this.board[4] && this.board[4]===this.board[6] && this.board[6] != 0
         ) {
			return this.win();
		} else if (this.times === 9) {
			return this.ties++;
		} else {
			return undefined;
		}
	}   // if return this.win(), winner is the current player

	click(box){
		if(this.winner !== undefined || this.board[box] === 1 || this.board[box] === 2) {
			return undefined;
		} else {
			this.board[box] = this.get_turn();
			this.winner = this.end();
		}
	}
	
	get_turn(){
		this.times ++;
		if (this.turn === 1) {
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

    get_winner() {
        // TODO: make winner private
        return this.winner;
    }
}

// This is how to export a class.
// See: https://github.com/info498e-w16/pattern-summary/blob/master/quackers.js
module.exports.TicTacToeGame = TicTacToeGame;
