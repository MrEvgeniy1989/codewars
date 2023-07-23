// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript
function howManySmaller(arr, n) {
    let newArr = arr.map(el => +el.toFixed(2))

    return newArr.filter(el => el < n).length
}

howManySmaller([1.234, 1.235, 1.228], 1.24)