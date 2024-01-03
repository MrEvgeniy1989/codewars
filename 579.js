// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript
function sumDigPow(a, b) {
    let result = []
    let digits = []
    for (let i = a; i < b; i++) {
        digits = i.toString().split('').map(el => +el)
        let current = 0
        for (let j = 0; j < digits.length; j++) {
            current += digits[j] ** (j + 1)
        }
        if (current === i) result.push(i)
    }
    return result
}

sumDigPow(1, 100)