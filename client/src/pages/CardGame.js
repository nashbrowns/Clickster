import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Card from '../components/Card';
import cards from '../Cards.json';
import M from "materialize-css";

M.AutoInit();

let cardArr = [];

var matches = 0;
let attempts = 10;

for (let i = 0; i < cards.length; i++) {
    cardArr.push(cards[i]);
    cardArr.push(cards[i]);
}

let hideFace = {

    cardElem: {
        overflow: 'visible'
    },
    cardRev: {
        display: 'none',
        transform: 'translateY(0%)'
    }
};

let showFace = {
    cardElem: {},
    cardRev: {}
};



function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

class CardGame extends Component {


    state = {
        cards: shuffle(cardArr),
        id: "",
        value: "",
        suit: "",
        flipCards: []
    };

    flipBack = (ID, refreshStateValues) => {
        this.setState({
            flipCards: [...this.state.flipCards, parseInt(ID)]
        });

        setTimeout(function () {
            refreshStateValues();
        }, 100);
    }

    resetStateValues = () => {
        this.setState({
            value: "",
            suit: "",
            id: "",
            flipCards: []
        });
    }



    clickCard = event => {

        /* getting previously clicked card values  */
        let prevValue = this.state.value;
        let prevSuit = this.state.suit;
        let prevID = this.state.id;


        /* getting currently clicked card values */
        let currentValue = event.target.getAttribute('data-value');
        let currentSuit = event.target.getAttribute('data-suit');
        let currentID = event.target.getAttribute('data-id');


        console.log("current card: " + currentValue + " of " + currentSuit + "id = " + currentID);
        console.log("previous card: " + prevValue + " of " + prevSuit + " id = " + prevID);

        console.log("flipCards = " + this.stateflipCards);

        /* Checking if first card clicked */
        if ((prevValue === "") && (prevSuit === "")) {


            /* If first card clicked, set value in state */
            this.setState({
                value: event.target.getAttribute('data-value'),
                suit: event.target.getAttribute('data-suit'),
                id: event.target.getAttribute('data-id'),
                flipCards: [parseInt(event.target.getAttribute('data-id'))]
            });


        } else {

            /* If second card clicked, check if equal to previous card */
            if ((currentValue === prevValue) && (currentSuit === prevSuit)) {

                /* If equal to previous card, increment match score and clear state */

                matches++;

                console.log('score = ' + matches);

                M.toast({html: '<i class="material-icons">exposure_plus_1</i>',displayLength: 1000, classes: 'matchToast'});

                this.setState({
                    value: "",
                    suit: "",
                    id: "",
                    flipCards: []
                });

            } else {

                /* If not equal to previous card, increment attempts, clear state and flip both cards back over */

                attempts--;

                console.log('attempts = ' + attempts);

                M.toast({html: '<i class="material-icons">exposure_neg_1</i>',displayLength: 1000, classes: 'attemptToast'});


                setTimeout(() => {
                    this.flipBack(currentID, this.resetStateValues);
                }, 1000);


            }

        }

    }

    render() {
        console.log(this.state);

        return (
            <div>
                <Nav matches={matches} attempts={attempts} />
                <div className="container">
                    <div className="row">
                        {this.state.cards.map((card, i) => (
                            <div className="col" key={i}>
                                <Card
                                    id={i}
                                    url={card.url}
                                    suit={card.suit}
                                    value={card.value}
                                    passFunction={this.clickCard}
                                    style={(this.state.flipCards.includes(i) && (this.state.flipCards.length === 2)) ? showFace : hideFace}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default CardGame;