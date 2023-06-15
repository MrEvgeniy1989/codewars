// https://www.codewars.com/kata/587c2d08bb65b5e8040004fd/train/javascript
function pointsPer48(ppg, mpg) {
    if (ppg === 0 || mpg === 0) return 0
    return Number(((ppg / mpg) * 48).toFixed(1))
}

pointsPer48(12, 20)
pointsPer48(10, 10)
pointsPer48(5, 17)