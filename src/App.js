import React, { useEffect } from 'react';
import Board from './components/Board';
import useSudoku from './hooks/useSudoku';

const numbers = new Set();
for (let i = 1; i < 10; i++) {
  numbers.add(i.toString());
}


const App = () => {
  const { board, setTileSelected, setTileValue, selectedTile } = useSudoku();


  useEffect(() => {
    const keydownListener = e => {
      if (selectedTile && numbers.has(e.key)) {
        setTileValue(selectedTile.row, selectedTile.column, Number(e.key));
      }
    };
    
    document.addEventListener("keydown", keydownListener);

    return () => {
      document.removeEventListener("keydown", keydownListener);
    }
  }, [selectedTile]);


  return (
    <Board
      board={board}
      onTilePress={(row, column) => {
        if (selectedTile && selectedTile.row === row && selectedTile.column === column) {
          setTileSelected(row, column, false);
        } else {
          setTileSelected(row, column);
        }
      }}
    />
  );
};

export default App;