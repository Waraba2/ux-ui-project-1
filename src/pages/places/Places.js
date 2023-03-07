import React from 'react';
import {Card} from "../../components";
import {blue_lagoon, hotel_budir, hvitserkur,landmannalaugar, maelifell, reynisfjara, seljalandsfoss,skogafoss} from "../../assets";
import './Places.css'

const title_blue_lagoon = 'Blue Lagoon'
const location_blue_lagoon  = 'Iceland'
const description_blue_lagoon  = 'Grindavík’s Blue Lagoon (about a 50-minute drive from the capital) is otherworldly in appearance—black lava' +
    'rock punctuated with milky blue waters, and steam billowing like clouds. But the visual appeal is only part' +
    'of the experience. A soak in the 100-degree waters (which come from the output of a nearby geothermal plant)' +
    'is a spa-like experience all its own, with silica mud masks and mineral salts ensuring your skin will look and' +
    'feel better than it did when you got there.'


const title_hótel_buđir = 'Hótel Buđir';
const location_hótel_buđir = 'Iceland'
const description_hótel_buđir = ` It may seem strange to include a hotel in a list of so many natural wonders, but that's a testament to just how ` +
    `beautiful Hótel Buđir really is. Its magical setting on a remote peninsula two hours from Reykjavik features the` +
    `sea behind it, lava fields in front of it, and a tiny black church beside it. The hotel itself is rustic-chic,` +
    `and even offers wake-up calls if and when the Northern Lights make a late-night appearance.`

const title_hvítserkur =  `Hvítserkur`
const location_hvítserkur = 'Iceland'
const description_hvítserkur = ` Often referred to as the “troll of northwest Iceland,” Hvítserkur rises 49 feet from from Húnaflói Bay like some` +
    ` sort of mythical beast. The rock—best viewed from Iceland's Arctic Coast Way—often looks like it's moving due to` +
    ` the birds that love to perch atop it, making the formation feel more like a living creature.`

const title_landmannalaugar = `Landmannalaugar`;
const location_landmannalaugar = 'Iceland'
const description_landmannalaugar = `Located in Iceland's southern Highlands, the area of Landmannalaugar has some of the most colorful landscapes` +
    `in the country thanks to its high geothermal activity. It's an extremely popular hiking area during the summer` +
    `months, where lucky visitors can be surrounded by a veritable kaleidoscope of greens, oranges, reds, blacks, browns,` +
    `and more.`;

const title_mount_mælifell = `Mount Mælifell`;
const location_mælifell = 'Iceland'
const description_mælifell = `A volcanic cone of ashes and lava rock, the 2595-foot Mælifell sits on the edge of the Mýrdalsjökull glacier and` +
    `covered in grimmia, a moss that changes color depending on the soil’s humidity. You can drive past the volcano` +
    `during the summer months, or see it along the Laugavegur Route: the most popular multi-day hiking route in Iceland.`;


const title_reynisfjara = `Reynisfjara`;
const location_reynisfjara = 'Iceland'
const description_reynisfjara = `Just a 20-minute drive from Vik, in southern Iceland, jet-black sand and spectacularly shaped basalt columns make` +
    `Reynisfjara one of the most impressive sites in the country. Spend a foggy afternoon strolling along the rugged` +
    `coast (just strolling—these waters are definitely not made for swimming) and photographing the moon-like rock` +
    `formations, deep caves, and towering cliff faces.`;

const title_seljalandsfoss = `Seljalandsfoss`;
const location_seljalandsfoss = 'Iceland'
const description_seljalandsfoss = `Seljalandsfoss might be a bit of a drive from Reykjavik—about an hour and 45 minutes, to be exact—but it’s worth` +
    `the trip to see this impressive south-coast waterfall thunder down from a 200-foot drop. The best thing about` +
    `these particular falls is that you can actually walk behind them, pretending you're living in a fairy tale for` +
    `a couple of minutes.`;

const title_skógafoss = `Skógafoss`;
const location_skógafoss  = 'Iceland'
const description_skógafoss = `An easy stop off Route 1 (aka the Ring Road), Skógafoss is one of the most beautiful places in Iceland—and in a land` +
    `of so many waterfalls, that's definitely saying something. The 197-foot cascade crashes onto black sand, and you can` +
    `walk right up to the bottom if you're willing to get drenched. Worth it for the double rainbow viewings, we say.`;

const Places = () => {

    return (
        <div className="Places">
            <Card
                image={blue_lagoon}
                title={title_blue_lagoon }
                location={location_blue_lagoon }
                description={description_blue_lagoon }
            />

            <Card
                image={hotel_budir}
                title={title_hótel_buđir}
                location={location_hótel_buđir}
                description={description_hótel_buđir}
            />

            <Card
                image={hvitserkur}
                title={title_hvítserkur}
                location={location_hvítserkur}
                description={description_hvítserkur}
            />
            <Card
                image={landmannalaugar}
                title={title_landmannalaugar}
                location={location_landmannalaugar}
                description={description_landmannalaugar}
            />
            <Card
                image={maelifell}
                title={title_mount_mælifell}
                location={location_mælifell}
                description={description_mælifell}
            />
            <Card
                image={reynisfjara}
                title={title_reynisfjara}
                location={location_reynisfjara}
                description={description_reynisfjara}
            />
            <Card
                image={seljalandsfoss}
                title={title_seljalandsfoss}
                location={location_seljalandsfoss}
                description={description_seljalandsfoss}
            />
            <Card
                image={skogafoss}
                title={title_skógafoss}
                location={location_skógafoss}
                description={description_skógafoss}
            />
        </div>
    );
};

export default Places;
