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

            /* Copy Board */
            const row = action.payload.row;
            const column = action.payload.column;
            const board = [...state.board];

            /* Copy rows that will be mutated */
            if (state.selectedTile) {
                const selectedRowIndex = state.selectedTile.row;
                const selectedColIndex = state.selectedTile.column;
                board[selectedRowIndex] = [...board[selectedRowIndex]];
                board[selectedRowIndex][selectedColIndex].selected = false;
            }
            console.log("Row:",row);
            board[row] = [...board[row]];
            board[row][column].selected = true;
            return {...state, board, selectedTile: { row, column }};
        }
        default:
            return state;
    }
};



const setTileValue = (dispatch) => (row, column, value) => {
    dispatch({type: "set-value", payload: {row, column, value}});
};


const setTileSelected = (dispatch) => (row, column) => {
    dispatch({type: "set-selected", payload: {row, column}});
};




/* initialBoardState */
let initialBoardState = 
[[8,3,5,4,1,6,9,2,7],
 [2,9,6,8,5,7,4,3,1],
 [4,1,7,2,9,3,6,5,8],
 [5,6,9,1,3,4,7,8,2],
 [1,2,3,6,7,8,5,4,9],
 [7,4,8,5,2,9,1,6,3],
 [6,5,2,7,8,1,3,9,4],
 [9,8,1,3,4,5,2,7,6],
 [3,7,4,9,6,2,8,1,5]];


 initialBoardState = initialBoardState.map((row, rowIndex) => {
    return row.map((value, columnIndex) => {
        return {row: rowIndex, column: columnIndex, value, selected: false}
    });
 });

export const { Context, Provider } = createDataContext(
    reducer,
    { setTileValue, setTileSelected },
    { board: initialBoardState, selectedTile: null }
);