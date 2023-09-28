// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript
function capitalize(s, arr) {
    return [...s].map((x, i) => arr.includes(i) ? x.toUpperCase() : x).join('')
};