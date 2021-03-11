var expect = chai.expect;  

describe('PlayerFunctions', function() {
    describe('#addHand', function() {
        it ('should push an array to the empty this.hand array', function() {
            let player1 = new Player('Player 1'); 
            let deck = [1,2,3,4,5]; 
            var x = player1.addHand(deck);  
            expect(x).to.be.an('array').that.includes(2); 
        });
    });
    
    describe('#incrementScore', function() {
        it ("it should add 1 to the player's score", function() {
            let player2 = new Player('Player 2'); 
            let x = player2.incrementScore();
            expect(x).to.equal(1); 
        })
    })
});

describe('DeckFunctions', function() {
    describe('#createDeck', function() {
        it('should create an array of 52 cards', function() {
            let mainDeck = new Deck(); 
            var x = mainDeck.createDeck(); 
            expect(x).to.have.lengthOf(52); 
        });
    });
    describe('#shuffle', function() {
        it('should shuffle an array of 52 cards', function() {
            let mainDeck = new Deck(); 
            mainDeck.createDeck(); 
            let x = mainDeck.shuffle(); 
            expect(x).to.have.lengthOf(52); 
         });
    });
});


describe('GameFunctions', function() {
    describe('#dealCards', function() {
        it('should split deck in two and deal 1/2 of the deck to each player', 
        function() {
            // let mainDeck = new Deck(); 
            // mainDeck.createDeck(); 
            // mainDeck.shuffle(); 
            // let player1 = new Player('Player 1'); 
            // let player2 = new Player('Player 2'); 
            let x = dealCards(player1, player2, mainDeck); 
            expect(x).to.have.lengthOf(26); 
        })
    })
    describe('#compareHand', function() {
        it('should add one to player 1 score', function() {
            let mainDeck = new Deck(); 
            mainDeck.createDeck(); 
            mainDeck.shuffle(); 
            let player1 = new Player('Player 1'); 
            let player2 = new Player('Player 2'); 
            dealCards(player1, player2, mainDeck); 
            let x = compareHand(player1, player2); 
            expect(x).to.equal(1); 
        }); 
    });
    // describe('#playGame', function() {
    //     it('should play game until all cards are gone', function() {
    //         let x = 
    //     })
    // })
});
