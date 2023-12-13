// https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript
function maxMultiple(divisor, bound) {
    for (let i = bound; i > 0; i--) {
        if (i % divisor === 0) {
            return i
        }
    }
}