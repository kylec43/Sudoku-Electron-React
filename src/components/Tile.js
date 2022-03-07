import React from 'react';
import '../styles/Tile.css';

const Tile = ({ data, onPress }) => {


    return (
        <div 
            style={data.selected ? styles.selectedTile : null} 
            className="tile" 
            onClick={e => onPress(data.row, data.column)}
        >
            <p 
                className="tile-text"
            >
                {data.value ? data.value : ""}
            </p>
        </div>
    );
};


const styles = {
    selectedTile: {
        backgroundColor: "darkgray"
    }
};


export default Tile;