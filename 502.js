// https://www.codewars.com/kata/5eb34624fec7d10016de426e/train/javascript
function martingale(bank, outcomes) {
    let stack = bank;
    let roundBet = 100;
    for (let i = 0; i < outcomes.length; i++) {
        let round = outcomes[i];
        if (round == 1) {
            stack = stack + roundBet;
            roundBet = 100;
        } else {
            stack = stack - roundBet;
            roundBet *= 2;
        }
    }
    return stack;
}