import React from 'react';
import './HomePage.css'
import {NavBar} from "../../containers";

function HomePage (){
    return (
        <div className="HomePage">
            <NavBar />
            <div className="clip-text">
                Welcome to Iceland
            </div>
        </div>
    );
}


export default HomePage;

