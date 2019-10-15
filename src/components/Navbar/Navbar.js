import React from 'react';
import Radium from 'radium';
import MenuItem from './../MenuItem/MenuItem';


const navbar = (props) => {

    const container = {
        display: 'flex',
        width: '200px',
        height: '100%',
        minHeight: '100vh',
        backgroundColor: '#b6c0c2',
        color: '#324c52',
        justifyContent: 'center'
    }

    const ulTag = {
        padding: '0',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: '50px 0'
    }
    return (
        <div style={container}>
            <ul style={ulTag}>    
                <MenuItem name="To Do List" linkTo="/todo" ></MenuItem>
                <MenuItem name="Fetch data" linkTo="/API"></MenuItem>
            </ul>
        </div>
    )
}

export default Radium(navbar);