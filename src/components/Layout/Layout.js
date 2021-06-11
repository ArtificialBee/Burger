import React, { useState } from 'react';
import Aux from '../../hoc/Auxilliary'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const Layout = (props) => {

    const [showSideDrawer, showSideDrawerHandler] = useState(true);

    const sideDrawerClosedHandler = () => {
        showSideDrawerHandler(false);
        console.log("JA SAM SADA PRVA BAAAA")
    }

    const sideDrawerToggler = () => {
        showSideDrawerHandler(!showSideDrawer);
    }



    return (
        <Aux>
            <Toolbar drawToggler={sideDrawerToggler} />
            <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className="Content">{props.children}</main> {/*Ovo radimo kako bismo ovu komponentu mogli iskoristiti kao 'omot' za ostale komponente*/}
        </Aux>

    );
}

export default Layout;
