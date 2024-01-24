// https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript
function primeFactors(n) {
    let result = ''

    for (let i = 2; i <= n; i++) {
        let count = 0
        while (n % i === 0) {
            n /= i
            count++
        }
        if (count > 0) {
            result += `(${i}`
            if (count > 1) {
                result += `**${count}`
            }
            result += `)`
        }
    }

    return result
}

primeFactors(7775460)