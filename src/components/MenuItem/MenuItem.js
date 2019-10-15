import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router-dom'

const menuItem = (props) => {

    const itemStyle = {
        listStyleType: 'none',
        display: 'flex',
        padding: '10px 0',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '18px',
        cursor: 'pointer',
        width: '100%',
        ':hover': {
            backgroundColor: '#92a9b0'
        }
    }
    return (
        <li style={itemStyle}>
            <Link to={props.linkTo}>{props.name}</Link>
        </li>
    )
}

export default Radium(menuItem);