import React from 'react';
import Radium from 'radium';
import Navbar from '../Navbar/Navbar'

const Layout = () => {

    const itemStyle = {
        display: 'flex',
    }
    return (
        <div style={itemStyle}>
            <Navbar></Navbar>
        </div>
    )
}

export default Radium(Layout);