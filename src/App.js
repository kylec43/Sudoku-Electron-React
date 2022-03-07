import React from 'react';
import Board from './components/Board';
import useSudoku from './hooks/useSudoku';


const App = () => {
  const { board, setTileSelected, setTileValue } = useSudoku();

  return (
    <Board
      board={board}
      onTilePress={setTileSelected}
    />
  );
};

export default App;