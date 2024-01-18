// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript
function zeros(n) {
    let result = 0

    for (let i = 5; i <= n; i *= 5) {
        result += Math.floor(n / i)
    }

    return result
}

zeros(5)