// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript
function queueTime(customers, n) {
    let result = []
    for (let i = 0; i < n; i++) {
        result.push(0)
    }
    for (let i = 0; i < customers.length; i++) {
        let min = Math.min(...result)
        let index = result.indexOf(min)
        result[index] += customers[i]
    }
    return Math.max(...result)
}

queueTime([2, 2, 3, 3, 4, 4], 2)