import React from 'react';
import {Card} from "../../components";
import {blue_lagoon} from "../../assets";
import './Places.css'

const description = 'Grindavík’s Blue Lagoon (about a 50-minute drive from the capital) is otherworldly in appearance—black lava' +
    'rock punctuated with milky blue waters, and steam billowing like clouds. But the visual appeal is only part' +
    'of the experience. A soak in the 100-degree waters (which come from the output of a nearby geothermal plant)' +
    'is a spa-like experience all its own, with silica mud masks and mineral salts ensuring your skin will look and' +
    'feel better than it did when you got there.'
const Places = () => {
    return (
        <div className="Places">
            <Card img={blue_lagoon} description={description} />
        </div>
    );
};

export default Places;
