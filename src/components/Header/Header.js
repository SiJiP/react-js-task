import React from 'react';
import Radium from 'radium';

const header = (props) => {

    const headerStyle = {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '18px',
        height: '50px',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#b6c0c2',
    }
    const textStyle = {
        fontWeight: 'normal'
    }
    return (
        <div style={headerStyle}>
            <strong style={textStyle}>{props.name}</strong>
        </div>
    )
}

export default Radium(header);