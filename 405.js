// https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
function firstToLast(str, c) {
    let start = -1
    let end = -1
    for (let i = 0; i < str.length; i++) {
        if (str[i] === c) {
            if (start === -1) start = i
            end = i
        }
    }
    if (start === -1) {
        return -1
    } else if (end === -1) {
        return 0
    } else return end - start
}

firstToLast("ababc", "a")
firstToLast("ababc", "c")
firstToLast("ababc", "d")