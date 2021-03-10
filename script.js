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
    }


    incrementScore() {
        this.score += 1 ;
    }

    describe() {
        console.log(`${this.name} has ${this.hand.length} cards and their score is ${this.score}`); 
    }
}

class Card {
    constructor(value, name, suit) {
        this.value = value; 
        this.name= name; 
        this.suit = suit; 
    }

    describe() {
        return `${this.value}, ${this.name}, ${this.suit}`; 
    }
}

class Deck {
    constructor() {
        this.deck = [];

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < rank.length; j++) {
             this.deck.push({
                suits: suits[i],
                rank: rank[j],
                value: j
             });
            }
        }

        // for (let i = 0; i < suits.length; i++) {
        //     for (let j = 0; j < rank.length; j++) {
        //       let card = { Rank: rank[j], Suit: suits[i] };
        //       this.deck.push(card);
        //   }
        //   return this.deck; 
        // }
    } 
    
    //     for (let suit in suits) {
    //       for (let value in values) {
    //         this.deck.push(`${values[value]} of ${suits[suit]}`);
    //       }
    //     }
    //   }

    // buildDeck() {
    //     for (var i = 0; i < this.suits.length; i++) {
    //       for (var j = 0; j < this.rank.length; j++) {
    //        this.deck.push({
    //           suits: this.suits[i],
    //           rank: this.rank[j],
    //           value: j
    //        });
    //       }
    //     }

    //     return console.log(this.deck); 
    //   }

    shuffle(){
        const { deck } = this;
        let m = deck.length, i;
    
        while(m){
          i = Math.floor(Math.random() * m--);
    
          [deck[m], deck[i]] = [deck[i], deck[m]];
        }
    
        return this;
      }
    

    // shuffle(arra1) {
    //     var ctr = arra1.length, temp, index;
    
    // // While there are elements in the array
    //     while (ctr > 0) {
    // // Pick a random index
    //         index = Math.floor(Math.random() * ctr);
    // // Decrease ctr by 1
    //         ctr--;
    // // And swap the last element with it
    //         temp = arra1[ctr];
    //         arra1[ctr] = arra1[index];
    //         arra1[index] = temp;
    //     }
    //     return arra1;
    // }

    splitCards(deck) {
        let player1Hand = []; 
        let player2Hand = []; 
        var i = 0;
    
        //push a card to each "hand" array
        while (i != deck.length) {
            player1Hand.addHand(deck[i]);
            player2Hand.addHand(deck[(i+1)]);
            i+=2;
        }
    }


    describe() {
        for (var s = 0; s < this.suits.length; s++) {
            for (var n = 0; n < this.names.length; n++) {
            console.log(`${this.names[n]} of ${this.suits[s]}`);
        } 
    }
}

}


//create deck
const mainDeck = new Deck(); 

//create player 
let player1 = new Player("Player 1"); 
let player2 = new Player("Player 2");  

let testArray = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

console.log(mainDeck.deck); 

mainDeck.shuffle(); 

console.log(mainDeck.deck); 

let player1Hand = mainDeck.deck.slice(0,26);
let player2Hand = mainDeck.deck.slice(26); 

player1.addHand(player1Hand); 

player1.incrementScore(); 

player1.describe(); 

console.log(player1Hand);
console.log(player2Hand.length); 

let x = player1Hand[0]; 
let y = player2Hand[0]; 

//player1.incrementscore
// console.log(x); 
// console.log(y); 

// player1Hand.push(x); 
// player1Hand.push(y); 
// player2Hand.shift(y); 
// player1Hand.shift(x); 

// console.log(player1Hand); 
// console.log(player2Hand); 

// compareHand(player1Hand, player2Hand); 

// compareHand(player1Hand, player2Hand); 
// compareHand(player1Hand, player2Hand); 
// compareHand(player1Hand, player2Hand); 
// compareHand(player1Hand, player2Hand); 
// compareHand(player1Hand, player2Hand); 
// compareHand(player1Hand, player2Hand); 
// compareHand(player1Hand, player2Hand); 
// compareHand(player1Hand, player2Hand); 
// compareHand(player1Hand, player2Hand); 
// compareHand(player1Hand, player2Hand); 
// compareHand(player1Hand, player2Hand); 
// compareHand(player1Hand, player2Hand); 


//playGame(player1Hand, player2Hand); 


// console.log(player1Hand); 
// console.log(player2Hand); 





/* Functions for War Game */

function playGame(deckOne, deckTwo) {
do {
    compareHand(deckOne, deckTwo)
} while (deckOne.length != 0 && deckTwo.length != 0)
} 

function compareHand(deck1, deck2) {
    let x = deck1[0]; 
    let y = deck2[0];  
    //empty score 

    if (x.value > y.value) {
        //pushed card to back of player's hand 
        //removes current card from the front of each deck
        deck1.shift(x)
        deck2.shift(y); 
    } else if (x.value < y.value) {
        console.log('Player 2 Wins ');
        //removes
        deck1.shift(x); 
        deck2.shift(y); 
    } else {
        console.log('Tie'); 
        deck1.shift(x); 
        deck2.shift(y); 
    }
}

// dealCards (p1, p2, deck) {
//     deckSize = deck.
// }


// //console.log(player2Hand):




// player1.describe(); 





//new player 

//shuffle deck

//deal cards 

//flip one card

//score 

//war, if possible