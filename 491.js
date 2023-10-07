// https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7/train/javascript
function squaresNeeded(grains) {
    return Math.ceil(Math.log2(grains + 1))
}