import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { GameOverDialogComponent } from '../game-over-dialog/game-over-dialog.component';
import { Minimax } from '../minimax';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

	
	board = new Board(10);
	private isPlayersTurn : boolean;
	private gameFinished : boolean;
	private minimaxDepth : number;
	private aiStarts : boolean; // AI makes the first move
	private ai : Minimax;
	private winner : number; // 0: There is no winner yet, 1: AI Wins, 2: Human Wins
	// public iterationMatrix=this.board.getBoardMatrix();

	constructor(private dialog: MatDialog,private route: Router) { 
	
		this.isPlayersTurn = true;
		this.gameFinished = false;
		this.minimaxDepth = 4;
		this.aiStarts = false;
		this.ai = new Minimax(this.board);
		this.winner = 0;
		// this.board.addStone(3,4,true);
		// this.aiMakesMove();
		
		
	}

	public setBoardSize(size : number) {
		this.board.setBoardSize(size);
	}

	public setAIDepth(depth : number) {
		this.minimaxDepth = depth;
		
	}
	public setAIStarts(aiStarts : boolean) {
		this.aiStarts = aiStarts;
	}

	private checkWinner() : number{
		if(this.ai.getScore(this.board, true, false) >= this.ai.getWinScore()) return 2;
		if(this.ai.getScore(this.board, false, true) >= this.ai.getWinScore()) return 1;
		return 0;
	}
	// private playMove(posX : number, posY : number, black : boolean) : boolean{
	// 	return this.board.addStone(posX, posY, black);
	// }
	playerMakesMove(x: number, y: number):void{
		this.board.addStone(x,y,true);
		this.aiMakesMove();
		this.checkGameStatus();
		
	}
	aiMakesMove():void{
		let ret = this.ai.calculateNextMove(this.minimaxDepth);
		this.board.addStone(ret[1],ret[0],false);
		this.gameFinished=this.ai.getGameStatus();
		this.checkGameStatus();
	}
	checkGameStatus():void{
		if(this.gameFinished==true){
			this.board=new Board(10);
			this.gameFinished=false;
			this.ai=new Minimax(this.board);
			this.dialog.open(GameOverDialogComponent);
			
		}
	}
	ngOnInit(): void {
		
	}

}
