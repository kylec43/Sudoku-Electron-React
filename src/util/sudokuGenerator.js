function shuffleRows(board, n=3) {

    board = board.map(r => [...r]);


    for (let boxRow = 0; boxRow < 3; boxRow++) {

        for (let i = 0; i < n; i++) {

            const row1 = Math.floor(Math.random() * 3);

            let row2 = Math.floor(Math.random() * 3);
            while (row1 === row2) {
                row2 = Math.floor(Math.random() * 3);
            }

            [board[boxRow*3+row1], board[boxRow*3+row2]] = [board[boxRow*3+row2], board[boxRow*3+row1]];
        }
    }

    return board;
}

function shuffleColumns(board, n=3) {

    board = board.map(r => [...r]);


    for (let boxCol = 0; boxCol < 3; boxCol++) {


        for (let i = 0; i < n; i++) {

            const col1 = Math.floor(Math.random() * 3);

            let col2 = Math.floor(Math.random() * 3);
            while (col1 === col2) {
                col2 = Math.floor(Math.random() * 3);
            }


            for (let row = 0; row < 9; row++) {
                [board[row][boxCol*3+col1], board[row][boxCol*3+col2]] = [board[row][boxCol*3+col2], board[row][boxCol*3+col1]];
            }
        }
    }

    return board;
}

function rotateBoard(board, n=null) {

    board = board.map(r => [...r]);


    if (n === null) {
        n = Math.floor(Math.random() * 4);
    }
    console.log(n);

    for (let rotateCount = 0; rotateCount < n; rotateCount++) {
        const n = board.length;
        const boardCopy = board.map(row => {
            return row.slice();
        });
    
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {

              let ele = boardCopy[i][j];
              let idx = n - (i + 1)
              
              board[j][idx] = ele
            }
        }
    }

    return board;
}

function mapNumbers(board, n=9) {

    board = board.map(r => [...r]);


    for (let i = 0; i < n; i++) {

        const n1 = Math.floor(Math.random()*9 + 1);
        const n2 = Math.floor(Math.random()*9 + 1);
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                switch (board[row][col]) {
                    case n1:
                        board[row][col] = n2;
                        break;
                    case n2:
                        board[row][col] = n1;
                        break;
                    default:
                        break;;
                }
            }
        }
    }

    return board;
}

function pokeHoles(board, holes=51) {

    board = board.map(r => [...r]);
    const removedValues = [];


    while (removedValues.length < holes) {
        
        /* Generate random position to poke hole */
        const val = Math.random()*81;
        const row = Math.floor(val/9);
        const col = Math.floor(val%9);

        if (board[row][col] == 0) continue; //Position already removed

        /* Poke hole */
        removedValues.push({
            row,
            col,
            value: board[row][col]
        });

        board[row][col] = 0;
        const proposedBoard = board.map(r => [...r]);

        return {board, removedValues};

    }
}

function sudokuShuffle(board, hints=30) {

    board = board.map(r => [...r]);


    board = mapNumbers(board);  //swap numbers
    board = shuffleRows(board); //swap rows in boxes
    board = shuffleColumns(board); //swap columns in boxes
    board = rotateBoard(board); //rotate the board randomly
    board = pokeHoles(board, 81-hints).board; //poke n number of holes with a unique solution
    return board;
}



function sudokuGenerator() {

    let board = 
    [
        [8,3,5,4,1,6,9,2,7],
        [2,9,6,8,5,7,4,3,1],
        [4,1,7,2,9,3,6,5,8],
        [5,6,9,1,3,4,7,8,2],
        [1,2,3,6,7,8,5,4,9],
        [7,4,8,5,2,9,1,6,3],
        [6,5,2,7,8,1,3,9,4],
        [9,8,1,3,4,5,2,7,6],
        [3,7,4,9,6,2,8,1,5]
    ];

    board = sudokuShuffle(board);

    return board;
}

console.log(sudokuGenerator());
export default sudokuGenerator;