import React from 'react';
import"./Card.css"




function Card (props) {
    return (
        <div className="Card">
          <img src={props.img} alt="Card" />
          <p>{props.description}</p>
        </div>
    )
}
export default Card;