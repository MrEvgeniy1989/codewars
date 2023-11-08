// https://www.codewars.com/kata/65127141a5de2b1dcb40927e/train/javascript
function spinAround(turns) {
    let t = 0
    for (let x of turns) {
        t += x == "left" ? -1 : 1
    }
    return Math.floor(Math.abs(t) / 4)
}