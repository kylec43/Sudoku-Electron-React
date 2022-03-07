import React, { useContext } from 'react';
import { Context as SudokuContext } from '../context/sudokuContext';

const useSudoku = () => {
    const { board, setTileSelected, setTileValue } = useContext(SudokuContext);

    return { board, setTileSelected, setTileValue };
};


export default useSudoku;