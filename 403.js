// https://www.codewars.com/kata/5763bb0af716cad8fb000580/train/javascript
function countSquares(cuts) {
    return cuts === 0 ? 1 : (6 * cuts * cuts) + 2;
}