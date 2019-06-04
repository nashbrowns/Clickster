import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
//import CardContainer from '../components/CardContainer';
import Card from '../components/Card';

function CardGame() {
    return(
        <div>
            <Nav />
            <container className="Card-Container">
                <div class="row">
                    <div class="col">
                        <Card />
                    </div>
                    <div class="col">
                        <Card />
                    </div>
                </div>
            </container>
            <Footer />
        </div>
    );
}

export default CardGame;