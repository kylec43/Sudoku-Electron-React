import React from 'react';
import '../styles/Box.css';
import '../styles/Tile.css';
import Row from './Row';
import Tile from './Tile';


const Box = ({ tileValues, onTilePress }) => {


    return (
        <div className="box">
            <Row className="top-row">
                <Tile 
                    data={tileValues[0]}
                    onPress={onTilePress}
                />
                <Tile 
                    data={tileValues[1]}
                    onPress={onTilePress}
                />
                <Tile
                    data={tileValues[2]}
                    onPress={onTilePress}
                />
            </Row>
            <Row>
                <Tile 
                    data={tileValues[3]}
                    onPress={onTilePress}
                />
                <Tile 
                    data={tileValues[4]}
                    onPress={onTilePress}
                />
                <Tile
                    data={tileValues[5]}
                    onPress={onTilePress}
                />
            </Row>
            <Row className="bottom-row">
                <Tile 
                    data={tileValues[6]}
                    onPress={onTilePress}
                />
                <Tile 
                    data={tileValues[7]}
                    onPress={onTilePress}
                />
                <Tile
                    data={tileValues[8]}
                    onPress={onTilePress}
                />
            </Row>
        </div>
    );
};


export default Box;