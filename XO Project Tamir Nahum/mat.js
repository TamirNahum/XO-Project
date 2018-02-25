var Mat = /** @class */ (function () {
    function Mat(name, size) {
        if (size === void 0) { size = 3; }
        this._size = 3;
        this._size = size;
        this._name = name;
        this._gameplayArr = new Array(size);
        for (var i = 0; i < this._gameplayArr.length; i++) {
            this._gameplayArr[i] = "" + Mat.fillCounter;
            Mat.fillCounter++;
        }
    }
    Mat.prototype.isWin = function (str) {
        for (var i = 0; i < this._size; i++) {
            if (this._gameplayArr[i] != str)
                return false;
        }
        return true;
    };
    Mat.prototype.isFull = function () {
        for (var i = 0; i < this._size; i++) {
            if (this._gameplayArr[i] != "O" && this._gameplayArr[i] != "X")
                return false;
        }
        return true;
    };
    Mat.prototype.isCellEmpty = function (num) {
        if (this._gameplayArr[num] != "O" && this._gameplayArr[num] != "X")
            return true;
        return false;
    };
    Mat.prototype.isPlayerAboutWin = function () {
        var counterX = 0;
        for (var i = 0; i < this._gameplayArr.length; i++) {
            if (this._gameplayArr[i] == "X")
                counterX++;
            if (counterX > this._gameplayArr.length - 2) {
                if (i == this._gameplayArr.length - 1)
                    for (var j = 0; j < this._gameplayArr.length; j++) {
                        if (this._gameplayArr[j] != "O" && this._gameplayArr[j] != "X")
                            return j;
                    }
            }
        }
    };
    Mat.prototype.isComputerAboutWin = function () {
        var counterO = 0;
        for (var i = 0; i < this._gameplayArr.length; i++) {
            if (this._gameplayArr[i] == "O")
                counterO++;
            if (counterO > this._gameplayArr.length - 2) {
                if (i == this._gameplayArr.length - 1)
                    for (var j = 0; j < this._gameplayArr.length; j++) {
                        if (this._gameplayArr[j] != "O" && this._gameplayArr[j] != "X")
                            return j;
                    }
            }
        }
    };
    Mat.fillCounter = 1;
    return Mat;
}());
//# sourceMappingURL=mat.js.map