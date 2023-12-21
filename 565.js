// https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript
function inAscOrder(arr) {
    const arr2 = [...arr].sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) return false
    }
    return true
}

inAscOrder([1, 2, 4, 7, 19])