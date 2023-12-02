// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript
function roundToNext5(n) {
    if (n % 5 === 0) {
        return n
    }
    for (let i = n; i < n + 4; i++) {
        if (i % 5 === 0) {
            return i
        }
    }
}