import React from 'react';
import '../styles/Frame.css';

const Frame = ({ children, borderImage }) => {

    return (
        <div className="frame">
            {children}
        </div>
    );
};


export default Frame;