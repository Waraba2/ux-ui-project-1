import React from 'react';
import './NavBar.css'
import {NavLinks} from "../../components";
import {Outlet} from "react-router-dom";

function NavBar () {
    return (
        <div className='Navbar'>
            <NavLinks />
            <Outlet />
        </div>
    );
}

export default NavBar;
