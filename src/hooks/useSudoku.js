import React, { useContext } from 'react';
import { Context as SudokuContext } from '../context/sudokuContext';

const useSudoku = () => {
    const { board, selectedTile, setTileSelected, setTileValue } = useContext(SudokuContext);

    return { board, selectedTile, setTileSelected, setTileValue };
};


export default useSudoku;