var Board = /** @class */ (function () {
    function Board(subMatSize) {
        this._gameBoardArr = new Array(8);
        for (var i = 0; i < this._gameBoardArr.length; i++) {
            this._gameBoardArr[i] = new Mat("", subMatSize);
        }
        Mat.fillCounter = 1;
    }
    Board.prototype.isDraw = function () {
        if (this._gameBoardArr[0].isFull() && this._gameBoardArr[1].isFull() && this._gameBoardArr[2].isFull())
            return true;
        return false;
    };
    Board.prototype.isWin = function (str) {
        for (var i = 0; i < this._gameBoardArr.length; i++) {
            if (this._gameBoardArr[i].isWin(str))
                return true;
        }
        return false;
    };
    Board.prototype.fillCell = function (row, col, fill) {
        if (this._gameBoardArr[row].isCellEmpty(col) && row >= 0 && row <= this._gameBoardArr[0]._size && col >= 0 && col <= this._gameBoardArr[0]._size) {
            this._gameBoardArr[row]._gameplayArr[col] = fill; //fill row
            this._gameBoardArr[this._gameBoardArr[col]._size + col]._gameplayArr[row] = fill; //fill col
            if (row == col) {
                this._gameBoardArr[(this._gameBoardArr[col]._size) * 2]._gameplayArr[row] = fill; //אלכסון ראשי
            }
            if (row + col == this._gameBoardArr[0]._gameplayArr.length - 1) {
                this._gameBoardArr[(this._gameBoardArr[col]._size * 2) + 1]._gameplayArr[row] = fill; //אלכסון משני
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
    };
    Board.prototype.playerTurn = function () {
        var input = parseInt(prompt("please pick a cell between 1-9"));
        var inputFlag = true;
        while (input <= 0 || input > Math.pow(this._gameBoardArr[0]._size, 2)) {
            input = parseInt(prompt("wrong input,you must enter a number between 1-9"));
            while (isNaN(input)) {
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
        var tmpRow = Math.floor(input / this._gameBoardArr[0]._size);
        var tmpCol = input - (this._gameBoardArr[0]._size * tmpRow);
        this.fillCell(tmpRow, tmpCol, "X");
        if (this.isWin("X") && Board.isWinMsgShowed == false) {
            alert("Player wins!!");
            Board.isWinMsgShowed = true;
        }
        if (this.isDraw())
            alert("draw");
    };
    Board.prototype.computerTurn = function () {
        Board.isPlayed = false;
        var tmpRow = -1;
        var tmpCol;
        for (var i = 0; i < this._gameBoardArr.length; i++) {
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
        if (Board.isPlayed == false)
            for (var i = 0; i < this._gameBoardArr.length; i++) {
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
    };
    Board.prototype.toString = function () {
        var tmpStr = "<br/>----------<br/>|";
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < this._gameBoardArr[i]._gameplayArr.length; j++) {
                tmpStr += "&nbsp;" + this._gameBoardArr[i]._gameplayArr[j] + "&nbsp;|";
            }
            tmpStr += "<br/>----------<br/>";
            if (i + 1 == this._gameBoardArr[0]._size)
                break;
            tmpStr += "|";
        }
        return (tmpStr + "<br/>" + "<br/>");
    };
    Board.isPlayed = false;
    Board.playerTurn = false;
    Board.isWinMsgShowed = false;
    return Board;
}());
//# sourceMappingURL=board.js.map