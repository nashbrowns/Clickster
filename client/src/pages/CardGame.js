import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Card from '../components/Card';

class CardGame extends Component {

    state = {
        //
      };

    render() {
        return (
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
}

export default CardGame;