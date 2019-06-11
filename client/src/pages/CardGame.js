import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Modal from '../components/Modal';
import cards from '../Cards.json';
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';

let cardArr = [];

let matches = 0;
let attempts = 10;

for (let i = 0; i < cards.length; i++) {
    cardArr.push(cards[i]);
    cardArr.push(cards[i]);
}

function handler(e){
    e.stopPropagation();
    e.preventDefault();
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

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }


    state = {
        cards: shuffle(cardArr),
        id: "",
        value: "",
        suit: "",
        flipCards: [],
        cardLength: cardArr.length
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

        //re-enables clicks on document
        document.removeEventListener("click",handler,true);
    }

    launchModal = () => {
        let modal = document.getElementById('modal1');
        let instance = M.Modal.getInstance(modal);

        instance.open();
    }

    clickCard = event => {

        //this.launchModal();

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

            //temporarily removes all clicks on document 
            document.addEventListener("click",handler,true);

            /* If second card clicked, check if equal to previous card */
            if ((currentValue === prevValue) && (currentSuit === prevSuit)) {

                /* If equal to previous card, increment match score and clear state */

                //re-enables clicks on document
                document.removeEventListener("click",handler,true);

                matches++;

                console.log('score = ' + matches);

                M.toast({ html: '<i class="material-icons">exposure_plus_1</i>', displayLength: 1000, classes: 'matchToast' });

                this.setState({
                    value: "",
                    suit: "",
                    id: "",
                    flipCards: []
                });

                if (matches === (this.state.cardLength) / 2) {
                    console.log('You win!');
                    this.launchModal();
                }

            } else {

                /* If not equal to previous card, increment attempts, clear state and flip both cards back over */

                attempts--;

                console.log('attempts = ' + attempts);

                M.toast({ html: '<i class="material-icons">exposure_neg_1</i>', displayLength: 1000, classes: 'attemptToast' });


                setTimeout(() => {
                    this.flipBack(currentID, this.resetStateValues);
                }, 1000);

                if (attempts === 0) {
                    this.launchModal();
                }


            }

        }

    }

    render() {
        console.log(this.state);

        return (
            <div>
                <Nav matches={matches} attempts={attempts} />
                    <br></br>
                    <br></br>
                    <div className="row" id="cardRow">
                        {this.state.cards.map((card, i) => (
                            <div className="col s2" key={i}>
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
                <Modal matches={matches} />
            </div>
        );
    }
}

export default CardGame;