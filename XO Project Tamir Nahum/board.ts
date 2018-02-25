class Board {
    public _gameBoardArr: Array<Mat>;
    public static isPlayed: boolean = false;
    public static playerTurn: boolean = false;
    public static isWinMsgShowed: boolean = false;

    public constructor(subMatSize: number) {
        this._gameBoardArr = new Array<Mat>(8);
        for (let i: number = 0; i < this._gameBoardArr.length; i++) {
            this._gameBoardArr[i] = new Mat("", subMatSize);
        }
        Mat.fillCounter = 1;
    }

    public isDraw(): boolean {
        if (this._gameBoardArr[0].isFull() && this._gameBoardArr[1].isFull() && this._gameBoardArr[2].isFull())
                return true;
        return false;
    }

    public isWin(str:string): boolean {
        for (let i: number = 0; i < this._gameBoardArr.length; i++) {
            if (this._gameBoardArr[i].isWin(str))
                return true;
        }
        return false;
    }

    public fillCell(row: number, col: number, fill: string): void {
        
        if (this._gameBoardArr[row].isCellEmpty(col) && row >= 0 && row <= this._gameBoardArr[0]._size && col >= 0 && col <= this._gameBoardArr[0]._size) {

            this._gameBoardArr[row]._gameplayArr[col] = fill;//fill row

            this._gameBoardArr[this._gameBoardArr[col]._size + col]._gameplayArr[row] = fill;//fill col

            if (row == col) {
                this._gameBoardArr[(this._gameBoardArr[col]._size) * 2]._gameplayArr[row] = fill;//אלכסון ראשי
            }
            if (row + col == this._gameBoardArr[0]._gameplayArr.length - 1) {
                this._gameBoardArr[(this._gameBoardArr[col]._size * 2) + 1]._gameplayArr[row] = fill;//אלכסון משני
            }
            Board.isPlayed = true;

        }
        else {
            if (Board.playerTurn == true) {
                if (this._gameBoardArr[row].isCellEmpty(col) == false) {
                    alert("cell is full please pick other cell");
                    this.playerTurn();
                }
            }
            //רקורסיה בעייתית
        
         Board.isPlayed == false;
            
        }
    }

    public playerTurn(): void {
        
        let input: number = parseInt(prompt("please pick a cell between 1-9"));
        let inputFlag: boolean = true;

            while (input <= 0 || input > Math.pow(this._gameBoardArr[0]._size, 2)) {

                input = parseInt(prompt("wrong input,you must enter a number between 1-9"));
                while ( isNaN(input)) {
                    input = parseInt(prompt("wrong input you must enter a number"));
                }
            }

            while (input < 0 || input > Math.pow(this._gameBoardArr[0]._size, 2) || isNaN(input)) {
                input = parseInt(prompt("wrong input you must enter a number"));
                while (input < 0 || input > Math.pow(this._gameBoardArr[0]._size, 2)) {

                    input = parseInt(prompt("wrong input,you must enter a number between 1-9"));
                }
            }

            input--;
            var tmpRow: number = Math.floor(input / this._gameBoardArr[0]._size);

            var tmpCol: number = input - (this._gameBoardArr[0]._size * tmpRow);
        

        this.fillCell(tmpRow, tmpCol, "X");

        if (this.isWin("X") && Board.isWinMsgShowed == false) {
            alert("Player wins!!");
            Board.isWinMsgShowed = true;
        }
        if (this.isDraw())
            alert("draw")

       
    }

    public computerTurn(): void {
        Board.isPlayed = false;
        let tmpRow: number = -1;
        let tmpCol: number;

        for (let i: number = 0; i < this._gameBoardArr.length; i++) {
            tmpRow = this._gameBoardArr[i].isComputerAboutWin();
            if (i >= 0 && i <= 2) {
                if (tmpRow != undefined && this._gameBoardArr[i].isCellEmpty(tmpRow)) {
                    this.fillCell(i, tmpRow, "O");
                    break;
                }
            }
            if (i >= 3 && i <= 5) {
                if (tmpRow != undefined && this._gameBoardArr[i].isCellEmpty(tmpRow)) {
                    this.fillCell(tmpRow, i - this._gameBoardArr[i]._gameplayArr.length, "O");
                    break;
                }
            }
            if (i == 6) {
                if (tmpRow != undefined && this._gameBoardArr[i].isCellEmpty(tmpRow)) {
                    this.fillCell(tmpRow, tmpRow, "O");
                    break;
                }
            }
            if (i == 7) {
                if (tmpRow != undefined && this._gameBoardArr[i].isCellEmpty(tmpRow)) {
                    this.fillCell(tmpRow, this._gameBoardArr[i]._gameplayArr.length - 1 - tmpRow, "O");
                    break;
                }
            }

        }
        if (Board.isPlayed==false)
        for (let i: number = 0; i < this._gameBoardArr.length; i++) {
            tmpRow = this._gameBoardArr[i].isPlayerAboutWin();
                if (i >= 0 && i <= 2) {
                    if (tmpRow != undefined && this._gameBoardArr[i].isCellEmpty(tmpRow)) {
                        this.fillCell(i, tmpRow, "O");
                        break;
                    }
                }
                if (i >= 3 && i <= 5) {
                    if (tmpRow != undefined && this._gameBoardArr[i].isCellEmpty(tmpRow)) {
                        this.fillCell(tmpRow, i - this._gameBoardArr[i]._gameplayArr.length, "O");
                        break;
                    }
                }
                if (i == 6) {
                    if (tmpRow != undefined && this._gameBoardArr[i].isCellEmpty(tmpRow)) {
                        this.fillCell(tmpRow, tmpRow, "O");
                        break;
                    }
                }
                if (i == 7) {
                    if (tmpRow != undefined && this._gameBoardArr[i].isCellEmpty(tmpRow)) {
                        this.fillCell(tmpRow, this._gameBoardArr[i]._gameplayArr.length - 1 - tmpRow, "O");
                        break;
                    }
                }

            }

            while (Board.isPlayed == false) {
                tmpRow = Math.round((Math.random() * (this._gameBoardArr[0]._size - 1 - 0)) + 0);
                tmpCol = Math.round((Math.random() * (this._gameBoardArr[0]._size - 1 - 0)) + 0);
                this.fillCell(tmpRow, tmpCol, "O");
        }

            if (this.isWin("O")) {
                alert("computer wins!!");
            }
            if (this.isDraw())
                alert("draw"); 
        
    }
    

    public toString(): string {
        
        let tmpStr: string = "<br/>----------<br/>|";

        for (let i: number = 0; i < 3; i++) {
            for (let j: number = 0; j < this._gameBoardArr[i]._gameplayArr.length; j++) {
                tmpStr += "&nbsp;" + this._gameBoardArr[i]._gameplayArr[j] + "&nbsp;|";
            }
            tmpStr += "<br/>----------<br/>";
            if (i + 1 == this._gameBoardArr[0]._size)
                break;
            tmpStr += "|";
            
        }
        return (tmpStr + "<br/>" + "<br/>");

    }



}