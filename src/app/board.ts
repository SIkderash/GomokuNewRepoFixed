export class Board{
    size  : number = 0;
    boardMatrix : number[][] = [];  
    
    constructor(boardSize : number) { 
        this.size = boardSize;
    }


    public getBoardSize() : number{
		return this.size;
	}

    public setBoardSize(size : number){
		this.size = size;
	}

    public getBoardMatrix() : number[][]{
		return this.boardMatrix;
	}

    public addStoneNoGUI(posX : number, posY : number, black : boolean) {
		this.boardMatrix[posY][posX] = black ? 2 : 1;
	}

    public addStone(posX : number, posY : number, black : boolean): boolean{
		
		// Check whether the cell is empty or not
		if(this.boardMatrix[posY][posX] != 0) return false;
		
		//gui.drawStone(posX, posY, black);
		this.boardMatrix[posY][posX] = black ? 2 : 1;
		return true;
		
	}


    public generateMoves() : number[][]{
		var moveList : Array<number>[] = [];
		
		var boardSize = this.size;
		
		// Look for cells that has at least one stone in an adjacent cell.
		for(var i=0; i<boardSize; i++) {
			for(var j=0; j<boardSize; j++) {
				
				if(this.boardMatrix[i][j] > 0) continue;
				
				if(i > 0) {
					if(j > 0) {
						if(this.boardMatrix[i-1][j-1] > 0 || this.boardMatrix[i][j-1] > 0) {
							var move = [i,j];
							moveList.push(move);
							continue;
						}
					}
					if(j < boardSize-1) {
						if(this.boardMatrix[i-1][j+1] > 0 ||
              this.boardMatrix[i][j+1] > 0) {
                var move = [i,j];
                moveList.push(move);
                continue;
						}
					}
					if(this.boardMatrix[i-1][j] > 0) {
						    var move = [i,j];
                moveList.push(move);
                continue;
					}
				}
				if( i < boardSize-1) {
					if(j > 0) {
						if(this.boardMatrix[i+1][j-1] > 0 ||
              this.boardMatrix[i][j-1] > 0) {
                var move = [i,j];
                moveList.push(move);
                continue;
						}
					}
					if(j < boardSize-1) {
						if(this.boardMatrix[i+1][j+1] > 0 ||
              this.boardMatrix[i][j+1] > 0) {
                var move = [i,j];
                moveList.push(move);
                continue;
						}
					}
					if(this.boardMatrix[i+1][j] > 0) {
						    var move = [i,j];
                moveList.push(move);
                continue;
					}
				}
				
			}
		}

		return moveList;
		
	}

}