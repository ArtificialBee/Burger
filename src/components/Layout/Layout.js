import React from 'react';
import Aux from '../../hoc/Auxilliary'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const Layout = (props) => {
    return (
        <Aux>
            <Toolbar />
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className="Content">{props.children}</main> {/*Ovo radimo kako bismo ovu komponentu mogli iskoristiti kao 'omot' za ostale komponente*/}
        </Aux>

    );
}

export default Layout;
