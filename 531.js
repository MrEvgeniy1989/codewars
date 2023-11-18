// https://www.codewars.com/kata/6469e4c905eaefffd44b6504/train/javascript
function reverseNumber(num, base) {
    let output = 0n;
    if (base === 1n) {
        return num;
    } else {
        while (num > 0n) {
            output = output * base + num % base;
            num = num / base;
        }
    }
    return output;
}