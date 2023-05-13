// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
function SeriesSum(n) {
    if (n === 0) return n.toFixed(2)
    let result = 1
    let denominator = 1
    for (let i = 0; i < n; i++) {
        denominator += 3
        result += 1 / denominator
    }

    return result.toFixed(2)
}

SeriesSum(2)