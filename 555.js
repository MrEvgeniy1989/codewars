// https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript
function sumDigits(number) {
    return number.toString().split('').reduce((acc, el) => el !== '-' ? acc + +el : acc, 0)
}
