import React from 'react';
import './HomePage.css'
import intro from '../../assets/home/intro.jpg'
import {NavBar} from "../../containers";

function HomePage (){
    return (
        <div className="HomePage">
            <NavBar />
               <div className="clip-text">
                Welcome to Iceland
               </div>
               <img alt='intro' src={intro}/>
        </div>
    );
}


export default HomePage;

