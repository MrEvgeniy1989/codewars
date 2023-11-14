// https://www.codewars.com/kata/64eca9a7bc3127082b0bc7dc/train/javascript
function deal(n) {

    let state = n;
    let deck = [...DECK];
    let res = [];

    while (deck.length) {
        state = (state * 214013 + 2531011) % 2 ** 31;

        let pos = Math.floor(state / 2 ** 16) % deck.length;
        let card = deck[pos];

        deck[pos] = deck[deck.length - 1];
        deck[deck.length - 1] = card;
        res.push(deck.pop());
    }

    return res;
}