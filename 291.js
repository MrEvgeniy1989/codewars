function getSum(a, b) {
    let result = 0
    if (a < b) {
        for (let i = a; i <= b; i++) result += i
    }
    if (a > b) {
        for (let i = b; i <= a; i++) result += i
    }
    if (a === b) result = a
    return result
}

getSum(5, -1)