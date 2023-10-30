// https://www.codewars.com/kata/56cafdabc8cfcc3ad4000a2b/train/javascript
function score(n) {
    return n > 0 ? parseInt(new Number(n).toString(2).replace(/0/g, 1), 2) : 0;
}