import React from 'react';
import '../styles/Row.css';


const Row = ({ children, className }) => {


    return (
        <div className={`row ${className}`}>
            {children}
        </div>
    );
};


export default Row;