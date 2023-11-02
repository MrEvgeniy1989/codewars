// https://www.codewars.com/kata/5a0da79b32b8b98b8d000097/train/javascript
function findConstant(arr, lb, ub) {
    return arr.reduce((s, v) => s + v, 0) / arr.length - (ub + lb) / 2
};