// https://www.codewars.com/kata/63f96036b15a210058300ca9/train/javascript
function secondSymbol(s, symbol) {
    return s.indexOf(symbol, s.indexOf(symbol) + 1);
}