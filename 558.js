// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
function solve(s) {
    let countUpperCase = 0
    let countLowerCase = 0
    for (const sElement of s) {
        if (sElement === sElement.toUpperCase()) {
            countUpperCase += 1
        } else {
            countLowerCase += 1
        }
    }
    return countUpperCase > countLowerCase ? s.toUpperCase() : s.toLowerCase()
}