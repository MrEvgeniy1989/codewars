// https://www.codewars.com/kata/545af3d185166a3dec001190/train/javascript
function eachCons(array, n) {
    let result = []

    for (let i = 0; i < array.length; i++) {
        if ((i + n) <= array.length) result.push(array.slice(i, i + n))
    }

    return result
}