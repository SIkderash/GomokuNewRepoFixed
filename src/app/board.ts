export class Board{
    size  : number = 0;
    private boardMatrix : number[][] = [];  
    
    constructor(boardSize : number) { 
        this.size = boardSize;
		for (var i = 0; i < this.size; i++) {
			this.boardMatrix[i] = Array(this.size).fill(0);
		}
    }
	public clone(): Board {
        let cloneBoard = new Board(this.size);
		for(let i=0;i<this.size;i++){
			for(let j=0;j<this.size;j++){
				cloneBoard.boardMatrix[i][j]=this.boardMatrix[i][j];
			}
		}
		return cloneBoard;
    }

	public getBoardValue(x:number,y:number) : number{
		return this.boardMatrix[x][y];
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


    public generateMoves() : Array<number[]>{
		var moveList : Array<number[]> = [];
		
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
		// console.log(moveList);
		return moveList;
		
	}

}