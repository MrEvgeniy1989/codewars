// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
function factorial(n) {
    if (n < 0 || n > 12) throw new RangeError()
    if (n === 0) return 1
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}

factorial(0)
factorial(1)
factorial(2)
factorial(3)