import sudokuGenerator from "../util/sudokuGenerator";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
    switch(action.type) {

        case "set-value": {
            const row = action.payload.row;
            const column = action.payload.column;
            const board = [...state.board];
            board[row] = [...board[row]];
            board[row][column].value = action.payload.value;
            return {...state, board};
        }
        case "set-selected": {
            /* Get payload */
            const row = action.payload.row;
            const column = action.payload.column;
            const value = action.payload.value;

            /* Copy Board */
            const board = [...state.board];

            /* Copy row that will be mutated */
            board[row] = [...board[row]];


            /* Set current selected row to false */
            if (state.selectedTile) {
                const selectedRowIndex = state.selectedTile.row;
                const selectedColIndex = state.selectedTile.column;
                board[selectedRowIndex] = [...board[selectedRowIndex]];
                board[selectedRowIndex][selectedColIndex].selected = false;
            }


            /* Set new selected row */
            board[row][column].selected = value;
            const selectedTile = value ? { row, column } : null;
            
            return {...state, board, selectedTile};
        }
        default:
            return state;
    }
};



const setTileValue = (dispatch) => (row, column, value) => {
    dispatch({type: "set-value", payload: {row, column, value}});
};


const setTileSelected = (dispatch) => (row, column, value=true) => {
    dispatch({type: "set-selected", payload: {row, column, value}});
};


function formatSudokuBoard(board) {
    return board.map((row, rowIndex) => {
        return row.map((value, columnIndex) => {
            return {row: rowIndex, column: columnIndex, value, selected: false}
        });
     });
}




/* initialBoardState */
const initialBoardState = formatSudokuBoard(sudokuGenerator());

export const { Context, Provider } = createDataContext(
    reducer,
    { setTileValue, setTileSelected },
    { board: initialBoardState, selectedTile: null }
);