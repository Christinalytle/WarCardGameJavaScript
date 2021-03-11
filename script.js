class Player {
    constructor(name) {
        this.name = name;
        this.score = 0; 
        this.hand = []; 
    }

    addHand(deck) {
        for (let i = 0; i < deck.length; i++) {
            this.hand.push(deck[i]); 
        }
        return this.hand; 
    }


    incrementScore() {
        this.score += 1 ;
        return this.score; 
    }
}

// class Card {
//     constructor(value, name, suit) {
//         this.value = value; 
//         this.name= name; 
//         this.suit = suit; 
//     }

//     describe() {
//         return `${this.value}, ${this.name}, ${this.suit}`; 
//     }
// }

class Deck {
    constructor() {
        this.deck = [];
    }

    createDeck() {
        let suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < rank.length; j++) {
             this.deck.push({
                suits: suits[i],
                rank: rank[j],
                value: j
             });
            }
        }
        return this.deck; 
    }

    shuffle() {
        let count = this.deck.length;
            while(count) {
                this.deck.push(this.deck.splice(Math.floor(Math.random() * count), 1)[0]);
                count -= 1;
        }
        return this.deck; 
    }
}


/* Game Play */

//create deck
const mainDeck = new Deck(); 

mainDeck.createDeck();

//shuffle deck
mainDeck.shuffle(); 

console.log(mainDeck); 

//create players 
let player1 = new Player("Player 1"); 
let player2 = new Player("Player 2");  

//deal cards to each player
dealCards(player1, player2, mainDeck); 

//Play game until all cards hav been played 
playGame(player1, player2); 



// /* Functions for War Game */

function dealCards(p1, p2, deck) {
    let player1Hand = deck.deck.slice(0,26);
    let player2Hand = deck.deck.slice(26); 
    p1.addHand(player1Hand); 
    p2.addHand(player2Hand); 
    return player1Hand; 
}


function playGame(p1, p2) {
    do {
        compareHand(p1, p2);
        console.log(`Player 1 Score: ${p1.score}, Player 2 Score: ${p2.score}`);
    } while (p1.hand.length != 0 && p2.hand.length != 0)
} 

function compareHand(p1, p2) {
    let x = p1.hand[0]; 
    let y = p2.hand[0];  

    if (x.value > y.value) {
        //removes first card from deck 
        p1.hand.shift(x);
        p2.hand.shift(y); 
        p1.incrementScore(); 
        return p1.score; 
    } else if (x.value < y.value) {
        //removes first card from deck
        p1.hand.shift(x); 
        p2.hand.shift(y); 
        p2.incrementScore()
        return p2.score; 
    } else {
        p1.hand.shift(x); 
        p2.hand.shift(y); 
    }
}
