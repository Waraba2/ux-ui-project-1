import React from 'react';
import './Architecture.css'
import {NavBar} from "../../containers";
import {Card} from "../../components";
import {
    hallgrimskirkja,
    harpa,
    museum,
    perlan
} from "../../assets/architecture";

const title_hallgrimskirkja = `Hallgrímskirkja`;
const location_hallgrimskirkja = `Iceland`;
const description_hallgrimskirkja = `Hallgrímskirkja stands guard over Reykjavík. The church is both a parish church and a national` +
    `sanctuary in Iceland. Its stepped concrete facade is an ode to modernism and a reminder of the Icelandic landscape.` +
    ` The church is named after the 17th-century clergyman Hallgrímur Pétursson, author of Hymns of the Passion.`;

const title_harpa = `Harpa`;
const location_harpa = `Iceland`;
const description_harpa = `Harpa is one of Reykjavík’s most striking landmarks and a centre of cultural and social life in` +
    `the very heart of the city. Harpa is a tourist destination and an award-winning work of art that has been visited` +
    `by millions of people since opening in 2011.`;

const title_museum = `The National Museum of Iceland`;
const location_museum = `Iceland`;
const description_museum = `The National Museum of Iceland (Thjodminjasafn Islands) is a modern and progressive experience` +
    `that provides a comprehensive picture of the past 1200 years of Iceland‘s cultural history. The museum details` +
    `Iceland’s history and culture from the earliest evidence of a pagan burial site to Bjork’s music career.`;

const title_perlan = `Perlan ('The Pearl')`;
const location_perlan = `Iceland`;
const description_perlan = `Perlan ('The Pearl') is a museum and rotating glass dome that stands on top of Öskjuhlíð Hill` +
    `in Reykjavík; surrounded by forest, it is one of the capital's most distinctive landmarks. The site is built on` +
    `top of six water tanks that store millions of liters of Reykjavík's hot water, although some of them now serve a` +
    `different purpose.`;
const Architecture = () => {
    return (
        <div className="Architecture">
            <NavBar />
                <div className="Architecture_Card">
                    <Card
                        image={hallgrimskirkja}
                        title={title_hallgrimskirkja}
                        location={location_hallgrimskirkja}
                        description={description_hallgrimskirkja}
                    />
                    <Card
                        image={harpa}
                        title={title_harpa}
                        location={location_harpa}
                        description={description_harpa}
                    />

                    <Card
                        image={museum}
                        title={title_museum}
                        location={location_museum}
                        description={description_museum}
                    />
                    <Card
                        image={perlan}
                        title={title_perlan}
                        location={location_perlan}
                        description={description_perlan}
                    />

                </div>
        </div>
    );
};

export default Architecture;