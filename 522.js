// https://www.codewars.com/kata/65126d52a5de2b11c94096d2/train/javascript
const closingInSum = n =>
    [...`${n}`].reduce((sum, dgt, idx, arr) => sum + dgt * 10 ** (++idx <= arr.length / 2), 0);