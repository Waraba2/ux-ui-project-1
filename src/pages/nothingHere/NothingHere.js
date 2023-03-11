import React from 'react';
import {Link} from "react-router-dom";
import './NothingHere.css'

const NothingHere = () => {
    return (
        <div className="NothingHere">
            <Link to='/' className='redirect'>.......Go Home</Link>
        </div>
    );
};

export default NothingHere;
