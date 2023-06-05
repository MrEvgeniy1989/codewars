// https://www.codewars.com/kata/54598d1fcbae2ae05200112c/train/javascript
function all(arr, fun) {
    return arr.every(el => fun(el))
}

all([1, 2, 3, 4, 5], function (v) {
    return v < 9
})
all([1, 2, 3, 4, 5], function (v) {
    return v > 9
})