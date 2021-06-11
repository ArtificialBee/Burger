import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxilliary'

import './SideDrawer.css'

const SideDrawer = (props) => {

    let attachetClasses = ["SideDrawer", "Close"]
    if (props.open) {
        attachetClasses = ["SideDrawer", "Open"];
    }
    attachetClasses = attachetClasses.join(" ");

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachetClasses}>
                <Logo height="11%" margin-top="32px" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default SideDrawer;
