import React, { Component } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Card from '../components/Card';
import cards from '../Cards.json';

let cardArr = [];

for(let i = 0;i<cards.length;i++){
    cardArr.push(cards[i]);
    cardArr.push(cards[i]);
}

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
        revealed: false
      };

    clickCard = event => {

        /* getting previously clicked card values  */
        let prevValue = this.state.value;
        let prevSuit = this.state.suit;
        let prevID = this.state.id;


        /* getting currently clicked card values */
        let currentValue = event.target.getAttribute('data-value');
        let currentSuit = event.target.getAttribute('data-suit');
        let currentID = event.target.getAttribute('data-id');

        console.log("current card: " + currentValue +" of "+currentSuit + "id = "+currentID);
        console.log("previous card: " + prevValue +" of "+prevSuit + " id = "+prevID);
        
        if(currentID === prevID){
            console.log("Just clicked this card");

        } else{
        this.setState({value: event.target.getAttribute('data-value'),
                        suit: event.target.getAttribute('data-suit'),
                          id: event.target.getAttribute('data-id')});
        }
        
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        {this.state.cards.map((card, i) => (
                            <div className="col" key={i} onClick={this.clickCard}>
                            <Card 
                            id={i}
                            url={card.url}
                            suit={card.suit}
                            value={card.value}
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