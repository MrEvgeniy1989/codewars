// https://www.codewars.com/kata/62a611067274990047f431a8/train/javascript
function alternate(n, firstValue, secondValue) {
    return Array.from({length: n}, (_, i) => i % 2 === 0 ? firstValue : secondValue);
}