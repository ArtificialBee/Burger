import React from 'react';
import './DrawToggle.css'

const DrawerToggle = (props) => {
    return (
        <div onClick={props.clicked} className="DrawerToggle">
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default DrawerToggle;
