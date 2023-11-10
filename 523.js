// https://www.codewars.com/kata/6507e3170b7009117e0c7865/train/javascript
function freedPrisoners(prison) {
    if (!prison[0]) return 0
    let numFreed = prison.length
    for (let i = 1; i < prison.length; i++) {
        if (prison[i] === prison[i - 1]) numFreed--
    }
    return numFreed
}