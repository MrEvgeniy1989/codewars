// https://www.codewars.com/kata/59126992f9f87fd31600009b/train/javascript
function whoseMove(lastPlayer, win) {
    return win ? (lastPlayer === 'black' ? 'black' : "white") : (lastPlayer === 'black' ? 'white' : "black")
}