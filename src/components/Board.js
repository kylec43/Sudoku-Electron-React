import React from 'react';
import Frame from './Frame';
import Row from './Row';
import Box from './Box';

function getBox(board, row, column) {
    const startRow = 3*row;
    const lastRow = startRow + 2;
    const startColumn = 3*column;
    const lastColumn = startColumn+2;

    const box = [];
    for (let r = startRow; r <= lastRow; r++) {
        for (let c = startColumn; c <= lastColumn; c++) {
            box.push(board[r][c]);
        }
    }

    return box;
};


const Board = ({ board, onTilePress }) => {

    return (
        <Frame
            borderImage="../assets/images/wood.jpg"
        >
            <Row>
                <Box
                    tileValues={getBox(board, 0, 0)}
                    onTilePress={onTilePress}
                />
                <Box
                    tileValues={getBox(board, 0, 1)}  
                    onTilePress={onTilePress} 
                />
                <Box
                    tileValues={getBox(board, 0, 2)}
                    onTilePress={onTilePress}
                />
            </Row>
            <Row>
                <Box
                    tileValues={getBox(board, 1, 0)}
                    onTilePress={onTilePress}
                />
                <Box
                    tileValues={getBox(board, 1, 1)}
                    onTilePress={onTilePress}
                />
                <Box
                    tileValues={getBox(board, 1, 2)}
                    onTilePress={onTilePress}
                />
            </Row>
            <Row>
                <Box
                    tileValues={getBox(board, 2, 0)}
                    onTilePress={onTilePress}
                />
                <Box
                    tileValues={getBox(board, 2, 1)}
                    onTilePress={onTilePress}
                />
                <Box
                    tileValues={getBox(board, 2, 2)}
                    onTilePress={onTilePress}
                />
            </Row>
        </Frame>
    );
};


export default Board;