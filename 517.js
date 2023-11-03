// https://www.codewars.com/kata/58844f1a76933b1cd0000023/train/javascript
function killKthBit(n, k) {
    return n & ~(1 << k - 1);
}