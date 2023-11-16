// https://www.codewars.com/kata/64b8c6c09416795eb9fbdcbf/train/javascript
const repSet = (n) => Array.from({length: n}, (_, i) => repSet(i));