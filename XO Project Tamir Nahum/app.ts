let btnElement: string = ' <button onclick="nextTurn()">click me</button>';
let board: Board = new Board(3);
nextTurn();




function nextTurn(): void {
    
    Board.playerTurn = !Board.playerTurn;
    if (board.isWin("X") || (board.isWin("O"))) {
        btnElement = ' <button onclick="restart()">restart</button>';
    } else
        if (Board.playerTurn == true) {
            board.playerTurn();
            if (board.isWin("X"))
                btnElement = ' <button onclick="restart()">restart</button>';
            else if (board.isDraw()) {
                btnElement = ' <button onclick="restart()">restart</button>';
            }
            else 
            btnElement= ' <button onclick="nextTurn()">computer turn</button>';
            document.write(board + "<br/>");
            document.write(btnElement);
        }
        else {
            board.computerTurn();
            if (board.isWin("O"))
                btnElement = ' <button onclick="restart()">restart</button>';
            else if (board.isDraw()) {
                btnElement = ' <button onclick="restart()">restart</button>';
            }
            else
            btnElement = ' <button onclick="nextTurn()">player turn</button>';
            document.write(board + "<br/>");
            document.write(btnElement);
        }


   
    
}

function restart(): void {
    Board.playerTurn = false;
    board = new Board(3);
    document.body.innerHTML = "";
    btnElement = ' <button onclick="nextTurn()">click me</button>';
    document.write(board + "<br/>");
    document.write(btnElement);
}


