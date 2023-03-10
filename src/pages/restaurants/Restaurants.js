import React from 'react';
import './Restaurants.css'
import {NavBar} from "../../containers";
import {Card} from "../../components";
import {
    bergson,
    bryggjan,
    fjoruborodid,
    rub,
} from "../../assets/food";

const title_bergson =`Bergsson Mathus, Reykjavik`;
const location_bergson = `Iceland`;
const description_bergson = `Possibly, one of the best restaurants in Iceland for brunch, Bergsson Mathus is perched` +
    `right in the centre of Reykjavik (Templarasund 3), making it really easy to find.The menu has some of the most` +
    `delicious baked goodies that are so moreish!Obviously, they serve so much more than baked dreams, though!` +
    `Bergsson Mathus make a pretty mean avocado and smoked salmon that’ll set you up for the day. It’s a totally` +
    `laid-back spot that lets the food do the talking.`;

const title_bryggjan =`Bryggjan Cafe, Grindavik`;
const location_bryggjan = `Iceland`;
const description_bryggjan = `The Bryggjan Cafe is only around 10 minutes from the Blue Lagoon.Nestled right on the` +
    `harbourfront, Bryggjan Cafe has some of the tastiest lobster broth you can ever imagine. It’s a great place to` +
    `visit after you’ve visited the Blue Lagoon, especially as you can have one refill of your lobster soup too!`;

const title_fjoruborodid =`Fjoruborodid, Stokkseyri`;
const location_fjoruborodid = `Iceland`;
const description_fjoruborodid = `Perched in Stokkseyri, Fjorubordid is a pretty legendary seafood spot located pretty close` +
    `to Selfoss and around sixty kilometres from Reykjavik.Once your here, make sure to try their piping hot langoustine` +
    `soup that is so amazing after a chilly morning exploring. If soup is not your thing, try their Langoustine tails` +
    `smothered in garlic butter – it always tastes (and smells so good).`;

const title_rub =`Rub 23, Akureyri`;
const location_rub = `Iceland`;
const description_rub = `Located in Akureyri, Rub 23 feels like a really cool (but totally chilled) restaurant that` +
    `you could easily find in London. The menu here has a pretty decent amount of choices, but if I’m honest, you`+
    `come here for the sushi! Make sure to try their uramaki with Arctic char and their tuna hosomaki. That being` +
    `said, the smoke-infused scallops are an absolutely killer appetizer.`;


const Restaurants = () => {
    return (
        <div className="Restaurants">
            <NavBar />
                <div className="Restaurants_Card">
                    <Card
                        image={bergson}
                        title={title_bergson}
                        location={location_bergson }
                        description={description_bergson}
                    />
                    <Card
                        image={bryggjan}
                        title={title_bryggjan}
                        location={location_bryggjan}
                        description={description_bryggjan}
                    />

                    <Card
                        image={fjoruborodid}
                        title={title_fjoruborodid}
                        location={location_fjoruborodid}
                        description={description_fjoruborodid}
                    />
                    <Card
                        image={rub}
                        title={title_rub}
                        location={location_rub}
                        description={description_rub}
                    />

                </div>
        </div>
    );
};

export default Restaurants ;