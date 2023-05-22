// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
let number = function (array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(`${i + 1}: ${array[i]}`)
    }
    return result
}

number(["a", "b", "c"])