import React from 'react';
import './NavLinks.css';
import {Link} from "react-router-dom";

const NavLinks = () => {
    return (
        <div className="NavLinks">
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <Link to="/">Home</Link>

            <Link  to="/attractions">Attractions</Link>

            <Link  to="/restaurants">Restaurants</Link>

            <Link  to="/architecture">Architecture</Link>

            <Link  to="/nothinghere">Nothing Here</Link>

        </div>
    );
};

export default NavLinks;
