class Mat {
    public _name: string;
    public _size: number = 3;
    public _gameplayArr: Array<string>;
    public static fillCounter:number=1;


    public constructor(name?: string, size: number = 3) {
        this._size = size;
        this._name = name;
        this._gameplayArr = new Array<string>(size);
        for (let i: number = 0; i < this._gameplayArr.length; i++) {
            this._gameplayArr[i] = "" + Mat.fillCounter;
            Mat.fillCounter++;
        }
        

    }

    public isWin(str: string): boolean {
        for (let i: number = 0; i < this._size; i++) {
            if (this._gameplayArr[i] != str)
                return false;
        }
              return true;
        
    }



    public isFull(): boolean {
        for (let i: number = 0; i < this._size; i++) {
            if (this._gameplayArr[i] != "O" && this._gameplayArr[i] != "X")
                return false;
        }
        return true;
    }

    public isCellEmpty(num: number): boolean {
        if (this._gameplayArr[num] != "O" && this._gameplayArr[num] != "X")
            return true;
        return false;
    }



    public isPlayerAboutWin(): number {
        let counterX: number = 0;


        for (let i: number = 0; i < this._gameplayArr.length; i++) {
            if (this._gameplayArr[i] == "X")
                counterX++;

            if (counterX > this._gameplayArr.length - 2) {
                if (i == this._gameplayArr.length - 1)
                    for (let j: number = 0; j < this._gameplayArr.length; j++) {
                        if (this._gameplayArr[j] != "O" && this._gameplayArr[j] != "X")
                            return j;
                    }


            }
        }
    }

    public isComputerAboutWin(): number {
        let counterO: number = 0;

        for (let i: number = 0; i < this._gameplayArr.length; i++) {

            if (this._gameplayArr[i] == "O")
                counterO++;

            if (counterO > this._gameplayArr.length - 2) {
                if (i == this._gameplayArr.length - 1)
                    for (let j: number = 0; j < this._gameplayArr.length; j++) {
                        if (this._gameplayArr[j] != "O" && this._gameplayArr[j] != "X")
                            return j;
                    }
            }
        }

    }

}



