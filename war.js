const suits = ['♥','♦','♣','♠'];
const ranks = [
    { name: '2', value: 2 },{ name: '3', value: 3 },{ name: '4', value: 4 },{ name: '5', value: 5 },
    { name: '6', value: 6 },{ name: '7', value: 7 },{ name: '8', value: 8 },{ name: '9', value: 9 },
    { name: '10', value: 10 },{ name: 'J', value: 11 },{ name: 'Q', value: 12 },{ name: 'K', value: 13 },{ name: 'A', value: 14 }
];

function createDeck() {
    const deck = [];
    suits.forEach(suit => ranks.forEach(r => deck.push({ suit, rank: r.name, value: r.value }))); return deck;
}