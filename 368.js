// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript
function getDivisorsCnt(n) {
    let result = 0
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            result = n / i === i ? result + 1 : result + 2
        }
    }
    return result
}

getDivisorsCnt(10)
getDivisorsCnt(11)