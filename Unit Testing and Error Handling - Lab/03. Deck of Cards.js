function printDeskOfCards(cards) {
    const result = [];
    let invalid = false;
    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        };
    
        if (faces.includes(face) == false) {
            console.log('Invalid card: ' + `${face+suit}`);
            invalid = true;
        };
        if (Object.keys(suits).includes(suit) == false) {
            console.log('Invalid card: ' + `${face+suit}`);
            invalid = true;
        };
    
        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        };
    }

    cards.forEach(card => {
        let face = card.slice(0, card.length - 1);
        let suit = card[card.length - 1];
        result.push(createCard(face,suit).toString());
    });

    if (invalid == false) {
        console.log(result.join(' '))
    }


}

printDeskOfCards(['AS', '10D', 'KH', '2C']);
printDeskOfCards(['5S', '3D', 'QD', '1C']);