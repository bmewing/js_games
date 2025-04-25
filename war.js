const winCounterEl = document.getElementById('win-counter');
const pDeckEl = document.getElementById('player-deck');
const oDeckEl = document.getElementById('opponent-deck');
const pCardEl = document.getElementById('player-card');
const oCardEl = document.getElementById('opponent-card');
const pWarEl = document.getElementById('player-war');
const oWarEl = document.getElementById('opponent-war');
const pSpoilsEl = document.getElementById('player-spoils');
const oSpoilsEl = document.getElementById('opponent-spoils');
const msgEl = document.getElementById('message');
const controlsEl = document.getElementById('controls');

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

function playTurn() {
    let pCard = pDeck.shift();
    let oCard = oDeck.shift();
    displayCard(pCardEl, pCard);
    displayCard(oCardEl, oCard);
}

function displayCard(el, card) {
    el.textContent = card?`${card.rank}${card.suit}`:'';
}

let pDeck = createDeck();
let oDeck = createDeck();

pDeckEl.addEventListener('click', playTurn);
